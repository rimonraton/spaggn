<template>
    <div class="max-w-full h-screen mx-auto shadow-lg bg-white px-2 py-4 rounded-lg lg:mt-6">
        <div class="container mx-auto lg:w-5/6">
            <div class="px-2 py-0 lg:py-2 lg:px-4">
                <h3 class="text-lg text-center font-medium leading-6 text-gray-900">
                    Update Blog
                </h3>
            </div>
            <div class="md:grid md:grid-cols-1 md:gap-6">
                <div class="mt-2 w-full md:mt-0">
                    <form @submit.prevent="saveBlogData" enctype="multipart/form-data">
                        <div class="mb-6 w-full">
                            <span
                                v-for="error in v$.title.$errors"
                                class="text-red-500"
                                :key="error.$uid">
                                {{ error.$message }}
                            </span>
                            <input
                                type="text"
                                v-model="formData.title"
                                class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
                                placeholder="Blog Title"/>

                        </div>
                        <div class="mb-6 w-full">
                            <label class="block text-sm font-medium text-gray-700">
<!--                                <span-->
<!--                                    v-for="error in v$.coverPhoto.$errors"-->
<!--                                    class="text-red-500"-->
<!--                                    :key="error.$uid">-->
<!--                                    {{ error.$message }}-->
<!--                                </span>-->
                            </label>
                            <div
                                class="relative mt-1 flex justify-center px-6 pt-5 pb-6 text-center
                                border-2 border-gray-300 border-dashed rounded-md">
                                    <div v-if="formData.coverPhoto == null">
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                                             viewBox="0 0 48 48" aria-hidden="true">
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div v-else>
                                        <img class="mx-auto w-12 h-12" :src="formData.coverPhoto" />
<!--                                        <span class="text-sm text-red-700 cursor-pointer" @click="removeCover">Remove</span>-->
                                    </div>
                                    <label
                                        for="file-upload-cover"
                                        class="dragdrop bg-blue-400 cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                        <div class="absolute bottom-1 w-full ">
                                            Blog Cover Photo
                                        </div>
                                        <input id="file-upload-cover" @change="onFileChangePhoto($event, 'coverPhoto')"
                                               name="file-upload-cover" type="file" class="sr-only" accept="image/*">
                                    </label>
                                    <p class="text-xs text-gray-500">
                                        drag and drop <br>
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                            </div>
                        </div>
                        <div class="mb-6 w-full h-52">
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Blog Description
                            </label>
                            <span
                                class="text-red-500 my-5"
                                v-for="error in v$.description.$errors"
                                :key="error.$uid">
                                    {{ error.$message }}
                            </span>
                            <div class="relative">
                                <QuillEditor
                                    theme="snow"
                                    :modules="modules"
                                    v-model:content="formData.description"
                                    contentType="html"
                                    toolbar="full"
                                />
                            </div>

                            <div class="w-full mt-32 md:mt-16">
                                <button type="submit" v-if="!loading"
                                        class="text-white uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    {{ formData.isUpdate ? 'Update' : 'Submit' }}
                                </button>
                                <button v-else
                                        class="inline-flex items-center justify-center px-4 py-2 font-semibold w-full leading-6 text-sm shadow rounded-md text-white bg-blue-700 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed uppercase"
                                        disabled="">
                                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                    Blog is {{ formData.isUpdate ? 'Updating...' : 'Save...' }}
                                </button>
                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { QuillEditor } from '@vueup/vue-quill'
import BlotFormatter from 'quill-blot-formatter'
import ImageUploader from 'quill-image-uploader';
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { useRouter, useRoute } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
const router = useRouter()
const route = useRoute()
const store = useStore()
const loading = ref(false)

const formData = reactive({
    title: '',
    description: '',
    coverPhoto: null,
    isUpdate: false,
})

const rules = computed(() => {
    return {
        title: { required },
        description: { required },
        // coverPhoto: { required },
    }
})
const v$ = useVuelidate(rules, formData)

const modules = [
    {
        name: 'ImageUploader',
        module: ImageUploader,
        options: {
            upload: file => {
                return new Promise((resolve, reject) => {
                    const formData = new FormData();
                    formData.append("image", file);

                    axios.post('/api/upload-post-image', formData)
                        .then(res => {
                            // console.log(res)
                            resolve(res.data);
                        })
                        .catch(err => {
                            reject("Upload failed");
                            console.error("Error:", err)
                        })
                })
            }
        }
    },
    {
        name: 'BlotFormatter',
        module: BlotFormatter,
        options: {}
    }
]

const onFileChangePhoto = (e, photo) => {
    if (e.target.files[0]) {
        const mimeType = e.target.files[0].type
        if (mimeType.split('/')[0] === 'image') {
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(e.target.files[0]); // read the local file
            reader.onloadend = function () {
                // set video data as background of div
                formData[photo] = reader.result
            };
        }
    } else {
        alert("file is empty!");
    }
};
const saveBlogData = async () => {
    const result = await v$.value.$validate()
    console.log('result from artist profile..', result)
    if (result) {
        try {
            loading.value = true
            const blog = await store.dispatch('blogModule/savePost', formData)
            console.log('get Save data',blog)
            clear()
            loading.value = false
            return
            router.push({ name: 'Artist' })
        } catch (e) {
            console.log(e)
        }
    } else {
        alert('Form not submitted')
    }

}

const clear = () => {
    formData.title = ''
    formData.description = ''
    formData.coverPhoto = null
    formData.isUpdate = false
}
const post = ref({});
const getPost = async () => {
    // console.log('getPost', route.params.id)
    const param = {
        post: route.params.id,
        slug: 'test'
    }
    post.value = await store.dispatch('blogModule/getPost', param);
    formData.title =  post.value.title
    formData.description = post.value.description
    formData.coverPhoto = post.value.photo
    formData.isUpdate = true
}

getPost();
</script>

<style scoped>
.whitespace {
    white-space: nowrap;
}
.dragdrop {
    position: absolute;
    width: 100%;
    height: 90px;
    top: 0px;
    background: transparent;

}
.ql-editor{
    min-height:150px !important;
}
</style>


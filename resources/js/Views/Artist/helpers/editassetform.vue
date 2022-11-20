<template>
    <div class="bg-white py-4 px-4 rounded-lg">
        <div class="container mx-auto lg:w-5/6">
            <div class="px-4 py-2 sm:px-0 text-center">
                <!-- {{props.assetData}} -->
                {{ props.assetData.property_data }}
                <h3 class="text-xl font-medium leading-6 text-gray-900">Edit Asset</h3>
                <h3 v-if="bottomCloseButton" class="text-3xl font-semibold cursor-pointer absolute right-0 top-0"
                    v-on:click="toggleModal()">
                    <span class=" text-red-500 h-6 w-6 text-2xl block">
                        ×
                    </span>
                </h3>
                <!-- <p class="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.
          </p> -->
            </div>
            <div class="md:grid md:grid-cols-1 md:gap-6">
                <div class="mt-5 md:mt-0">
                    <form @submit.prevent="saveArtistAssetData" enctype="multipart/form-data">
                        <div class="grid md:grid-cols-1 md:gap-6 mb-6">
                            <div>
                                <label class="block text-xl font-medium text-gray-700"> Upload File <span
                                        class="text-red-500">*</span>
                                </label>
                                <span class="text-sm">Add your unique image / video / audio file</span>
                                <div
                                    class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div class="space-y-1 text-center">
                                        <div v-if="formData.asset == null">
                                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor"
                                                fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <div v-else>
                                            <div v-if="formData.fileFormat == 'image'">
                                                <img class="mx-auto w-12 h-12" :src="formData.asset" />
                                            </div>
                                            <div v-if="formData.fileFormat == 'video'">
                                                <video width="200" controls>
                                                    <source :src="formData.asset" id="video_here" />
                                                    Your browser does not support HTML5 video.
                                                </video>
                                            </div>
                                        </div>
                                        <div class="flex text-sm text-gray-600">
                                            <label for="file-upload"
                                                class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span>Upload a file</span>
                                                <input id="file-upload" @change="onFileChangePhoto($event, 'asset')"
                                                    name="file-upload" type="file" class="sr-only">
                                            </label>
                                            <p class="pl-1">or drag and drop</p>
                                        </div>
                                        <p class="text-xs text-gray-500">JPG, PNG, GIF, WEBP, MP4 or MP3. Max 30mb.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-6 w-full group">
                            <label for="floating_email"
                                class="peer-focus:font-medium text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Name <span class="text-red-500">*</span>
                            </label>
                            <br>
                            <span>Choose a unique name for your NFT</span>
                            <input type="text" v-model="formData.name" id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder="Enter the NTF's name" required="">

                        </div>
                        <div class="relative mb-6 w-full">
                            <label for="personal_story"
                                class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400">
                                Description
                                <br>
                                <span class="text-sm">Describe your NFT, help other users understand what's unique about
                                    it</span>
                            </label>
                            <textarea id="personal_story" v-model="formData.description" rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
                                placeholder="NFT description..."></textarea>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-5 md:gap-6">
                            <div class="col-span-1 md:col-span-5">
                                <label class="block text-xl font-medium text-gray-700"> Properties
                                </label>
                                <span class="text-sm">List attributes that represents your NFT (color, shape, mood,
                                    etc..)</span>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-5 md:gap-6" v-for="pd, index in formData.propertyData"
                            :key="index">
                            <div class="mb-6 w-full group col-span-2">
                                <input type="text" v-model="pd.property" name="floating_first_name"
                                    id="floating_first_name"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder="Property">
                            </div>
                            <div class="mb-6 w-full group col-span-2">
                                <input type="text" v-model="pd.value" name="floating_last_name" id="floating_last_name"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder="Value">
                            </div>
                            <div class="relative z-0 mb-6 w-12 col-span-1 group">
                                <span v-show="index > 0"
                                    class="bg-red-500 px-3 py-2 rounded text-xl text-white cursor-pointer mr-2"
                                    @click="remove(index)">X</span>
                                <span v-show="index == 0"
                                    class="bg-blue-500 px-3 py-2 rounded text-xl text-white cursor-pointer"
                                    @click="addProperty">+</span>
                            </div>
                        </div>
                        <!-- <div class="mb-6">
                            <div class="flex items-center mb-4">
                                
                                <label for="default-checkbox"
                                    class="text-sm font-medium text-gray-900 dark:text-gray-300">
                                    <input id="default-checkbox" v-model="formData.rights" type="checkbox" value="rights"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    I approve that I'm the owner or have the rights of publication and sale.
                                </label>
                            </div>
                            <div class="flex items-center">
                                <label for="checked-checkbox"
                                    class="text-sm font-medium text-gray-900 dark:text-gray-300">
                                    <input id="checked-checkbox" v-model="formData.terms" type="checkbox" value="terms"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    I approve NFTrade's Terms & Conditions
                                </label>
                            </div>
                        </div> -->
                        <div class="w-full">
                            <button type="submit"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const props = defineProps({
    bottomCloseButton: { type: Boolean, default: false },
    assetData: { type: Object, required: true }
})
const store = useStore()
const router = useRouter()
const formData = reactive({
    id: null,
    name: '',
    description: '',
    rights: true,
    terms: true,
    asset: null,
    fileExtension: '',
    fileFormat: '',
    videosrc: null,
    propertyData: [
        {
            property: "",
            value: ""
        }
    ]
})
const addProperty = () => {
    formData.propertyData.push({
        property: '',
        value: ''
    })
}
const remove = (index) => {
    formData.propertyData.splice(index, 1)
}
const onFileChangePhoto = (e, photo) => {
    if (e.target.files[0]) {
        const mimeType = e.target.files[0].type
        console.log('split..', mimeType.split('/'))
        if (mimeType.split('/')[0] === 'image') {
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(e.target.files[0]); // read the local file
            reader.onloadend = function () {
                // set video data as background of div
                formData[photo] = reader.result
                formData.fileFormat = mimeType.split('/')[0]
                formData.fileExtension = mimeType.split('/')[1]
            };
        } else if (mimeType.split('/')[0] === 'video') {
            formData.videosrc = e.target.files[0]
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(e.target.files[0]); // read the local file
            reader.onloadend = function () {
                // set video data as background of div
                formData[photo] = reader.result
                formData.fileFormat = mimeType.split('/')[0]
                formData.fileExtension = mimeType.split('/')[1]
            };
        } else {
            formData[photo] = e.target.files[0]
        }
    } else {
        alert("file is empty!");
    }
};
const saveArtistAssetData = async () => {
    // console.log('form data...',formData)
    // return
    let assetData = new FormData();
    assetData.append("id", formData.id);
    assetData.append("name", formData.name);
    assetData.append("description", formData.description);
    assetData.append("rights", formData.rights);
    assetData.append("terms", formData.terms);
    assetData.append("asset", formData.asset);
    assetData.append("fileExtension", formData.fileExtension);
    assetData.append("fileFormat", formData.fileFormat);
    assetData.append("videosrc", formData.videosrc);
    assetData.append("propertyData", JSON.stringify(formData.propertyData));

    try {
        await store.dispatch('artistModule/updateArtistAssets', assetData)
        clear()
        router.push('/view-your-assets')
        if (props.bottomCloseButton) {
            emit('close')
        }
    } catch (e) {
        console.log(e)
    }
}
const emit = defineEmits(['close'])

const toggleModal = () => {
    emit('close')
}
const clear = () => {
    formData.name = '',
        formData.description = '',
        formData.rights = false,
        formData.terms = false,
        formData.asset = null,
        formData.fileExtension = '',
        formData.fileFormat = '',
        formData.videosrc = null,
        formData.propertyData = [
            {
                property: "",
                value: ""
            }
        ]
}
onMounted(() => {
    // console.log('props.assetData', props.assetData.properties)
    formData.id = props.assetData.id
    formData.name = props.assetData.name
    formData.description = props.assetData.description
    formData.asset = props.assetData.file
    formData.fileFormat = props.assetData.fileType
    formData.fileExtension = props.assetData.ext
    // rights: false,
    // terms: false,
    // asset: null,
    // fileExtension: '',
    // fileFormat: '',
    // videosrc: null,
    if (props.assetData.property_data) {
        formData.propertyData = JSON.parse(props.assetData.property_data)
    }

})
</script>
<!-- <style src="vue-multiselect/dist/vue-multiselect.css">

</style> -->
<style scoped>

</style>
  
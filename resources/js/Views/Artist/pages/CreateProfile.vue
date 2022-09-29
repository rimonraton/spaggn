<template>
  <div class="bg-white py-4 rounded-lg">
    <div class="container mx-auto lg:w-5/6">
      <div class="px-4 py-2 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Tell us about yourself</h3>
        <p class="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.
        </p>
      </div>
      <div class="md:grid md:grid-cols-1 md:gap-6">
        <div class="mt-5 md:mt-0">
          <form @submit.prevent="saveArtistData" enctype="multipart/form-data">
            <!-- <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <input type="text" v-model="formData.firstName" name="floating_first_name" id="floating_first_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" ">
                <label for="floating_first_name "
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  First name
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input type="text" v-model="formData.lastName" name="floating_last_name" id="floating_last_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" ">
                <label for="floating_last_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                  name</label>
              </div>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input type="email" v-model="formData.email" name="floating_email" id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" ">
              <label for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                The best way to connect with you (email address)
              </label>
            </div> -->
            <div class="relative mb-6 w-full">
              <label for="social" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your social media profiles <span class="hidden lg:inline-block">(Enter To Add More)</span><span class="lg:hidden mr-1">(Click Add More)</span>
                <span v-if="btnTextdata != ''" class="p-1 border-2 border-blue-500 rounded-lg lg:hidden" @click="mobileBtn">
                  Add
                </span>
                <span v-else class="p-1 border-2 rounded-lg bg-gray-200 lg:hidden">
                  Add
                </span>
              </label>
              <multiselect ref="multiselectref" v-model="formData.social" :hideSelected="true" :maxHeight="0"
                placeholder="Type your social account link then press enter" :multiple="true" trackBy="url" label="url"
                :options="[]" :taggable="true" @tag="addTag" @search-change="tagdata">
              </multiselect>
              <span class="text-red-500" v-for="error in v$.social.$errors" :key="error.$uid">{{error.$message}}</span>
            </div>
            <div class="relative mb-6 w-full">
              <label for="personal_story" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                How does your personal story influence your art? ( Minimum 20 characters )
              </label>
              <textarea id="personal_story" v-model="formData.personalStory" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
                placeholder="personal story..."></textarea>
              <span class="text-red-500" v-for="error in v$.personalStory.$errors"
                :key="error.$uid">{{error.$message}}</span>
            </div>
            <div class="relative mb-6 w-full">
              <label for="personal_story" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Where do you draw inspiration from?
              </label>
              <textarea id="personal_story" v-model="formData.inspiration" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
                placeholder="your inspiration"></textarea>
            </div>
            <span class="text-red-500" v-for="error in v$.inspiration.$errors"
              :key="error.$uid">{{error.$message}}</span>
            <div class="relative mb-6 w-full">
              <label for="personal_story" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                What message do your arts convey to the world?
              </label>
              <textarea id="personal_story" v-model="formData.messageToWorld" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
                placeholder="Message to world"></textarea>
              <span class="text-red-500" v-for="error in v$.messageToWorld.$errors"
                :key="error.$uid">{{error.$message}}</span>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative mb-6 w-full group">
                <label for="country" class="block text-sm font-medium text-gray-700">What type of charities would you
                  like to partner with (choose 3)?</label>
                <multiselect ref="multiselectCharity" v-model="formData.charities" :id="charity" :hideSelected="true"
                  placeholder="Select One" :multiple="true" trackBy="id" label="name" :options="charitiesOptions"
                  :closeOnSelect="true">
                </multiselect>
                <span class="text-red-500" v-for="error in v$.charities.$errors"
                  :key="error.$uid">{{error.$message}}</span>
              </div>
              <div class="relative  mb-6 w-full group">
                <label for="country" class="block text-sm font-medium text-gray-700">What artistic inspiration closely
                  resembles your arts (choose one)?</label>
                <multiselect v-model="formData.artisticInspiration" :hideSelected="true" placeholder="Select One"
                  :options="['one', 'two', 'three']">
                </multiselect>
                <span class="text-red-500" v-for="error in v$.artisticInspiration.$errors"
                  :key="error.$uid">{{error.$message}}</span>
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700"> Your Photo <span class="text-red-500"
                    v-for="error in v$.photo.$errors" :key="error.$uid">{{error.$message}}</span></label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <div v-if="formData.photo == null">
                      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"
                        aria-hidden="true">
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <div v-else>
                      <img class="mx-auto w-12 h-12" :src="formData.photo" />
                      <span class="text-sm text-red-700 cursor-pointer" @click="removePhoto">Remove</span>
                    </div>
                    <div class="flex text-sm text-gray-600">
                      <label for="file-upload"
                        class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input id="file-upload" @change="onFileChangePhoto($event, 'photo')" name="file-upload"
                          type="file" class="sr-only" accept="image/*">
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
              <div class="relative mb-6 w-full group">
                <div>
                  <label class="block text-sm font-medium text-gray-700"> Cover Photo (1920 x 300)px <span
                      class="text-red-500" v-for="error in v$.coverPhoto.$errors"
                      :key="error.$uid">{{error.$message}}</span></label>
                  <div
                    class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
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
                        <span class="text-sm text-red-700 cursor-pointer" @click="removeCover">Remove</span>
                      </div>
                      <div class="flex text-sm text-gray-600">
                        <label for="file-upload-cover"
                          class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span>Upload a file</span>
                          <input id="file-upload-cover" @change="onFileChangePhoto($event, 'coverPhoto')"
                            name="file-upload-cover" type="file" class="sr-only" accept="image/*">
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full">
              <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {{formData.isUpdate ? 'Update' : 'Submit'}}
              </button>
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
import Multiselect from 'vue-multiselect'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
const router = useRouter()
const store = useStore()
const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  social: [],
  personalStory: '',
  inspiration: '',
  messageToWorld: '',
  charities: [],
  artisticInspiration: '',
  photo: null,
  coverPhoto: null,
  isUpdate: false
})
const rules = computed(() => {
  return {
    firstName: { required },
    lastName: { required },
    email: { required },
    social: { required },
    personalStory: { required, minLength: minLength(20) },
    inspiration: { required },
    messageToWorld: { required },
    charities: { required },
    artisticInspiration: { required },
    photo: { required },
    coverPhoto: { required },
  }
})
const v$ = useVuelidate(rules, formData)
const btnText = ref('')
const btnTextdata = ref('')
// const isUpdate = ref(false)
const multiselectref = ref()
const charitiesOptions = reactive([
  {
    id: 1,
    name: 'Charity'
  },
  {
    id: 2,
    name: 'Charity 1'
  },
  {
    id: 3,
    name: 'Charity 3'
  }
])
const optionSelected = (option, id) => {
  console.log(`${option.id}`, `${option.name}`)
  console.log(' >> ', formData.charities)
}

const addTag = (value, id) => {
  // options.push({
  //   url: value
  // })
  formData.social.push({
    url: value
  })
  multiselectref.value.$el.focus()
  btnTextdata.value = ''
  // multiselectref.value.activate()
}
const tagdata = (value, id) => {
  if (value) {
    btnTextdata.value = value
  }
}
const mobileBtn = () => {
  // console.log('btnTextdata.value', btnTextdata.value)
  formData.social.push({
    url: btnTextdata.value
  })
  multiselectref.value.$el.focus()
  btnTextdata.value = ''
}
// const removeTag = (removeOption, id) => {
//   const index = options.findIndex(key => key.url == removeOption.url)
//   console.log('remove',removeOption.url, index, options)
//   options.splice(index, 1)
// }
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
const saveArtistData = async () => {
  const result = await v$.value.$validate()
  // console.log('result from artist profile..', result)
  // return

  if (result) {
    try {
      await store.dispatch('artistModule/createArtistProfile', formData)
      clear()
      router.push({ name: 'Artist' })
    } catch (e) {
      console.log(e)
    }
  } else {
    alert('Form not submitted')
  }

}
const getArtistProfile = async () => {
  const res = await store.dispatch('artistModule/getArtistProfile')
  //  profile.value = res
  console.log('res', res != '' && Object.keys(res).length != 0, res)
  if (res != '' && Object.keys(res).length != 0) {
    formData.isUpdate = true
    formData.firstName = res.first_name,
      formData.lastName = res.last_name,
      formData.email = res.email,
      formData.social = JSON.parse(res.sc_profile),
      formData.personalStory = res.personal_story,
      formData.inspiration = res.inspiration,
      formData.messageToWorld = res.message_to_world,
      formData.charities = JSON.parse(res.charities_data),
      formData.artisticInspiration = res.artistic_inspiration,
      formData.photo = res.photo != '' ? res.photo : null,
      formData.coverPhoto = res.cover != '' ? res.cover : null

  } else {
    formData.isUpdate = false
  }
}

const clear = () => {
  formData.firstName = '',
    formData.lastName = '',
    formData.email = '',
    formData.social = [],
    formData.personalStory = '',
    formData.inspiration = '',
    formData.messageToWorld = '',
    formData.charities = [],
    formData.artisticInspiration = '',
    formData.photo = null,
    formData.coverPhoto = null
}
onMounted(() => {
  getArtistProfile()
})
const removePhoto = async () => {
  if (isUpdate) {
    let profileData = new FormData();
    profileData.append("file", formData.photo);
    profileData.append("type", 'photo');
    await store.dispatch('artistModule/imageRemove', profileData)
    formData.photo = null
  } else {
    formData.photo = null
  }

}
const removeCover = async () => {
  if (isUpdate) {
    let profileData = new FormData();
    profileData.append("file", formData.coverPhoto);
    profileData.append("type", 'cover');
    await store.dispatch('artistModule/imageRemove', profileData)
    formData.coverPhoto = null
  } else {
    formData.coverPhoto = null
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.css">

</style>
<style scoped>
.whitespace {
  white-space: nowrap;
}
</style>
  
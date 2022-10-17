<template>
  <div class="container mx-auto lg:w-5/6 p-5">
    <div class="px-4 py-2 sm:px-0">
      <h3 class="text-lg font-medium leading-6 text-gray-900">Tell us about your Organization</h3>
      <p class="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.
      </p>
    </div>
    <div class="md:grid md:grid-cols-1 md:gap-6">
      <div class="mt-5 md:mt-0">
        <form @submit.prevent="saveCharityData" enctype="multipart/form-data">
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 mb-6 w-full group">
              <input type="text" v-model="formData.organizationName" name="floating_org_name" id="floating_org_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" ">
              <label for="floating_org_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Organization's Name
              </label>
              <span class="text-red-500" v-for="error in v$.organizationName.$errors"
              :key="error.$uid">{{error.$message}}</span>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input type="text" v-model="formData.address" name="floating_address" id="floating_address"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" ">
              <label for="floating_address"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Address
              </label>
              <span class="text-red-500" v-for="error in v$.address.$errors"
              :key="error.$uid">{{error.$message}}</span>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 mb-6 w-full group">
              <input type="text" v-model="formData.primaryPhone" name="floating_primary_phone"
                id="floating_primary_phone"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" ">
              <label for="floating_primary_phone"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Primary Phone Number
              </label>
              <span class="text-red-500" v-for="error in v$.primaryPhone.$errors"
              :key="error.$uid">{{error.$message}}</span>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input type="text" v-model="formData.primaryEmail" name="floating_primary_email"
                id="floating_primary_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" ">
              <label for="floating_primary_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Primary Email Address
              </label>
              <span class="text-red-500" v-for="error in v$.primaryEmail.$errors"
              :key="error.$uid">{{error.$message}}</span>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 mb-6 w-full group">
              <input type="text" v-model="formData.websiteAddress" name="floating_website_address"
                id="floating_website_address"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" ">
              <label for="floating_website_address"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Website Address
              </label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input type="text" v-model="formData.ein" name="floating_ein" id="floating_ein"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" ">
              <label for="floating_ein"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                EIN#
              </label>
              <span class="text-red-500" v-for="error in v$.ein.$errors"
              :key="error.$uid">{{error.$message}}</span>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative mb-6 w-full group">
              <label for="country" class="block text-sm font-medium text-gray-700">
                Causes you support
              </label>
              <multiselect ref="multiselectCharity" v-model="formData.causes" :id="charity" :hideSelected="true"
                placeholder="Select One" :multiple="true" trackBy="id" label="name" :options="charitiesOptions"
                :closeOnSelect="true">
              </multiselect>
              <span class="text-red-500" v-for="error in v$.causes.$errors"
              :key="error.$uid">{{error.$message}}</span>
            </div>
            <div class="relative mb-6 w-full group">
              <label for="social" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                List of programs/services you provide <span class="hidden lg:inline-block">(Enter To Add
                  More)</span><span class="lg:hidden mr-1">(Click Add More)</span>
                <span v-if="btnserviceTextdata != ''" class="p-1 border-2 border-blue-500 rounded-lg lg:hidden"
                  @click="servicemobileBtn">
                  Add
                </span>
                <span v-else class="p-1 border-2 rounded-lg bg-gray-200 lg:hidden">
                  Add
                </span>
              </label>
              <multiselect ref="multiselectref" v-model="formData.service" :hideSelected="true" :maxHeight="0"
                placeholder="List of programs/services you provide" :multiple="true" trackBy="name" label="name"
                :options="[]" :taggable="true" @tag="addServiceTag" @search-change="servicetagdata">
              </multiselect>
              <span class="text-red-500" v-for="error in v$.service.$errors"
              :key="error.$uid">{{error.$message}}</span>
            </div>
          </div>
          <div class="relative mb-6 w-full">
            <label for="personal_story" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Mission of your organization
            </label>
            <textarea id="personal_story" v-model="formData.mission" rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
              placeholder="Organization's mission..."></textarea>
              <span class="text-red-500" v-for="error in v$.mission.$errors"
              :key="error.$uid">{{error.$message}}</span>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 mb-6 w-full group">
              <input type="text" v-model="formData.target_demographics" name="floating_target_demographics"
                id="floating_target_demographics"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" ">
              <label for="floating_target_demographics"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Target demographics
              </label>
              <span class="text-red-500" v-for="error in v$.target_demographics.$errors"
              :key="error.$uid">{{error.$message}}</span>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input type="text" v-model="formData.geographic" name="floating_geographic" id="floating_geographic"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" ">
              <label for="floating_geographic"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Geographic area served
              </label>
              <span class="text-red-500" v-for="error in v$.geographic.$errors"
              :key="error.$uid">{{error.$message}}</span>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 mb-6 w-full group">
              <input type="text" v-model="formData.navigatorSite" name="floating_navigator_site"
                id="floating_navigator_site"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" ">
              <label for="floating_navigator_site"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your organization’s link for Charity Navigator site
              </label>
              <span class="text-red-500" v-for="error in v$.navigatorSite.$errors"
              :key="error.$uid">{{error.$message}}</span>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input type="text" v-model="formData.guideStar" name="floating_guide_star" id="floating_guide_star"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" ">
              <label for="floating_guide_star"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your organization’s link for GuideStar
              </label>
              <span class="text-red-500" v-for="error in v$.guideStar.$errors"
              :key="error.$uid">{{error.$message}}</span>
            </div>
          </div>
          <div class="relative mb-6 w-full">
            <label for="social" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your organization’s link for other charity rating organizations <span
                class="hidden lg:inline-block">(Enter To Add More)</span><span class="lg:hidden mr-1">(Click Add
                More)</span>
              <span v-if="btnratingTextdata != ''" class="p-1 border-2 border-blue-500 rounded-lg lg:hidden"
                @click="ratingmobileBtn">
                Add
              </span>
              <span v-else class="p-1 border-2 rounded-lg bg-gray-200 lg:hidden">
                Add
              </span>
            </label>
            <multiselect ref="multiselectRatingref" v-model="formData.ratingOrganizations" :hideSelected="true"
              :maxHeight="0" placeholder="Your organization’s link for other charity rating organizations"
              :multiple="true" trackBy="ratingOrganization" label="ratingOrganization" :options="[]" :taggable="true"
              @tag="addRatingTag" @search-change="ratingtagdata">
            </multiselect>
            <span class="text-red-500" v-for="error in v$.ratingOrganizations.$errors"
              :key="error.$uid">{{error.$message}}</span>
          </div>
          <div class="relative mb-6 w-full">
            <label for="personal_story" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              How do you think GGN can help with your fundraising initiatives?
            </label>
            <textarea id="personal_story" v-model="formData.fundraising" rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
              placeholder="fundraising initiatives?"></textarea>
              <span class="text-red-500" v-for="error in v$.fundraising.$errors"
              :key="error.$uid">{{error.$message}}</span>
          </div>
          <!-- <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative mb-6 w-full group">
                <label for="country" class="block text-sm font-medium text-gray-700">What type of charities would you
                  like to partner with (choose 3)?</label>
                <multiselect ref="multiselectCharity" v-model="formData.charities" :id="charity" :hideSelected="true"
                  placeholder="Select One" :multiple="true" trackBy="id" label="name" :options="charitiesOptions"
                  :closeOnSelect="true">
                </multiselect>
              </div>
              <div class="relative  mb-6 w-full group">
                <label for="country" class="block text-sm font-medium text-gray-700">What artistic inspiration closely
                  resembles your arts (choose one)?</label>
                <multiselect v-model="formData.artisticInspiration" :hideSelected="true" placeholder="Select One"
                  :options="['one', 'two', 'three']">
                </multiselect>
              </div>
            </div> -->
          <div class="grid md:grid-cols-2 md:gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700"> Charity Logo</label>
              <span class="text-red-500" v-for="error in v$.photo.$errors"
              :key="error.$uid">{{error.$message}}</span>
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
                <label class="block text-sm font-medium text-gray-700"> Cover Photo (1920 x 300)px </label>
                <span class="text-red-500" v-for="error in v$.coverPhoto.$errors"
              :key="error.$uid">{{error.$message}}</span>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <div v-if="formData.coverPhoto == null">
                      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"
                        aria-hidden="true">
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <div v-else>
                      <img class="mx-auto w-12 h-12" :src="formData.coverPhoto" />
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
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import Multiselect from 'vue-multiselect'
const store = useStore()
const formData = reactive({
  organizationName: null,
  address: null,
  primaryPhone: null,
  primaryEmail: null,
  websiteAddress: null,
  ein: null,
  causes: [],
  service: [],
  mission: null,
  target_demographics: null,
  geographic: null,
  navigatorSite: null,
  guideStar: null,
  ratingOrganizations: [],
  fundraising: null,
  photo: null,
  coverPhoto: null
})
const btnserviceTextdata = ref('')
const btnratingTextdata = ref('')
const multiselectref = ref()
const multiselectRatingref = ref()
// const ratingOrganization = ref()
const charitiesOptions = computed(() => store.state.organizations != null ? store.state.organizations : [])
// const charitiesOptions = reactive([
//   {
//     id: 1,
//     name: 'Charity'
//   },
//   {
//     id: 2,
//     name: 'Charity 1'
//   },
//   {
//     id: 3,
//     name: 'Charity 3'
//   }
// ])
// const optionSelected = (option, id) => {
//   console.log(`${option.id}`, `${option.name}`)
//   console.log(' >> ', formData.charities)
// }

const addServiceTag = (value, id) => {
  formData.service.push({
    name: value
  })
  multiselectref.value.$el.focus()
  btnserviceTextdata.value = ''
  // multiselectref.value.activate()
}
const servicetagdata = (value, id) => {
  if (value) {
    btnserviceTextdata.value = value
  }
}
const servicemobileBtn = () => {
  formData.service.push({
    name: btnserviceTextdata.value
  })
  multiselectref.value.$el.focus()
  btnserviceTextdata.value = ''
}
const addRatingTag = (value, id) => {
  formData.ratingOrganizations.push({
    ratingOrganization: value
  })
  multiselectRatingref.value.$el.focus()
  btnratingTextdata.value = ''
  // multiselectref.value.activate()
}
const ratingtagdata = (value, id) => {
  if (value) {
    btnratingTextdata.value = value
  }
}
const ratingmobileBtn = () => {
  formData.ratingOrganizations.push({
    ratingOrganization: btnratingTextdata.value
  })
  multiselectRatingref.value.$el.focus()
  btnratingTextdata.value = ''
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
const saveCharityData = async () => {
  const result = await v$.value.$validate()
  if (result) {
    try {
      const res = await store.dispatch('charityModule/createCharityProfile', formData)
      // console.log('res..', res)
      router.push({ name: 'Charity' })
    } catch (e) {
      console.log(e)
    }
  } else {
    alert('Form not submitted')
  }

}
const getOrganizations = async () => {
  await store.dispatch('getOrganisations')
}
const rules = computed(() => {
  return {
    organizationName: { required },
    address: { required },
    primaryPhone: { required },
    primaryEmail: { required },
    ein: { required },
    causes: { required },
    service: { required },
    mission: { required },
    target_demographics: { required },
    geographic: { required },
    navigatorSite: { required },
    guideStar: { required },
    ratingOrganizations: { required },
    fundraising: { required },
    photo: { required },
    coverPhoto: { required }
  }
})
const v$ = useVuelidate(rules, formData)
onMounted(() => {
  getOrganizations()
})
</script>
<style src="vue-multiselect/dist/vue-multiselect.css">

</style>
<style scoped>

</style>

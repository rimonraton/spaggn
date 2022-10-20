<template>
  <div v-if="hasProfile">
    <div class="w-screen h-96 z-50 overflow-hidden bg-gray-300 opacity-75 flex flex-col items-center justify-center">
      <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-24 w-24 mb-4"></div>
      <h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
      <p class="w-1/3 text-center text-white">This may take a few seconds.</p>
    </div>
  </div>
  <div id="home" v-else>
    <div v-if="profile == null || profile == ''">
      <div class="bg-white shadow rounded-lg h-96 w-full">
        <div class="flex flex-row justify-center px-2 py-2 mx-3">
          <div class="flex flex-col mb-2 ml-4 mt-1">
            <div class="text-gray-600 text-2xl font-semibold text-center">
              No data found....
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-4" v-else>
      <div class="bg-white shadow rounded-lg">
        <section class="bg-white dark:bg-gray-900">
          <div class="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
            <div class="flex justify-center xl:w-1/2">
              <img class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
                :src="imageUrl(profile.profile.photo)" alt="">
            </div>

            <div class="flex flex-col items-center xl:items-start xl:w-1/2">
              <h2 class="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                {{profile.name}}
              </h2>
              <div class="bg-white shadow rounded-lg mb-6 mt-4">
                <div class="px-2 py-3 mx-3">
                  <div class="flex flex-col mb-2 ml-4 mt-1">
                    <div class="text-gray-600 text-2xl font-semibold">
                      Social Links
                    </div>
                    <div class="flex flex-col gap-2 cursor-pointer">
                      <div v-for="sc in JSON.parse(profile.profile.sc_profile)" :key="sc">
                        <a :href="sc.url" class="text-blue-500 hover:underline" target="_blank">{{sc.url}}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <img :src="imageUrl(profile.profile.cover)" class="max-w-full h-auto rounded-lg" alt="">
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <div>
          <div class="bg-white shadow rounded-lg">
            <div class="flex flex-row px-2 py-2 mx-3">
              <div class="w-full mt-1">
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                  <h2 class="mb-4 text-center text-xl text-gray-900 font-bold md:text-2xl">
                    Bio
                  </h2>
                  <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
                    <div class="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
                      <div class="h-full flex flex-col justify-center space-y-4">
                        <div>
                          <h6 class="text-lg font-semibold leading-none">Personal Story</h6>
                        </div>
                        <p class="text-gray-600 md:text-l">
                          {{profile.profile.personal_story}}
                        </p>

                      </div>
                    </div>

                    <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                      <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                        <div>
                          <h6 class="text-lg font-semibold leading-none">Inspiration</h6>
                        </div>
                        <p class="text-gray-600"> {{profile.profile.inspiration}}</p>
                      </div>
                    </div>
                    <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                      <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                        <div>
                          <h6 class="text-lg font-semibold leading-none">Message for world</h6>
                        </div>
                        <p class="text-gray-600"> {{profile.profile.message_to_world}}</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white shadow rounded-lg mb-6">
            <div class="flex flex-row px-2 py-3 mx-3">
              <div class="flex flex-col mb-2 ml-4 mt-1">
                <div class="text-gray-600 text-2xl font-semibold">
                  Assets
                </div>
              </div>
            </div>
            <div class="border-b border-gray-100"></div>

            <div class="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2 pb-4" v-if="profileAsset.length > 0">
              <div class="grid grid-cols-6 col-span-2 gap-2">
                <div class="overflow-hidden rounded-xl col-span-3 max-h-[14rem]" v-for="asset in profileAsset"
                  :key="asset">
                  <img class="h-full w-full object-cover" :src="imageUrl(asset.file)" alt="" />
                </div>
              </div>
            </div>
            <div class="font-medium text-sm mb-7 mt-6 mx-3 px-2 pb-4 text-center" v-else>
              <!-- <router-link to="/submit-your-assets"> Please submit your asset</router-link> -->
              <p> Assets are not available yet.</p>
            </div>
          </div>
          <div class="bg-white shadow rounded-lg mb-6">
            <div class="px-2 py-3 mx-3">
              <div class="flex flex-col mb-2 ml-4 mt-1">
                <div class="text-gray-600 text-2xl font-semibold">
                  Social Links
                </div>
                <div class="flex flex-col gap-2 cursor-pointer">
                  <div v-for="sc in JSON.parse(profile.profile.sc_profile)" :key="sc">
                    <a :href="sc.url" class="text-blue-500 hover:underline" target="_blank">{{sc.url}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="bg-white shadow rounded-lg mb-6" id="comments">
            <div class="rounded-xl border p-5 shadow-md w-full bg-white">
              <div class=" w-full border-b pb-3">
                <div class="text-lg font-bold text-slate-700">Comments</div>
              </div>

              <div class="mt-4 mb-6">
                <div class="text-sm text-neutral-600">
                  No comments yet..
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
const route = useRoute()
const store = useStore()
const profile = ref(null)
const user = ref(null)
const profileAsset = ref(null)
const hasProfile = ref(false)
// console.log('process.env.MIX_API_URL', process.env.MIX_API_URL)
const imageUrl = (image) => {
  return process.env.MIX_API_URL + '/' + image;
}
const gotoComment = () => {
  const element = document.getElementById('comments');
  element.scrollIntoView({ behavior: 'smooth' });
}
const gotoUp = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
const getArtistProfile = async () => {
  hasProfile.value = true
  const res = await store.dispatch('artistModule/getArtistDetails', route.params.id)
  hasProfile.value = false
  user.value = res
  profile.value = res
  profileAsset.value = res.assets
}
onMounted(() => {
  getArtistProfile()
})
</script>
  
<style scoped>
.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
  
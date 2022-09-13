<template>
  <div class="flex">
    <main id="home">
      <div class="block">
        <div class="col-span-4">
          <div class="bg-white shadow">
            <div class="flex flex-row px-2 py-3 mx-3">
              <div class="flex flex-col mb-2 ml-4 mt-1">
                <div class="text-gray-600 text-2xl font-semibold">
                  {{profile != null ? profile.first_name + profile.last_name:''}}
                </div>
                <div class="w-full mt-1">
                  <div class="text-gray-400 font-thin text-sm">
                    Details about John Doe
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white shadow">
            <div class="flex flex-row px-2 py-2 mx-3">
              <div class="flex flex-col mb-2 ml-4 mt-1">
                <div class="text-gray-600 text-2xl font-semibold">
                  Bio
                </div>
                <div class="w-full mt-1">
                  <div class="text-gray-400 font-thin text-l">
                    Aaron Penne ("peh-nay"; he/him; b. 1988) is the Director of Engineering at Art Blocks and is the
                    first AB artist to be featured in Curated, Playground, and Factory. He has been making
                    generative
                    artwork since 2017. Born in Chico, CA, Aaron graduated from the University of California San
                    Diego
                    with a master's degree in Electrical Engineering. He worked in that field before pivoting to
                    software (data engineering) at Amazon Web Services (AWS) in Seattle. His artwork explores the
                    space between algorithmic and organic.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white shadow rounded-lg mb-6">
            <div class="flex flex-row px-2 py-3 mx-3">
              <div class="flex flex-col mb-2 ml-4 mt-1">
                <div class="text-gray-600 text-2xl font-semibold">
                  Art Blocks Projects
                </div>
              </div>
            </div>
            <div class="border-b border-gray-100"></div>
            <div class="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
              <div class="grid grid-cols-6 col-span-2 gap-2">
                <div class="overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                  <img class="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
                    alt="" />
                </div>
                <div class="overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                  <img class="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1399&amp;q=80"
                    alt="" />
                </div>
                <div class="overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                  <img class="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                    alt="" />
                </div>
                <div class="overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                  <img class="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                    alt="" />
                </div>
                <div class="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                  <img class="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=765&amp;q=80"
                    alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white shadow rounded-lg mb-6">
            <div class="flex flex-row px-2 py-3 mx-3">
              <div class="flex flex-col mb-2 ml-4 mt-1">
                <div class="text-gray-600 text-2xl font-semibold">
                  Websites/Social Links
                </div>
                <div class="flex gap-2 cursor-pointer">
                  <div>
                    <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class=" w-5"
                      alt="google logo">
                  </div>
                  <div
                    class="block font-semibold tracking-wide text-blue-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base hover:underline">
                    Google</div>
                </div>
                <div class="flex gap-2 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 text-gray-700"
                    viewBox="0 0 16 16">
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <div
                    class="block font-semibold tracking-wide text-blue-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base hover:underline">
                    Github</div>
                </div>
                <div class="flex gap-2 cursor-pointer">
                  <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" class="w-5"
                    alt="Facebook logo">
                  <div
                    class="block font-semibold tracking-wide text-blue-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base hover:underline">
                    Facebook</div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white shadow rounded-lg mb-6" id="comments">
            <div class="rounded-xl border p-5 shadow-md w-full bg-white">
              <div class=" w-full border-b pb-3">
                <div class="text-lg font-bold text-slate-700">Comments</div>
              </div>

              <div class="mt-4 mb-6">
                <!-- <div class="mb-3 text-xl font-bold">Nulla sed leo tempus, feugiat velit vel, rhoncus neque?</div> -->
                <div class="text-sm text-neutral-600">
                  No comments yet..
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex'
const store = useStore()
const profile = ref(null)
const gotoComment = () => {
  const element = document.getElementById('comments');
  element.scrollIntoView({ behavior: 'smooth' });
}
const gotoUp = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
const getArtistProfile = async () => {
 const res = await store.dispatch('artistModule/getArtistProfile')
 profile.value = res
 console.log('res', res)
}
onMounted(() => {
  getArtistProfile()
})
</script>

<style>
</style>

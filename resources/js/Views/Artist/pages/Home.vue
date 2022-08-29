<template>
  <div class="flex">
    <aside class="hidden w-50 md:block flex-shrink-0 sticky top-28 h-60">
      <div class="p-2 flex justify-center">
        <a @click.prevent="gotoUp" href="#"
          class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
          <span class="inline-flex justify-center items-center ml-4">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
              </path>
            </svg>
          </span>
          <span class="ml-2 text-sm tracking-wide truncate">Home</span>
        </a>
      </div>
      <!-- <div class="p-2 flex justify-center">
        <a href="#"
          class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
          <span class="inline-flex justify-center items-center ml-4">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
              </path>
            </svg>
          </span>
          <span class="ml-2 text-sm tracking-wide truncate">Notifications</span>
          <span
            class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
        </a>
      </div> -->

      <div class="p-2 flex justify-center">
        <a @click.prevent="gotoComment" href="#"
          class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
          <span class="inline-flex justify-center items-center ml-4">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
            </svg>
          </span>
          <span class="ml-2 text-sm tracking-wide truncate">Messages</span>
        </a>
      </div>

      <!-- <div class="p-2 flex justify-center">
        <a href="#"
          class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
          <span class="inline-flex justify-center items-center ml-4">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
              </path>
            </svg>
          </span>
          <span class="ml-2 text-sm tracking-wide truncate">Friends</span>
          <span
            class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">(15)</span>
        </a>
      </div> -->

      <!-- <div class="p-2 flex justify-center">
        <a href="#"
          class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
          <span class="inline-flex justify-center items-center ml-4">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
              </path>
            </svg>
          </span>
          <span class="ml-2 text-sm tracking-wide truncate">Lists</span>
        </a>
      </div>

      <div class="p-2 flex justify-center">
        <a href="#"
          class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
          <span class="inline-flex justify-center items-center ml-4">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </span>
          <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
        </a>
      </div>

      <div class="p-2 flex justify-center">
        <a href="#"
          class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
          <span class="inline-flex justify-center items-center ml-4">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
              </path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </span>
          <span class="ml-2 text-sm tracking-wide truncate">Settings</span>
        </a>
      </div> -->
    </aside>

    <main id="home">
      <div class="block">
        <div class="col-span-4">
          <div class="bg-white shadow">
            <div class="flex flex-row px-2 py-3 mx-3">
              <div class="flex flex-col mb-2 ml-4 mt-1">
                <div class="text-gray-600 text-2xl font-semibold">
                  John Doe
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
const gotoComment = () => {
  const element = document.getElementById('comments');
  element.scrollIntoView({ behavior: 'smooth' });
}
const gotoUp = () => {
  window.scrollTo({top: 0, behavior: 'smooth' });
}

</script>

<style>
</style>

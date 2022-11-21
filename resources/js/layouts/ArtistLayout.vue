<template>
  <div class="flex flex-col h-screen">
    <div>
      <nav id="header" class="bg-white  w-full z-10 top-0 shadow absolute md:fixed">
        <div class="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
          <div class="w-1/2 pl-2 md:pl-0">
            <a class="text-gray-900 text-base xl:text-xl no-underline hover:no-underline font-bold" href="#">
              <i class="fas fa-sun text-pink-600 pr-3"></i>
              Artist Dashboard
            </a>
          </div>
          <div class="w-1/2 pr-0">
            <div class="flex relative inline-block float-right">
              <div class="relative text-sm">
                <button id="userButton" @click="dropdownOpen = !dropdownOpen"
                  class="flex items-center focus:outline-none mr-3">
                  <span v-if="$store.state.artistModule.artistProfileData != null">
                    <img v-if="$store.state.artistModule.artistProfileData.profile == null"
                      class="w-8 h-8 rounded-full mr-4" src="images/profile/profile.jpg" alt="Avatar" />
                    <img v-if="$store.state.artistModule.artistProfileData.profile != null"
                      class="w-8 h-8 rounded-full mr-4" :src="$store.state.artistModule.artistProfileData.profile.photo"
                      alt="Avatar of User" />
                  </span>

                  <span class="hidden md:inline-block">Hi, {{ $store.state.user ? $store.state.user.name : "" }} </span>
                  <svg v-if="!dropdownOpen" class="pl-1 h-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
                  </svg>
                  <svg v-else class="pl-1 h-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z" />
                  </svg>
                </button>
                <div id="userMenu" :class="dropdownOpen ? 'visible' : 'invisible'"
                  class="bg-white rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30">
                  <ul class="list-reset">
                    <li>
                      <a href="#"
                        class="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline">My
                        account</a>
                    </li>
                    <li>
                      <a href="#"
                        class="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline">Notifications</a>
                    </li>
                    <li>
                      <hr class="border-t mx-2 border-gray-400" />
                    </li>
                    <li>
                      <a @click="logout" href="#"
                        class="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline">Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="block lg:hidden pr-4">
                <button id="nav-toggle" @click="openMenu = !openMenu"
                  class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none">
                  <svg v-if="!openMenu" class="h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                  </svg>
                  <svg v-else class="h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                      d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div :class="openMenu ? '' : 'hidden'"
            class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white z-20"
            id="nav-content">
            <ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0" @click="openMenu = !openMenu">
              <li class="mr-6 my-2 md:my-0">
                <!-- <router-link to="/artist-home"
              class="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-gray-900 border-b-2 border-white hover:border-pink-500">
              <span class="pb-1 md:pb-0 text-sm">Home</span>
            </router-link> -->
                <router-link to="/your-home"
                  class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-pink-500">
                  <i class="fas fa-tasks fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Home</span>
                </router-link>
              </li>
              <li class="mr-6 my-2 md:my-0">
                <router-link to="/create-your-profile"
                  class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-pink-500">
                  <i class="fas fa-tasks fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Create your Profile</span>
                </router-link>
              </li>
              <li class="mr-6 my-2 md:my-0">
                <router-link to="/submit-your-assets"
                  class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-pink-500">
                  <i class="fas fa-tasks fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Submit Assets</span>
                </router-link>
              </li>
              <li class="mr-6 my-2 md:my-0">
                <router-link to="/view-your-assets"
                  class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-pink-500">
                  <i class="fas fa-tasks fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Show Assets</span>
                </router-link>
              </li>
              <li class="mr-6 my-2 md:my-0">
                <router-link to="/your-messages"
                  class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-pink-500">
                  <i class="fa fa-envelope fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Messages</span>
                </router-link>
              </li>
              <!-- <li class="mr-6 my-2 md:my-0">
            <a
              href="#"
              class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-green-500"
            >
              <i class="fas fa-chart-area fa-fw mr-3"></i
              ><span class="pb-1 md:pb-0 text-sm">Analytics</span>
            </a>
          </li>
          <li class="mr-6 my-2 md:my-0">
            <a
              href="#"
              class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-red-500"
            >
              <i class="fa fa-wallet fa-fw mr-3"></i
              ><span class="pb-1 md:pb-0 text-sm">Payments</span>
            </a>
          </li> -->
            </ul>
            <!-- <div class="relative pull-right pl-4 pr-4 md:pr-0">
            <input type="search" placeholder="Search"
              class="w-full bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-gray-700 rounded py-1 px-2 pl-10 appearance-none leading-normal" />
            <div class="absolute search-icon" style="top: 0.375rem; left: 1.75rem">
              <svg class="fill-current pointer-events-none text-gray-800 w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path
                  d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                </path>
              </svg>
            </div>
          </div> -->
          </div>
        </div>
      </nav>
    </div>

    <main class="p-4 flex-grow bg-gray-200">
      <div class="container w-full mx-auto pt-16">
        <div class="w-full md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal relative">
          <router-view />
        </div>
      </div>
    </main>
    <footer class="bg-white border-t border-gray-400 shadow fixed bottom-0 left-0 w-screen h-10">
      <div class="text-center pt-2">
        © {{ new Date().getFullYear() }}
        <a href="javascript:void(0);">
          GOOD GIVING NETWORK
        </a>
      </div>
    </footer>
  </div>

  <!--Container-->
  <!-- <div class="container w-full mx-auto pt-20">
    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal relative">
      <router-view />
    </div>
  </div> -->
  <!--/container-->
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
const openMenu = ref(false);
const dropdownOpen = ref(false);
const logout = async () => {
  try {
    await store.dispatch('logout')
    router.push({ name: 'welcome' })
  }
  catch (e) {
    console.log(e.data)
  };

}
</script>

<style scoped>
.activeLink {
  border-bottom: 2px solid red;
}
</style>

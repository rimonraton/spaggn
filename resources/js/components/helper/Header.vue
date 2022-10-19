<template>
  <header class="fixed w-full shadow-lg z-10">
    <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a @click="goToHome" href="#" class="flex items-center">
          <img src="/images/logo.svg" class="h-6 mr-1 sm:h-9" alt="Landwind Logo" />
          <span class="self-center text-l font-semibold whitespace-nowrap dark:text-white">Good Giving Network</span>
        </a>
        <div class="flex items-center gap-1 lg:order-2">
          <!-- <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a> -->
          <router-link :to="{ name: 'login' }"
            class="border border-purple-700 hover:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
            Login
          </router-link>
          <router-link :to="{ name: 'register' }"
            class="hidden lg:block border border-red-500 hover:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
            Register
          </router-link>

          <button @click="openMenu = !openMenu" data-collapse-toggle="mobile-menu-2" type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg v-if="!openMenu" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
            <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <!-- mobile -->
        <div :class="openMenu ? '' : 'hidden'" class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0" @click="openMenu = !openMenu">
            <!-- <li>
              <router-link :to="{ name: 'welcome' }" class="block py-2 pl-3 pr-4 text-gray-700 lg:bg-transparent lg:p-0"
                aria-current="page">Home</router-link>
            </li> -->
            <li>
              <a href="https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq"
                class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                target="_blank">
                NFTs, explained
              </a>
            </li>
            <li>
              <router-link :to="{ name: 'Funding' }"
                class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                Funding, addressed
              </router-link>
            </li>
            <li>
              <div
                class=" relative block py-2 pl-3 pr-4 text-gray-700 border-b cursor-pointer border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                <div class="flex items-center" @click="submenu = !submenu">
                  <span>Charities</span>
                  <svg v-if="submenu" class="pl-1 h-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z" />
                  </svg>
                  <svg v-else class="pl-1 h-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
                  </svg>

                </div>
                <div class="bg-white rounded shadow-md mt-2 absolute mt-12 top-0 left-0 min-w-full md:w-40 overflow-auto z-30"
                  :class="submenu ? 'block' : 'hidden'">
                  <ul class="list-reset">
                    <li>
                      <router-link :to="{ name: 'ExploreCharities' }" @click="submenu = !submenu"
                      class="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline">
                        Charities
                      </router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'ListCharities' }" @click="submenu = !submenu"
                        class="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline">
                        List of Charities</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <router-link :to="{ name: 'ExploreArtists' }"
                class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                Artists & Collabs
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Projects' }"
                class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                Projects
              </router-link>
            </li>
            <!-- <li>
              <a href="https://opensea.io/assets/bscc-nft-project?embed=true&ref=0x495f947276749ce646f68ac8c248420045cb7b5e"
                class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                target="_blank">
                Explore
              </a>
            </li> -->
            <li>
              <router-link :to="{ name: 'Blog' }"
                class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                Blog
              </router-link>
            </li>
            <li class="block lg:hidden">
              <router-link :to="{ name: 'login' }"
                class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                Login
              </router-link>
            </li>
            <li class="block lg:hidden">
              <router-link :to="{ name: 'register' }"
                class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                Register
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router'

// const swiper = new Swiper()
const router = useRouter()
const store = useStore();
const auth = ref(true);
const submenu = ref(false);
const openMenu = ref(false);
const user = computed(() => store.getters.user);
const goToHome = () => {
  router.push({ name: 'welcome' })
}
</script>
<style scoped>
.activeLink {
  border-bottom: 2px solid red;
  color: rgb(126 34 206)
}
</style>
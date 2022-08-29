<template>
    <div class="fixed w-full flex items-center shadow justify-between h-14 text-white z-50 bg-white">
        <div
            class="flex items-center justify-start md:justify-center pl-3 w-full lg:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
            <button id="toggleSidebarMobile" @click="$emit('openMenu')"
                class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100  rounded">
                <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" :class="menuStatus ? 'hidden' : ''"
                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" fill="white"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
                <svg id="toggleSidebarMobileClose" class="w-6 h-6" :class="menuStatus ? '' : 'hidden'" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" fill="red"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
            <img class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src="/images/logo.svg" />
            <span class="block">Charity Dashboard</span>
        </div>
        <div class="flex justify-between items-center h-14 px-4 bg-blue-800 dark:bg-gray-800 header-right">
            <!-- <div class="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
                <button class="outline-none focus:outline-none">
                    <svg class="w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
                <input type="search" name="" id="" placeholder="Search"
                    class="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
            </div> -->
            <ul class="flex items-center">
                <li>
                    <div class="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
                </li>
                <li>
                    <a @click="handleLogOut" href="#" class="flex items-center mr-4 hover:text-blue-100">
                        <span class="inline-flex mr-1">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                                </path>
                            </svg>
                        </span>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['logout'])
defineProps({
    menuStatus: {
        type: Boolean,
        default: false
    }
})
const handleLogOut = () => {
    emit('logout')
}
</script>

<style>
</style>
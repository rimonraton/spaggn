<template>
    <div
        class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">

        <!-- Header -->
        <Header @logout="logout" @openMenu="isOpen = !isOpen" :menu-status="isOpen"></Header>
        <!-- ./Header -->

        <!-- Sidebar -->
        <Sidebar @logout="logout" :menu-status="isOpen" @closeMenu="isOpen = false"></Sidebar>
        <!-- ./Sidebar -->

        <div class="h-full ml-0 mt-14 mb-10 md:ml-64">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import Header from '../Pages/Charity/helper/Header.vue';
import Sidebar from '../Pages/Charity/helper/Sidebar.vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import {ref} from 'vue'
const isOpen = ref(false)
const router = useRouter()
const store = useStore()
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

<style>
</style>

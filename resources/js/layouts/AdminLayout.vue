<template>
    <!-- navbar -->
    <Header @openMenu="openingMenu" :menu-status="isOpen"></Header>
    <!-- end navbar -->
     <!-- sidebar -->
     <Sidebar :menu-status="isOpen" @openMenu="openingMenu"></Sidebar>
      <!-- end sidebar -->
    <div class="flex overflow-hidden bg-white pt-16 h-[calc(100vh-45px)]">
      <div class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
        <router-view></router-view>
      </div>
    </div>
    <p class="text-center text-sm text-gray-500 my-2">
      © {{ new Date().getFullYear() }} Good Giving Network. All Rights Reserved.
    </p>
</template>

<script setup>
import Header from '../Views/Admin/helper/Header.vue';
import Sidebar from '../Views/Admin/helper/Sidebar.vue'
import { ref } from 'vue'
const isOpen = ref(false)
const openingMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style>

</style>
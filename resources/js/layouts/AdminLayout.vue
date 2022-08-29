<template>
  <div>
   <!-- navbar -->
   <Header @openMenu="openingMenu" :menu-status="isOpen"></Header>
   <!-- end navbar -->
    <div class="flex overflow-hidden bg-white pt-16">
      <!-- sidebar -->
      <Sidebar :menu-status="isOpen"></Sidebar>
      <!-- end sidebar -->
      <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
      <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '../Views/Admin/helper/Header.vue';
import Sidebar from '../Views/Admin/helper/Sidebar.vue'
import {ref} from 'vue'
const isOpen = ref(false)
const openingMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style>
</style>
<template>
    <aside
        class="fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 invisible md:visible"
        aria-label="Sidebar">
        <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div class="flex-1 px-3 bg-white divide-y space-y-1">
                    <Menus></Menus>
                </div>
            </div>
        </div>
    </aside>
    <!-- Mobile -->
    <aside
        class="fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 visible lg:invisible"
        aria-label="Sidebar">
        <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0"
            :class="menuStatus ? 'visible' : 'invisible'">
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div class="flex-1 px-3 bg-white divide-y space-y-1" @click="$emit('openMenu')">
                   <Menus></Menus>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { defineEmits } from 'vue'
import Menus from '../../../components/admin/menus.vue'
defineProps({
    menuStatus: { type: Boolean, default: false },
})
const emit = defineEmits(['logout'])

const handleLogOut = () => {
    emit('logout')
}
</script>

<style scoped>
/* .activeLink {
    --tw-bg-opacity: 1;
    background-color: rgb(243 244 246 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(17 24 39 / var(--tw-text-opacity));
} */
</style>
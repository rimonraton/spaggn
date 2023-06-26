<template>
    <div class="max-w-screen-lg mx-auto text-gray-900">
        hello
        <button @click="logout">Log out</button>
        <!-- <div class="flex justify-center">
        <div class="flex-1">
            <div class="border w-auto">
                <div  class="border p-4 font-semibold ">Dashboard</div>

                <div class="p-4 bg-white">
                    You are Home ! hellow world
                </div>
            </div>
            <div class="border w-auto">
            </div>
        </div>
    </div> -->
    </div>
</template>



<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
const errors = ref(null)
const logout = async () => {
    errors.value = null
    try {
        await store.dispatch('logout')
        router.push({ name: 'welcome' })
    }
    catch (e) {
        errors.value = e.data
    };

}
</script>
<template>
    <div class="max-w-screen-md mx-auto py-1 lg:py-4 text-gray-900">
        <div class="flex justify-center items-center">
            <!-- <div class="flex-1"> -->
            <form @submit.prevent="login">
                <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                    <div>
                        <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Login</h1>
                        <p
                            class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                            Login to Good Given Network
                        </p>
                    </div>
                    <div class="space-y-4">
                        <input type="email" v-model="user.email" placeholder="Email Addres"
                            class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                        <input type="password" v-model="user.password" placeholder="Password"
                            class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    </div>
                    <div class="text-center mt-6">
                        <button type="submit" class="py-3 w-64 text-xl text-black border border-blue-400 rounded-2xl">
                            <span v-if="!helper.busy">LogIn Now</span>
                            <span v-else>Loging...</span>
                        </button>
                        <p class="mt-4 text-sm">Don't Have Any Account? <span class="underline cursor-pointer"> Create
                                Account</span>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>


<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
const user = reactive({
    email: '',
    password: ''
})
const helper = reactive({
    errors: null,
    busy: false,
})

const login = async () => {
    helper.busy = true;
    helper.errors = null
    try {
        await store.dispatch('login', { 'email': user.email, 'password': user.password })
        const role = store.getters.user.role.role_name
        console.log(role)
        router.push({ name: role })
    }
    catch (e) {
        helper.errors = e.data
    };
    helper.busy = false;

}
</script>

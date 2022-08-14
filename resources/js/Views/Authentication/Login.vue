<template>
    <!-- component -->
    <div class="flex justify-center bg-gray-100 h-screen items-center">
        <div class="container mt-10 my-auto max-w-md border-2 border-gray-200 p-3 bg-white rounded-lg">
            <!-- header -->
            <div class="text-center my-6">
                <router-link to="/" class="mb-4 flex justify-center">
                    <img src="/images/logo.svg" class="w-12 h-auto rounded-full"
                        alt="">
                </router-link>
                <h1 class="text-3xl font-semibold text-gray-700">Sign in</h1>
                <p class="text-gray-500">Sign in to Good Giving Network account</p>
            </div>
            <!-- sign-in -->
            <div class="m-6">
                <form class="mb-4" @submit.prevent="login">
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email
                            Address</label>
                        <input type="email" v-model="user.email" name="email" id="email"
                            placeholder="Your email address"
                            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div class="mb-6">
                        <div class="flex justify-between mb-2">
                            <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Password</label>
                            <a href="#!"
                                class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot
                                password?</a>
                        </div>
                        <input type="password" v-model="user.password" name="password" id="password"
                            placeholder="Your password"
                            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div class="mb-6">
                        <button type="submit"
                            class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out">
                            <span v-if="!helper.busy">LogIn Now</span>
                            <span v-else>Loging...</span>
                        </button>
                    </div>
                    <p class="text-sm text-center text-gray-400">
                        Don&#x27;t have an account yet?
                        <router-link to="/register"
                            class="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline">
                            Sign
                            up</router-link>.
                    </p>
                </form>
                <!-- seperator -->
                <div class="flex flex-row justify-center mb-8">
                    <span class="absolute bg-white px-4 text-gray-500">or sign-in with</span>
                    <div class="w-full bg-gray-200 mt-3 h-px"></div>
                </div>
                <!-- alternate sign-in -->
                <div class="flex flex-row gap-2">
                    <button
                        class="bg-green-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out">
                        <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                            <path fill="red"
                                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                        </svg>
                        Google
                    </button>
                    <button
                        class="bg-indigo-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-800 duration-100 ease-in-out">
                        <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="white"
                                d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                        </svg>
                        Facebook
                    </button>
                    <button
                        class="bg-blue-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-800 duration-100 ease-in-out">
                        <svg class="w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="white"
                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                        Twitter
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="max-w-screen-md mx-auto py-1 lg:py-4 text-gray-900">
        <div class="flex justify-center items-center">
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
    </div> -->
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

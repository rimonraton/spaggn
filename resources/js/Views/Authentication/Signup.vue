<template>
    <div class="flex items-center justify-center bg-gray-100 h-screen">
        <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
            <div class="text-center my-6">
                <router-link to="/" class="mb-4 flex justify-center">
                    <img src="/images/logo.svg" class="w-12 h-auto rounded-full" alt="">
                </router-link>
                <h1 class="text-3xl font-semibold text-gray-700">Join us</h1>
                <p class="text-gray-500">Create a Good Giving Network account</p>
            </div>
            <form @submit.prevent="signUp">
                <div class="mt-4">
                    <ul
                        class="items-center w-full text-sm font-medium bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <label
                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                                    <input v-model="user.userType" type="radio" value="Artist" name="list-radio"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"> As a Artist
                                </label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <label
                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                                    <input v-model="user.userType" type="radio" value="Charity" name="list-radio"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"> As a Charity
                                </label>
                            </div>
                        </li>

                    </ul>
                    <div>
                        <label class="block" for="Name">Name</label>
                        <input v-model="user.name" type="text" placeholder="Name"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        <span class="text-xs text-red-400">{{ errorMessage }}</span>
                    </div>
                    <div class="mt-4">
                        <label class="block" for="email">Email</label>
                        <input v-model="user.email" type="email" placeholder="Email"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div class="mt-4">
                        <label class="block">Password</label>
                        <input v-model="user.password" type="password" placeholder="Password"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div class="mt-4">
                        <label class="block">Confirm Password</label>
                        <input v-model="user.password_confirmation" type="password" placeholder="Password"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <!-- <span class="text-xs text-red-400">Password must be same!</span> -->
                    <div class="flex">
                        <button type="submit"
                            class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                            Create Account
                        </button>
                    </div>
                    <div class="mt-6 text-grey-dark text-center">
                        Already have an account?
                        <router-link class="text-blue-600 hover:underline" :to="{ name: 'login' }"> Log in
                        </router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate';
import { reactive } from 'vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
const store = useStore()
const router = useRouter()
const user = reactive({
    userType: '',
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
})
// const validations = {
//     user
// }
// function isRequired(value) {
//   if (value && value.trim()) {
//     return true;
//   }
//   return 'This is required';
// }
// const { errorMessage, value } = useField(user.name, isRequired);
const signUp = async () => {
    await store.dispatch('register', user)
    const role = store.getters.user.role.name
    router.push({ name: role })
}

</script>

<style>
</style>

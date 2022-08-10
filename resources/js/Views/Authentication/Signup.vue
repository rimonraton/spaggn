<template>
    <div class="flex items-center justify-center bg-gray-100">
        <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/2 lg:w-1/2 sm:w-1/3">
            <h3 class="text-2xl font-bold text-center">Join us</h3>
            <form action="">
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
                        <input v-model="user.confirm" type="password" placeholder="Password"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <span class="text-xs text-red-400">Password must be same!</span>
                    <div class="flex">
                        <button class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                            Create Account
                        </button>
                    </div>
                    <div class="mt-6 text-grey-dark">
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
import { useField } from 'vee-validate';
import { reactive } from 'vue'
const user = reactive({
    userType: '',
    name: '',
    email: '',
    password: '',
    confirm: ''
})

</script>

<style>
</style>

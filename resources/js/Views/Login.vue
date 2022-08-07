<template>
    <div class="max-w-screen-md mx-auto my-1 lg:my-4 text-gray-900">
        <div class="flex justify-center items-center">
            <!-- <div class="flex-1"> -->
            <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                    <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Create An Account</h1>
                    <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                        Create
                        an
                        account to enjoy all the services without any ads for free!</p>
                </div>
                <div class="space-y-4">
                    <input type="text" placeholder="Email Addres"
                        class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    <input type="text" placeholder="Password"
                        class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                </div>
                <div class="text-center mt-6">
                    <button class="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">Create Account</button>
                    <p class="mt-4 text-sm">Already Have An Account? <span class="underline cursor-pointer"> Sign
                            In</span>
                    </p>
                </div>
                <!-- </div> -->
                <!-- <div class="border w-auto">
                    <div class="border p-4  font-semibold">Log Ins</div>

                    <div class="p-4 bg-white">


                        <Errors type="danger" v-if="errors" :content="errors" @close="errors = null" />

                        <form class="md:w-10/12 md:p-4 w-full mx-auto" @submit.prevent="login">
                            <div class=" w-full my-1 py-2 sm:flex  sm:items-center sm:justify-between">
                                <label for="Email" class="w-4/12 "> Email </label>
                                <input type="email" v-model="email" name="email"
                                    class="border border-gray-300 bg-white sm:w-8/12 w-full p-2 mt-3 sm:mt-0 focus:outline-none rounded-sm">

                            </div>
                            <div class=" w-full my-1 py-2 sm:flex  sm:items-center sm:justify-between">
                                <label for="Password" class="w-4/12 "> Password </label>
                                <input type="password" v-model="password" name="password"
                                    class="border border-gray-300 bg-white sm:w-8/12 w-full p-2 mt-3 sm:mt-0 focus:outline-none rounded-sm ">
                            </div>
                            <div class=" w-full my-1 py-2 sm:flex  sm:items-center  sm:justify-end">

                                <div class="sm:w-8/12 w-full mt-3 sm:mt-0">
                                    <input type="checkbox" name="Remeber Me" class="mr-2" id="">
                                    <label for="Remember me">Remeber Me ?</label>

                                </div>
                            </div>
                            <div class=" w-full my-1 py-2 sm:flex  sm:items-center  sm:justify-end">
                                <div class="sm:w-8/12 w-full  flex justify-between items-center mt-3 sm:mt-0">
                                    <div v-if="busy"
                                        class="flex justify-center items-center p-2 px-6 rounded-sm text-white bg-blue-500 hover:bg-blue-600">
                                        <circle-svg class="w-6 h-6" />
                                    </div>
                                    <button v-else type="submit"
                                        class="p-3 rounded-sm text-white bg-blue-500 hover:bg-blue-600">Log In</button>
                                    <router-link :to="{ name: 'register' }"
                                        class="text-sm text-blue-500 hover:underline"> New member ? Sing Up !
                                    </router-link>
                                </div>
                            </div>
                            <div class="w-full my-1 sm:flex sm:justify-end">
                                <router-link :to="{ name: 'forgot-password' }"
                                    class="text-sm text-gray-500 hover:text-gray-800 hover:underline "> Fogot your
                                    password ? </router-link>
                            </div>
                        </form>



                    </div>
                </div> -->
            </div>
        </div>
    </div>
    <!-- component -->
    <!-- <div class="bg-purple-400 flex justify-center items-center">
        <div
            class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
        </div>
        <div
            class="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
        </div>
        <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div>
                <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Create An Account</h1>
                <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create
                    an
                    account to enjoy all the services without any ads for free!</p>
            </div>
            <div class="space-y-4">
                <input type="text" placeholder="Email Addres"
                    class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                <input type="text" placeholder="Password"
                    class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
            </div>
            <div class="text-center mt-6">
                <button class="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">Create Account</button>
                <p class="mt-4 text-sm">Already Have An Account? <span class="underline cursor-pointer"> Sign In</span>
                </p>
            </div>
        </div>
        <div class="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
        <div
            class="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
        </div>
    </div> -->
</template>


<script>
import CircleSvg from '../components/CircleSvg.vue'
import { XIcon } from '@heroicons/vue/solid';
import Errors from '../components/Errors.vue';
export default {
    components: {
        XIcon,
        CircleSvg,
        Errors
    },
    data() {
        return {

            email: '',
            password: '',
            errors: null,
            busy: false,

        }
    },

    methods: {
        async login() {
            this.busy = true;
            this.errors = null
            try {
                await this.$store.dispatch('login', { 'email': this.email, 'password': this.password })
                this.$router.push({ name: 'home' })
            }
            catch (e) {
                this.errors = e.data
            };
            this.busy = false;

        }
    },

}
</script>

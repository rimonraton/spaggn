<template>
    <header class="fixed top-0 left-0 w-full shadow-lg">
        <div class="md:flex items-center justify-between bg-white pt-4 pb-3 px-7 md:px-10">
            <div>
                <a href="">
                    <img :src="require('../img/logo.svg').default" class="w-12 " alt="tailus logo">
                </a>
            </div>
            <button class="text-gray-500 w-10 h-10 absolute right-8 top-4 cursor-pointer md:hidden " @click="open = !open">
                <div class="block w-5 bg-blue-200 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span aria-hidden="true" class="block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
                    <span aria-hidden="true" class="block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out" :class="{'opacity-0': open } "></span>
                    <span aria-hidden="true" class="block absolute  h-0.5 w-6 bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
                </div>
            </button>
            <ul 
                :class="{'top-20 opacity-100': open, '-top-96': !open}"
                class="md:flex md:items-center pb-12 md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all opacity-0 md:opacity-100 duration-500 ease-in"
            >
                <li class="md:ml-8 text-xl my-7 md:my-0">
                    <a class="text-gray-800 hover:text-gray-400 duration-500" href="">Home</a>
                </li>
                <li class="md:ml-8 text-xl my-7 md:my-0">
                    <a class="text-gray-800 hover:text-gray-400 duration-500" href="">Home</a>
                </li>
                <li class="md:ml-8 text-xl my-7 md:my-0">
                    <a class="text-gray-800 hover:text-gray-400 duration-500" href="">Home</a>
                </li>
                <li class="md:ml-8 text-xl my-7 md:my-0">
                    <a class="text-gray-800 hover:text-gray-400 duration-500" href="">Home</a>
                </li>
            </ul>
            
        </div>
        <!-- <nav class="container m-auto py-2 lg:px-20 lg:py-4">
            <div class="relative flex flex-wrap items-center justify-between">
                <div class="relative z-10 w-full px-5 flex items-center justify-between lg:w-auto">
                    <a href="">
                        <img :src="require('../img/logo.svg').default" class="w-12 " alt="tailus logo">
                    </a>
                    <button class="text-gray-500 w-10 h-10 relative focus:outline-none bg-white lg:hidden" @click="open = !open">
                        <div class="block w-5 bg-blue-200 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span aria-hidden="true" class="block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
                            <span aria-hidden="true" class="block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out" :class="{'opacity-0': open } "></span>
                            <span aria-hidden="true" class="block absolute  h-0.5 w-6 bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
                        </div>
                    </button>
                </div>

                <div id="navlinks" 
                class="w-full h-screen px-6 bg-white transition lg:block lg:w-auto lg:px-0 lg:bg-transparent"
                :class="{ 'hidden': !open }">
                    <div class=" shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200">
                        <div class="cursor-pointer group">
                          <a class="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Python</a>
                        </div>
                        <div class="cursor-pointer group border-t">
                          <a class="block p-2 border-transparent border-l-4 group-hover:border-blue-600 border-blue-600 group-hover:bg-gray-100">Javascript</a>
                        </div>
                        <div class="cursor-pointer group border-t">
                          <a class="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Node</a>
                        </div>
                        <div class="cursor-pointer group border-t">
                          <a class="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">PHP</a>
                        </div>
                    </div>
                    <ul class="mt-3 border rounded-md text-gray-600 text-lg tracking-wide lg:flex lg:space-x-8 lg:py-0">
                        <li class="px-2 hover:bg-gray-200 ">
                            <a href="" class="block w-full py-3 transition hover:text-cyan-600">Portfolio</a>
                        </li>
                        <li class="px-2 hover:bg-gray-200 ">
                            <a href="" class="block w-full py-3 transition hover:text-cyan-600">Services</a>
                        </li>
                        <li class="px-2 hover:bg-gray-200 ">
                            <a href="" class="block w-full py-3 transition hover:text-cyan-600">About</a>
                        </li>
                        <li class="px-2 hover:bg-gray-200 ">
                            <a href="" class="block w-full py-3 transition hover:text-cyan-600">Blog</a>
                        </li>
                        <li class="px-2 hover:bg-gray-200 ">
                            <a href="" class="block w-full py-3 px-6 rounded-xl bg-cyan-500 transition hover:bg-cyan-600 focus:bg-cyan-700 active:bg-cyan-800">
                                <span class="block text-center text-white font-semibold lg:text-base">Contact us</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> -->
    </header>
    <div class="w-full h-16 lg:h-20"></div>
<!--     <div class="shadow-md bg-white ">
        <div class="max-w-screen-lg mx-auto flex justify-between">
            <div class=" p-4 ">
                <router-link class="font-semibold tracking-wider	text-lg " :to="{name : 'welcome'}">
                        Laravel Vue
                </router-link> 
                <router-link active-class="font-semibold text-gray-900" v-if="user" class="px-6 text-gray-500 hover:text-gray-900 " :to="{ name: 'home' }">
                    Home
                </router-link>
            </div>

            <div v-if="user" class="relative "  ref="dropMenu">
                <div @click="drop=!drop"  class=" flex items-center cursor-pointer p-4  font-semibold tracking-wider text-lg"> 
                    {{user.name}} 
                <ChevronDownIcon class="h-5 w-5 text-gray-700 ml-2 mt-1"></ChevronDownIcon>

                </div>

                <div v-if="drop" @click="drop=!drop" class="absolute bg-white border z-10 shadow-md flex w-auto flex-col ">
                    <router-link class="p-4 flex items-center" :to="{ name: 'settings' }">
                        <CogIcon class="h-6 w-6 text-gray-700 mr-2"></CogIcon>
                        Settings
                    </router-link>
                    
                    <div @click="logout" class="p-4 flex  items-center cursor-pointer">
                        <LogoutIcon class="h-6 w-6 text-gray-700 mr-2"></LogoutIcon>

                        Logout
                    </div>
                </div>
            </div>

            <div v-else class="flex">
                <router-link class="p-4 tracking-widest flex items-center  text-gray-600" 
                    active-class="font-semibold text-gray-800" 
                    :to="{ name: 'login' }">
                        Login
                </router-link>
                <router-link class="p-4 tracking-widest flex items-center  text-gray-600" 
                    active-class="font-semibold text-gray-800" 
                    :to="{ name: 'register' }">
                        Register
                </router-link>

                    
            </div>
        </div>
    </div> -->
</template>
<script>
import { CogIcon , LogoutIcon , ChevronDownIcon } from '@heroicons/vue/outline';
// import menu from '../helper/menu'
// 

export default {
    created: function() {
        if(this.$store.getters.user) {
            let self = this ;   
            window.addEventListener('click', function(e){
                if ( self.$refs.dropMenu && !self.$refs.dropMenu.contains(e.target) ){
                    self.drop = false
                } 
            })
        }
    },

    components: { CogIcon , LogoutIcon , ChevronDownIcon } ,
    data() {
        return {
            drop: false,
            open: false,
        }
    },
    computed : {
        user() {
            return this.$store.getters.user ;
        }
    },
    methods : {
        async logout() {
            await this.$store.dispatch('logout');
            this.$router.push({name : 'login'});
        },
    }
}
</script>
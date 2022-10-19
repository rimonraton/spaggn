<template>
    <div v-if="profile != null">
        <div class="p-10" v-if="profile.charityprofile == null">
            <div class="p-8 bg-white shadow">
                <div class="text-center">
                    <h1 class="text-4xl font-medium text-gray-700">{{profile.name}}</h1>
                    <p class="mt-4 text-xl text-gray-500">Congratulations! You are now part of Good Giving Network.
                        Thank you for supporting us.</p>
                    <router-link to="/create-your-organization-profile" class="text-blue-500 hover:underline">Create
                        Your Profile</router-link>
                </div>
            </div>
        </div>
        <div v-else>
            <!-- {{profile.charityprofile}} -->
            <div class="p-8 bg-white shadow mt-10">
                <div class="flex items-center justify-center gap-6 w-full">
                    <div class="w-48 h-48">
                        <img :src="profile.charityprofile.logo" class="max-w-full h-auto rounded-full" alt="">
                    </div>
                    <!-- <div class="mt-0 md:mt-8 text-center border-b pb-12">
                        <h1 class="text-xl md:text-4xl font-medium text-gray-700">
                            {{profile.charityprofile.organization_name}}
                        </h1>
                        <p class="font-light text-gray-600 mt-3">{{profile.charityprofile.address}}</p>
                        <p class="mt-8 text-gray-500">Solution Manager - Creative Tim Officer</p>
                        <p class="mt-2 text-gray-500">University of Computer Science</p>
                    </div> -->
                    <!-- <div class="w-48 h-48">
                        <img :src="profile.charityprofile.cover_photo" class="max-w-full h-auto rounded-full" alt="">
                    </div> -->
                    <!-- <div
                        class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl  inset-x-0 -mt-24 flex items-center justify-center text-indigo-500">
                        <img :src="profile.charityprofile.logo" class="w-full rounded-full">
                    </div>
                    <div class="w-48 h-48">
                        <img src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
                            class="max-w-full h-auto rounded-full" alt="">
                    </div> -->
                </div>
                <div class="mt-0 md:mt-8 flex flex-col justify-center items-center border-b pb-12">
                    <h1 class="text-xl md:text-4xl font-medium text-gray-700">
                        {{profile.charityprofile.organization_name}}
                    </h1>
                    <p class="w-52 mt-3 rounded-lg border-2 border-black bg-yellow-500 shadow text-center">
                        <label class="px-2 font-mono text-2xl font-medium"><span class="text-white">EIN#</span>
                            {{profile.charityprofile.ein}}</label>
                    </p>
                    <p class="font-light text-gray-600 mt-3">{{profile.charityprofile.address}}</p>
                    <p class="font-light text-gray-600 mt-3">{{profile.charityprofile.website_address}}</p>
                </div>
                <!-- component -->
                <div class="relative mt-10 bg-gradient-to-t from-[#fffbf5] to-[#fffef4] pt-10 sm:pt-0 mb-10">

                    <div
                        class="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 bg-gradient-to-t from-[#fffbf5] to-[#fffef4]">
                        <div class="content pl-4">
                            <div class="flex items-center gap-3">
                                <hr class="w-10 bg-orange-500 border " />
                                <span class="md:text-[18px] font-medium text-gray-800 ">
                                    Mission
                                </span>
                            </div>
                            <p class="text-l font-bold leading-tight mt-5 sm:mt-0 ">
                                {{profile.charityprofile.mission}}
                            </p>
                            <!-- <p class="mt-5 md:text-md ">
                                I'm creative designer based in Bangladesh, and I'm very passionate and
                                dedicated to my <br class="hidden md:block" /> work.Your Satisfaction is my success
                            </p> -->
                        </div>
                        <div class="relative sm:mt-0 mt-10 px-6 sm:px-0">
                            <img class="w-[600px] animate__animated animate__fadeInRight animate__delay-.5s"
                                :src="profile.charityprofile.cover_photo" alt="" />
                        </div>
                    </div>
                </div>
                <div class="p-4 text-gray-600">
                    <h1 class="mb-8 text-center text-3xl font-bold text-indigo-900">Causes you support :</h1>
                    <div class="px-3 md:lg:xl:px-40   border-t border-b py-20 bg-opacity-10"
                        style="background-image: url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png') ;">
                        <div
                            class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
                            <div v-for="cause in JSON.parse(profile.charityprofile.causes)" :key="cause.id"
                                class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                                <p class="text-xl font-medium text-slate-700 mt-3">{{cause.name}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-4 text-gray-600 border-b">
                    <h1 class="mb-8 text-center text-3xl font-bold text-indigo-900"> List of programs/services</h1>
                    <ul class="flex flex-wrap md:flex-nowrap justify-center items-center gap-8">
                        <li class="flex" v-for="service, i in JSON.parse(profile.charityprofile.services)"
                            :key="service + i">
                            <div class="px-4 text-xl text-indigo-700">{{i + 1}}.</div>
                            <div class="text-xl font-bold text-indigo-800">{{service.name}}</div>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center justify-center p-10 bg-white">
                    <div class="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
                        <div class="row-span-2 flex flex-col rounded-md border border-slate-200">
                            <div class="p-10">
                                <h3 class="text-xl font-medium text-gray-700"> Target demographics</h3>
                                <p class="mt-2 text-slate-500">
                                    {{profile.charityprofile.target_demographics}}
                                </p>
                            </div>
                            <div class="p-10">
                                <h3 class="text-xl font-medium text-gray-700">  Geographic area served</h3>
                                <p class="mt-2 text-slate-500">
                                    {{profile.charityprofile.geographic}}
                                </p>
                            </div>
                        </div>
                        <div class="flex rounded-md border border-slate-200">
                            <div class="flex-1 p-10">
                                <h3 class="text-xl font-medium text-gray-700"> Your organization’s link for Charity Navigator site </h3>
                                <p class="mt-2 text-slate-500">
                                   {{profile.charityprofile.navigator_site}}
                                </p>
                            </div>
                        </div>
                        <div class="flex rounded-md border border-slate-200">
                            <div class="flex-1 p-10">
                                <h3 class="text-xl font-medium text-gray-700"> Your organization’s link for GuideStar</h3>
                                <p class="mt-2 text-slate-500">
                                    {{profile.charityprofile.guide_star}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="mt-12 flex flex-col justify-center">
                    <p class="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the
                        name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of
                        his
                        own music, giving it a warm, intimate feel with a solid groove structure. An artist of
                        considerable
                        range.</p> <button class="text-indigo-500 py-2 px-4  font-medium mt-4"> Show more</button>
                </div> -->
            </div>
        </div>
    </div>
    <div v-else>
        Loading...
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const profile = ref(null)
const getCharityProfile = async () => {
    const res = await store.dispatch('charityModule/getCharityProfile')
    profile.value = res
}
onMounted(() => {
    getCharityProfile()
})
</script>

<style>

</style>
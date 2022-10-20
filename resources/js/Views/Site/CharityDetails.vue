<template>
    <div v-if="profile != null">
        <div class="p-10" v-if="profile.charityprofile == null">
            <div class="p-8 bg-white shadow">
                <div class="text-center">
                    <h1 class="text-4xl font-medium text-gray-700">No data found...</h1>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="container p-6 mx-auto mt-8 md:mt-0 md:space-x-10 flex flex-col md:flex-row justify-center items-center md:py-10">
                <div class="">
                    <img class="lg:h-80 md:h-64 h-40 rounded-lg"
                    :src="imageUrl(profile.charityprofile.logo)" alt="" />
                </div>
                <div class="mt-8 md:mt-0">
                    <h1 class="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">Hi, we are {{profile.charityprofile.organization_name}}</h1>
                    <p class="text-xl text-gray-800 text-center md:text-left">
                        {{profile.charityprofile.address}}, {{profile.charityprofile.website_address}}
                    </p>
                    <button
                        class="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400">
                        EIN# {{profile.charityprofile.ein}}
                    </button>
                </div>
            </div>
            <!-- {{profile.charityprofile}} -->
            <div class="p-8 bg-white shadow">
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
                            <p class="text-l leading-tight mt-5 sm:mt-0 ">
                                {{profile.charityprofile.mission}}
                            </p>
                            <!-- <p class="mt-5 md:text-md ">
                              I'm creative designer based in Bangladesh, and I'm very passionate and
                              dedicated to my <br class="hidden md:block" /> work.Your Satisfaction is my success
                          </p> -->
                        </div>
                        <div class="relative sm:mt-0 mt-10 px-6 sm:px-0">
                            <img class="w-[600px] animate__animated animate__fadeInRight animate__delay-.5s"
                                :src="imageUrl(profile.charityprofile.cover_photo)" alt="" />
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
                                <h3 class="text-xl font-medium text-gray-700"> Geographic area served</h3>
                                <p class="mt-2 text-slate-500">
                                    {{profile.charityprofile.geographic}}
                                </p>
                            </div>
                        </div>
                        <div class="flex rounded-md border border-slate-200">
                            <div class="flex-1 p-10">
                                <h3 class="text-xl font-medium text-gray-700"> Your organization’s link for Charity
                                    Navigator site </h3>
                                <p class="mt-2 text-slate-500">
                                    {{profile.charityprofile.navigator_site}}
                                </p>
                            </div>
                        </div>
                        <div class="flex rounded-md border border-slate-200">
                            <div class="flex-1 p-10">
                                <h3 class="text-xl font-medium text-gray-700"> Your organization’s link for GuideStar
                                </h3>
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
        <Loading />
    </div>

</template>

<script setup>
import Loading from '../../components/helper/loading.vue'
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
const profile = ref(null)
const imageUrl = (image) => {
    return process.env.MIX_API_URL + '/' + image;
}
const getCharityProfile = async () => {
    const res = await store.dispatch('charityModule/getCharityDetails', route.params.id)
    profile.value = res
}
onMounted(() => {
    getCharityProfile()
})
</script>

<style>

</style>
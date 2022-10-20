<template>
    <div class="white" v-if="artistValue.length > 0">
        <div class="container mx-auto lg:w-5/6 px-6 text-gray-600 md:px-12 xl:px-6">
            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl py-4">Artists & Collabs</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                <div class="relative mx-auto w-full" v-for="artist in artistValue" :key="artist">
                    <router-link :to="{  name: 'ArtistDetails', params: { id: artist.user.id } }"
                        class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                        <div class="shadow p-4 rounded-lg bg-white">
                            <div class="flex justify-center relative rounded-lg overflow-hidden h-52">
                                <div
                                    class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                                    <!-- <div class="absolute inset-0 bg-black opacity-10"> -->
                                    <img class="w-full h-64 rounded-md transition hover:bg-cyan-300" :src="artist.cover"
                                        alt="">
                                    <!-- </div> -->
                                </div>
                            </div>

                            <div class="mt-4">
                                <h2 class="font-medium text-base md:text-lg text-gray-800 line-clamp-1">
                                    {{artist.user.name}}
                                </h2>
                                <div class="mt-2 text-sm text-gray-800 line-clamp-1">
                                    <div class="flex items-center">
                                        <div class="relative">
                                            <!-- <div class="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"></div>
                        <span class="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span> -->
                                            <img :src="artist.photo"
                                                class="rounded-full border-solid border-white border-2 w-10">
                                        </div>

                                        <p class="ml-2 text-gray-800 line-clamp-1">
                                            {{artist.user.name}}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- <div class="flex justify-between mt-2">
                                <p class="inline-flex flex-col xl:items-center text-gray-800">
                                    <span class="mt-2 xl:mt-0">
                                        Reserve price
                                    </span>
                                    <span>0.99 ETH</span>
                                </p>
                                <p class="inline-flex flex-col xl:flex-row items-end text-gray-800">
                                    <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z">
                                        </path>
                                    </svg>
                                    <span class="mt-2 xl:mt-0">
                                        {{25 + i}}
                                    </span>
                                </p>
                            </div> -->
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="text-center py-4" v-if="artistValue.length < total">
                <button class="bg-blue-400 border-2 p-2 rounded-lg text-white hover:bg-blue-500"
                    @click="artistData(pageno + 1)">Load more</button>
            </div>
        </div>
    </div>
    <div v-else>
        <Loading />
    </div>

    <!-- </LandingLayout> -->
</template>

<script setup>
import Loading from '../../components/helper/loading.vue'
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const artistValue = ref([])
const pageno = ref(1)
const total = ref(0)
const artistData = async (page = 1) => {
    const res = await store.dispatch('artistModule/getArtists', page)
    // console.log('artist res', res)
    total.value = res.total
    if (res.data.length > 0) {
        res.data.forEach(function (item) {
            artistValue.value.push(item)
        });
    }

}
onMounted(() => {
    artistData()
})
</script>

<style>

</style>

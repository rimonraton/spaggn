<template>
    <main>
        <div class="pt-6 px-4">
            <div class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <router-link to="/view-artisets">
                    <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <span class="text-xl leading-none font-bold text-gray-900">Total:
                                    {{ allData?.totalArtist }}</span>
                                <h3 class="text-base font-normal text-gray-500">Approved: {{ allData?.approvedArtist }}
                                </h3>
                                <h3 class="text-base font-normal text-gray-500">Pendding: {{ allData?.notApprovedartist }}
                                </h3>
                            </div>
                            <div
                                class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                Artist
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/view-charities">
                    <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <span class="text-xl leading-none font-bold text-gray-900">Total:
                                    {{ allData?.totalcharity }}</span>
                                <h3 class="text-base font-normal text-gray-500">Approved: {{ allData?.approvedcharity }}
                                </h3>
                                <h3 class="text-base font-normal text-gray-500">Pendding: {{ allData?.notAppovedcharity }}
                                </h3>
                            </div>
                            <div
                                class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                Charities
                            </div>
                        </div>
                    </div>
                </router-link>
                <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <span class="text-xl leading-none font-bold text-gray-900">Total:
                                {{ allData?.totalAsset }}</span>
                            <!-- <h3 class="text-base font-normal text-gray-500">User signups this week</h3> -->
                        </div>
                        <div class="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                            Assets
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 2xl:grid-cols-1 xl:gap-4 my-4">
                <div class="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-xl font-bold leading-none text-gray-900">Latest Artist</h3>
                        <router-link to="/view-artisets"
                            class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                            View all
                        </router-link>
                    </div>
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200">
                            <li class="py-3 sm:py-4" v-for="artist in allData?.lastArtist" :key="artist.id">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <img class="h-8 w-8 rounded-full" :src="artist.profile.photo" alt="Neil image">
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate">
                                            {{ artist.name }}
                                        </p>
                                        <p class="text-sm text-gray-500 truncate">
                                            {{ artist.email }}
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                        <span class="bg-blue-500 text-white px-2 py-1 rounded-lg text-sm">
                                            Approved
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                    <h3 class="text-xl leading-none font-bold text-gray-900 mb-10">Acquisition Overview</h3>
                    <div class="block w-full overflow-x-auto">
                        <table class="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    <th
                                        class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                                        Top Channels</th>
                                    <th
                                        class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                                        Users</th>
                                    <th
                                        class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="text-gray-500">
                                    <th
                                        class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                        Organic Search</th>
                                    <td
                                        class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                        5,649</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                        <div class="flex items-center">
                                            <span class="mr-2 text-xs font-medium">30%</span>
                                            <div class="relative w-full">
                                                <div class="w-full bg-gray-200 rounded-sm h-2">
                                                    <div class="bg-cyan-600 h-2 rounded-sm" style="width: 30%"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th
                                        class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                        Referral</th>
                                    <td
                                        class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                        4,025</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                        <div class="flex items-center">
                                            <span class="mr-2 text-xs font-medium">24%</span>
                                            <div class="relative w-full">
                                                <div class="w-full bg-gray-200 rounded-sm h-2">
                                                    <div class="bg-orange-300 h-2 rounded-sm" style="width: 24%"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th
                                        class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                        Direct</th>
                                    <td
                                        class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                        3,105</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                        <div class="flex items-center">
                                            <span class="mr-2 text-xs font-medium">18%</span>
                                            <div class="relative w-full">
                                                <div class="w-full bg-gray-200 rounded-sm h-2">
                                                    <div class="bg-teal-400 h-2 rounded-sm" style="width: 18%"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th
                                        class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                        Social</th>
                                    <td
                                        class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                        1251</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                        <div class="flex items-center">
                                            <span class="mr-2 text-xs font-medium">12%</span>
                                            <div class="relative w-full">
                                                <div class="w-full bg-gray-200 rounded-sm h-2">
                                                    <div class="bg-pink-600 h-2 rounded-sm" style="width: 12%"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th
                                        class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                        Other</th>
                                    <td
                                        class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                        734</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                        <div class="flex items-center">
                                            <span class="mr-2 text-xs font-medium">9%</span>
                                            <div class="relative w-full">
                                                <div class="w-full bg-gray-200 rounded-sm h-2">
                                                    <div class="bg-indigo-600 h-2 rounded-sm" style="width: 9%"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th
                                        class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">
                                        Email</th>
                                    <td
                                        class="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">
                                        456</td>
                                    <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                                        <div class="flex items-center">
                                            <span class="mr-2 text-xs font-medium">7%</span>
                                            <div class="relative w-full">
                                                <div class="w-full bg-gray-200 rounded-sm h-2">
                                                    <div class="bg-purple-500 h-2 rounded-sm" style="width: 7%"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> -->
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
const allData = ref(null)
const store = useStore()
onMounted(async () => {
    const res = await store.dispatch('adminModule/getDataForDashboard')
    allData.value = res
})
</script>

<style>

</style>
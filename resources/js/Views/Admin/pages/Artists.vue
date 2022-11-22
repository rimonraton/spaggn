<template>
    <main class="grow">
        <div class="pt-6 px-4">
            <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <h3 class="text-xl leading-none font-bold text-gray-900 mb-10">All Artists</h3>
                <div class="block w-full overflow-x-auto">
                    <table class="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th
                                    class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                                    Name</th>
                                <th
                                    class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                                    Email</th>
                                <th
                                    class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            <tr class="text-gray-500" v-for="artist in artistData" :key="artist.id">
                                <th
                                    class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                    {{ artist.name }}
                                </th>
                                <td
                                    class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                    {{ artist.email }}</td>
                                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <template v-if="artist.profile != null">
                                        <router-link
                                            :to="{ name: 'ViewArtistProfile', params: { id: artist.id }, query: { view: 'artist' } }"
                                            class="cursor-pointer p-2 rounded-lg border hover:text-blue-500 hover:border-blue-500">
                                            View Profile</router-link>
                                    </template>
                                    <template v-else>
                                        <span
                                            class="cursor-pointer p-2 rounded-lg border text-red-500 border-red-500">
                                            Profile not yet submit</span>
                                    </template>


                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
const artistData = ref(null)
const store = useStore()
onMounted(async () => {
    const res = await store.dispatch('adminModule/getAllArtists')
    artistData.value = res.data
})
</script>

<style>

</style>
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
                                    class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                                    Status</th>
                                <th
                                    class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            <tr class="text-gray-500" v-for="(artist, index) in laravelData.data" :key="artist.id">
                                <th
                                    class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                    {{ artist.name }}
                                </th>
                                <td
                                    class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                    {{ artist.email }}</td>
                                <td class="border-t-0 px-4 align-middle text-xs font-medium whitespace-nowrap p-4">
                                    <span class="bg-red-500 px-1 py-1 rounded-lg text-white text-xs" v-if="(artist.profile.status == 0)">Pending</span>
                                    <span class="bg-slate-500 px-1 py-1 rounded-lg text-white text-xs" v-else>Approved</span>
                                </td>
                                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div v-if="artist.profile != null" class="flex gap-2">
                                        <div>
                                            <div @click="viewProfile(artist.id)"
                                                class="cursor-pointer p-2 rounded-lg border hover:text-blue-500 hover:border-blue-500">
                                                View Profile
                                            </div>
                                        </div>
                                        <div @click="approvedArtist(artist.profile.id, index)"
                                            class="cursor-pointer p-2 rounded-lg border hover:text-slate-500 hover:border-slate-500">
                                           {{artist.profile.status == 0 ? 'Approved':'Disapproved'}}
                                        </div>
                                    </div>
                                    <div v-else>
                                        <span class="cursor-pointer p-2 rounded-lg border text-red-500 border-red-500">
                                            Profile not yet submit</span>
                                    </div>


                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <TailwindPagination
                        :data="laravelData"
                        @pagination-change-page="getResults"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { TailwindPagination } from 'laravel-vue-pagination';

const router = useRouter()
const artistData = ref(null)
const store = useStore()
const viewProfile = (id) => {
    router.push({ name: 'ViewArtistProfile', params: { id: id }, query: { view: 'artist' } })
}
const approvedArtist = async (id, index) => {
    const res = await store.dispatch('adminModule/approvedArtist', {id: id})
    laravelData.value.data[index].profile.status = res;
    console.log(laravelData.value.data[index].profile, res)
}
const laravelData = ref({});

const getResults = async (page = 1) => {
    laravelData.value = await store.dispatch('adminModule/getAllArtists', page);
}

getResults();

</script>

<style>

</style>

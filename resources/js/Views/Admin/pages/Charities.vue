<template>
    <main class="grow">
        <div class="pt-6 px-4">
            <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <h3 class="text-xl leading-none font-bold text-gray-900 mb-10">All Charities</h3>
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
                            <tr class="text-gray-500" v-for="charity in charitiesData" :key="charity.id">
                                <th
                                    class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                    {{ charity.name }}
                                </th>
                                <td
                                    class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                    {{ charity.email }}</td>
                                <td
                                    class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                    <span class="bg-red-500 px-1 py-1 rounded-lg text-white text-xs"
                                        v-if="(charity.charityprofile.status == 0)">Pending</span>
                                    <span class="bg-slate-500 px-1 py-1 rounded-lg text-white text-xs"
                                        v-else>Approved</span>
                                </td>
                                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div v-if="charity.charityprofile != null" class="flex gap-2">
                                        <div>
                                            <div @click="viewProfile(charity.id)"
                                                class="cursor-pointer p-2 rounded-lg border hover:text-blue-500 hover:border-blue-500">
                                                View Profile
                                            </div>
                                        </div>
                                        <div @click="approvedCharity(charity.charityprofile.id)"
                                            class="cursor-pointer p-2 rounded-lg border hover:text-slate-500 hover:border-slate-500">
                                            {{ charity.charityprofile.status == 0 ? 'Approved' : 'Disapproved' }}
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
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
const router = useRouter()
const charitiesData = ref(null)
const store = useStore()
const viewProfile = (id) => {
    router.push({ name: 'ViewChatityProfile', params: { id: id }, query: { view: 'charity' } })
}
const approvedCharity = async (id) => {
    const res = await store.dispatch('adminModule/approvedCharity', { id: id })
    charitiesData.value = res.data
}
onMounted(async () => {
    const res = await store.dispatch('adminModule/getAllCharities')
    charitiesData.value = res.data
})
</script>

<style>

</style>
<template>
    <main class="grow">
        <div class="pt-6 px-4">
            <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div class="flex justify-between mb-10">
                    <h3 class="text-xl leading-none font-bold text-gray-900 ">
                        Blogs Lists
                    </h3>
                    <router-link :to="{ name: 'AdminBlogsCreate' }" class="bg-green-500 text-white px-5 py-2 rounded">
                        Create New
                    </router-link>
                </div>
                <div class="block w-full overflow-x-auto">
                    <table class="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th
                                    class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                                    Blog Cover
                                </th>
                                <th
                                    class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                                    Blog Title</th>
                                <th
                                    class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs
                                    font-semibold text-left uppercase border-l-0 border-r-0
                                    whitespace-nowrap min-w-140-px w-20">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            <tr class="text-gray-500" v-for="post in posts.data" :key="post.id">
                                <th
                                    class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                    <img :src="post.photo" alt="post cover" class="w-20">
                                </th>
                                <th
                                    class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                    {{ post.title }}
                                </th>

                                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div class="flex gap-2">
<!--                                            @click="viewPost(post.id)"-->
                                            <div
                                                class="disabled cursor-pointer p-2 rounded-lg border hover:text-blue-500 hover:border-blue-500">
                                                View
                                            </div>
<!--                                    @click="editPost(post.id)"-->
                                        <div
                                            class="disabled cursor-pointer p-2 rounded-lg border hover:text-slate-500 hover:border-slate-500">
                                           Edit
                                        </div>
                                    </div>
<!--                                    <div>-->
<!--                                        <span class="cursor-pointer p-2 rounded-lg border text-red-500 border-red-500">-->
<!--                                            Profile not yet submit</span>-->
<!--                                    </div>-->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br>
                    <TailwindPagination
                        :data="posts"
                        @pagination-change-page="getPosts"
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
const viewPost = (id) => {
    router.push({ name: 'ViewArtistProfile', params: { id: id }, query: { view: 'artist' } })
}
const editPost = (id) => {
    router.push({ name: 'AdminBlogsUpdate', params: { id: id }, query: { view: 'AdminBlogs' } })
}

const approvedArtist = async (id) => {
    const res = await store.dispatch('adminModule/approvedArtist', {id: id})
    artistData.value = res.data
}
const posts = ref({});

const getPosts = async (page = 1) => {
    posts.value = await store.dispatch('blogModule/getPosts', page);
}

getPosts();
</script>

<style>

</style>

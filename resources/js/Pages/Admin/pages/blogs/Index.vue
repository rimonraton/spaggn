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
                                <th class="px-4 py-3 bg-gray-50 text-gray-700 text-xs font-semibold text-center uppercase min-w-140-px w-20 ">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            <tr class="text-gray-500" v-for="(post, index) in posts.data" :key="post.id">
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
                                        <unicon
                                            class="cursor-pointer"
                                            @click="deletePost(post.id, index)"
                                            name="trash-alt" fill="deeppink" />

                                        <unicon
                                            class="cursor-pointer"
                                            @click="editPost(post.id)"
                                            name="edit" fill="gray" />

                                        <unicon
                                            class="cursor-pointer"
                                            @click="viewPost(post.id)"
                                            name="eye" fill="gray" />

                                    </div>
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
    router.push({ name: 'ShowPost', params: { id: id }, query: { view: 'AdminBlogs' } })
}
const editPost = (id) => {
    router.push({ name: 'AdminBlogsUpdate', params: { id: id }, query: { view: 'AdminBlogs' } })
}

const deletePost = async (id, index) => {
    if(confirm("Do you really want to delete?")) {
        const res = await store.dispatch('blogModule/deletePost', {id})
        if (res === 1) {
            posts.value.data.splice(index, 1)
            console.log('data deleted')
        }
        console.log(res)
    }
}


const posts = ref({});

const getPosts = async (page = 1) => {
    posts.value = await store.dispatch('blogModule/getPosts', page);
}

getPosts();
</script>

<style>

</style>

<template>
    <main class="grow">
        <div class="pt-6 px-4">
            <div class="container bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div class="mx-auto lg:w-5/6 px-6 text-gray-600 md:px-12 xl:px-6 mt-6 md:mt-10">
                    <section v-if="post" class="mb-32 text-gray-800">
                        <img :src="post.photo" class="w-full shadow-lg rounded-lg mb-6" alt="" />

                        <div class="flex items-center mb-6">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg" class="rounded-full mr-2 h-8" alt=""
                                 loading="lazy" />
                            <div>
                                <span> Published <b>{{ formatDate(post.created_at) }}</b> by </span>
                                <a v-if="post.user" href="#!" class="font-medium">{{ post.user.name }}</a>
                            </div>
                        </div>

                        <h1 class="font-bold text-3xl mb-6">
                            {{ post.title }}
                        </h1>

                        <div v-html="post.description"/>
                    </section>
                    <div v-else>
                        <Loading />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import Loading from '../../../../components/helper/loading.vue'

import {onMounted, ref} from 'vue';
import { useStore } from 'vuex';
import {useRoute, useRouter} from 'vue-router';

const router = useRouter()
const artistData = ref(null)
const store = useStore()
const route = useRoute()

const formatDate = (date) => {
    let objectDate = new Date(date);
    let day = objectDate.getDate();
    let month = objectDate.getMonth();
    let year = objectDate.getFullYear();
    if (day < 10) {
        day = '0' + day
    }
    if (month < 10) {
        month = `0${month}`
    }

    return `${month}/${day}/${year}`
}
const post = ref({});

const getPost = async () => {
    if(route.params.id) {
        const param = {
            post: route.params.id,
            slug: 'test'
        }
        post.value = await store.dispatch('blogModule/getPost', param);
        console.log(post.value.user.name)
    }
}

    getPost()


</script>


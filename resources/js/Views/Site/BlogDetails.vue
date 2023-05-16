<template>
    <div class="white" v-if="post != null">
        <div class="container mx-auto lg:w-4/6 px-6 text-gray-600 md:px-12 xl:px-6 mt-6 md:mt-10">
            <section class="mb-32 text-gray-800">
                <img :src="post.photo" class="w-full shadow-lg rounded-lg mb-6" alt="" />

                <div class="flex items-center mb-6">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg" class="rounded-full mr-2 h-8" alt=""
                         loading="lazy" />
                    <div>
                        <span> Published <b>{{ formatDate(post.created_at) }}</b> by </span>
                        <a href="#!" class="font-medium">{{ post.user.name }}</a>
                    </div>
                </div>

                <h1 class="font-bold text-3xl mb-6">
                    {{ post.title }}
                </h1>

                <div v-html="post.description"/>
            </section>
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
import { QuillEditor } from '@vueup/vue-quill'
import BlotFormatter from 'quill-blot-formatter'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
const store = useStore()
const route = useRoute()
const modules = {
    name: 'blotFormatter',
    module: BlotFormatter,
    options: {/* options */}
}
const post = ref(null)
const imageUrl = (image) => {
    return '/' + image;
}
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
const getPost = async () => {
    const res = await store.dispatch('blogModule/getPost', route.params)
    post.value = res
    console.log(res)
}
onMounted(() => {
    getPost()
})
</script>

<style>

</style>

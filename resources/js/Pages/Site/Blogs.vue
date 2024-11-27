<template>
    <div class="white" v-if="posts?.length > 0">
        <div class="container mx-auto lg:w-5/6 px-6 text-gray-600 md:px-12 xl:px-6">
            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl py-4">Our Blog</h2>

            <div class="flex flex-wrap ">
                <!--start here-->
                <div class="p-4 md:w-1/3" v-for="post in posts" :key="post.id">
                    <router-link :to="{ name: 'BlogDetails', params: { slug: post.slug, post: post.id } }">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <div class="w-full">
                            <div class="w-full flex p-2">
                                <div class="p-2 ">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939"
                                         alt="author" class="w-10 h-10 rounded-full overflow-hidden" />
                                </div>
                                <div class="pl-2 pt-2 ">
                                    <p class="font-bold">
                                        {{ post.user.name }}
                                    </p>
                                    <p class="text-xs">
                                        {{ moment(String( post.created_at )).format('DD-MM-YYYY hh:mm') }}
                                    </p>
                                </div>
                            </div>
                        </div>


                        <img class="lg:h-48 md:h-36 w-full object-cover object-center"
                             :src="post.photo" alt="blog cover" />

                        <div class="p-4">
<!--                            <h2 class="tracking-widest text-xs title-font font-bold text-green-400 mb-1 uppercase ">-->
<!--                                Web development</h2>-->
<!--                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">This is a blog template Link-->
<!--                            </h1>-->
                            <div class="flex items-center flex-wrap ">
                                <router-link :to="{ name: 'BlogDetails', params: { slug: post.slug, post: post.id } }"
                                             class="text-green-800  md:mb-2 lg:mb-0">
                                    <p class="inline-flex items-center">{{ post.title }}
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                             stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </p>
                                </router-link>
                                <span
                                    class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path
                                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                    </svg>
                                    24
                                </span>
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                         stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path
                                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                        </path>
                                    </svg>
                                    89
                                </span>
                            </div>


                        </div>
                    </div>
                    </router-link>
                </div>
                <!--End here-->
            </div>
            <div class="text-center py-4" v-if="(total > perPage)">
                <button
                    v-if="(currentPage == lastPage)"
                    class="bg-blue-400 border-2 p-2 rounded-lg text-white hover:bg-blue-500"
                >No more data</button>
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
import moment from 'moment'
import { ref, onMounted, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const posts = ref([])
const currentPage = ref(0)
const lastPage = ref(0)
const perPage = ref(0)
const total = ref(0)
const postsData = async (page = 1) => {
    const res = await store.dispatch('blogModule/getPosts', page)
    console.log('artist res.....', res)
    currentPage.value = res.current_page
    lastPage.value = res.last_page
    perPage.value = res.per_page
    total.value = res.total
    posts.value = res.data
}
const getNextPosts = async () => {
    console.log('getNextPosts')
    window.onscroll = async () => {
        const wHeight= document.documentElement.offsetHeight * 0.6
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight > wHeight;
        if (bottomOfWindow) {
            if (lastPage.value > currentPage.value) {
                currentPage.value++
                const res = await store.dispatch('blogModule/getPosts', currentPage.value)
                res.data.forEach(element => {
                    posts.value.push(element)
                });

            }


        }
    };
}
onBeforeMount(async () => {
    await postsData()
})
onMounted(async () => {
    await getNextPosts()
})
</script>

<style>

</style>


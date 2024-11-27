<template>
    <!-- hero -->
    <section>
        <div class="h-16 w-full"></div>
        <div class="mx-auto bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-center  w-full pattern">
            <div class="flex flex-col p-5 items-center bg-black/50 w-full pt-16 mx-auto rounded-lg">
                <div class="w-28 mb-8 mt-2">
                    <img src="/images/bird.png" class="w-full">
                </div>
                <div>

                    <h2 class="text-4xl font-semibold text-gray-100">
                        Amplify the spirit of GENEROSITY
                    </h2>
                    <h2 class="text-4xl font-semibold text-gray-100 my-4">
                        Create a lasting LEGACY for your donors
                    </h2>
                    <p class="mt-3 text-gray-100">
                        The Good Giving Network facilitates the process for donors and collectors to contribute to their preferred
                        charities while also acquiring NFTs that align with their personal values.
                    </p>
                </div>
                <div class="flex text-white pt-5 gap-4">
                    <router-link to="/" class="px-3 py-2 border border-blue-400 hover:bg-blue-500 rounded-lg">
                        Explore
                    </router-link>
                    <router-link to="/" class="px-3 py-2 border border-purple-400 hover:bg-purple-500 rounded-lg">
                        Submit
                        Project</router-link>
                </div>
            </div>
        </div>
    </section>
    <!-- end hero -->
    <!-- card -->
    <section class="hidden lg:block">
        <!-- component -->
        <div class="py-16 bg-gray-200">
            <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-2">
                    <div class="bg-white rounded-2xl shadow-xl p-8 sm:px-12 lg:px-8">
                        <div class="space-y-4">
                            <h3 class="text-xl font-semibold text-center text-purple-900">
                                Empowering Charities and Artists to Create Change Together
                            </h3>
                            <p class="mb-6">
                                Our platform is a dedicated space for verified charities and genuine artists. We understand the significant
                                impact charities and their supportive communities can have on addressing the world's most critical challenges.
                                Our mission is to partner with these charities and communities, working together to achieve their goals.
                            </p>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl shadow-xl p-8 sm:px-12 lg:px-8">
                        <div class="space-y-4">
                            <h3 class="text-xl font-semibold text-purple-900 text-center">
                                Community-Integrated Projects & Utility-Driven NFTs
                            </h3>
                            <p class="mb-6">
                                Organizations championing noteworthy causes consistently attract an enthusiastic base of supporters
                                and contributors, forming a dedicated community. Proceeds from NFT sales are directed towards
                                addressing complex social and environmental challenges. With governance features, NFT collectors gain
                                DAO membership, enabling active participation in decision-making processes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end card -->
    <!-- info -->
    <section class="block lg:hidden">
        <div class="py-8 bg-gray-200">
            <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                <swiper class="swiper" :modules="modules" :breakpoints="swiperOptions.breakpoints" :space-between="30"
                    :slides-per-view="3" :slides-per-group="1" :loop="true" :loop-fill-group-with-blank="true"
                    :pagination="{ clickable: true }"
                    :autoplay="{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true, }" :speed="2000">
                    <swiper-slide>
                        <div class="bg-white h-96 overflow-auto rounded-2xl shadow-xl p-8 sm:px-12 lg:px-8 my-10">
                            <div class="space-y-4">
                                <h3 class="text-xl font-semibold text-center text-purple-900">
                                    Empowering Charities and Artists to Create Change Together
                                </h3>
                                <p class="mb-6">
                                    Our platform is a dedicated space for verified charities and genuine artists. We understand the significant
                                    impact charities and their supportive communities can have on addressing the world's most critical challenges.
                                    Our mission is to partner with these charities and communities, working together to achieve their goals.
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bg-white h-96 overflow-auto rounded-2xl shadow-xl p-8 sm:px-12 lg:px-8 my-10 py-10">
                            <div class="space-y-4">
                                <h3 class="text-xl font-semibold text-purple-900 text-center">
                                    Community-Integrated Projects & Utility-Driven NFTs
                                </h3>
                                <p class="mb-6">
                                    Organizations championing noteworthy causes consistently attract an enthusiastic base of supporters
                                    and contributors, forming a dedicated community. Proceeds from NFT sales are directed towards
                                    addressing complex social and environmental challenges. With governance features, NFT collectors gain
                                    DAO membership, enabling active participation in decision-making processes.
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
    <!-- end info -->
    <!-- auction -->
    <section>
        <div class="container mx-auto lg:w-5/6">
            <h2 class="text-2xl font-semibold py-6 px-4">
                Live auctions
            </h2>
            <swiper class="swiper" :modules="modules" :breakpoints="swiperOptions.breakpoints" :space-between="30"
                :slides-per-view="4" :slides-per-group="1" :loop="true" :loop-fill-group-with-blank="true"
                :navigation="true" :pagination="{ clickable: true }"
                :autoplay="{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }" :speed="3000">
                <swiper-slide v-for="(item, i) in 12" :key="item">
                    <div class="relative mx-auto w-full my-10">
                        <!-- <a href="#"
              class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"> -->
                        <div class="shadow p-4 rounded-lg bg-white">
                            <div class="flex justify-center relative rounded-lg overflow-hidden h-52">
                                <div
                                    class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                                    <!-- <div class="absolute inset-0 bg-black opacity-10"> -->
                                    <img class="w-full h-64 rounded-md transition hover:bg-cyan-300"
                                        src="https://picsum.photos/200/300?random=1"
                                         alt="">
                                    <!-- src="https://images.unsplash.com/photo-1546453667-8a8d2d07bc20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" -->
                                    <!-- </div> -->
                                </div>

                                <div class="absolute flex items-center justify-center bottom-0 right-0">
                                    <div
                                        class="cursor-pointer items-center flex bg-blue-500 px-4 py-1 space-x-5 rounded-full text-white overflow-hidden shadow">
                                        <p>
                                            Collect this Item
                                        </p>
                                        <p>
                                            <svg class="w-2 pt-1"
                                                viewBox="0 0 256 512">
                                                <path fill="white"
                                                    d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
                                            </svg>
                                        </p>
                                    </div>
                                </div>

                                <!-- <span
                    class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                    Featured
                  </span> -->
                            </div>

                            <div class="mt-4">
                                <h2 class="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                                    title="New York">
                                    End Human Trafficking {{ i + 1 }}
                                </h2>
                                <div class="mt-2 text-sm text-gray-800 line-clamp-1">
                                    <div class="flex items-center">
                                        <div class="relative">
                                            <div class="rounded-full w-10 bg-gray-200">
                                                <img class="w-full"
                                                    src="https://lh3.googleusercontent.com/kFX2goMLoEdYxifW7L1L-iKZJYceEky3byOR43Jk8SqBAT3TnNyflljmz7RpE1MYTy6z8sydQFL20Ph8LOBiONocCjSTHuOc6wwO9Q=s120" />
                                            </div>
                                            <span
                                                class="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                                        </div>

                                        <p class="ml-2 text-gray-800 line-clamp-1">
                                            Bilateral Safety Corridor Coalition NFT Project
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- </a> -->
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
    <!-- end auction -->
    <!-- Charities -->
    <section v-if="charityValue != null">
        <div class="container mx-auto lg:w-5/6">
            <div class="flex justify-between items-center my-4 mx-4">
                <h2 class="text-2xl font-semibold py-2 px-4">
                    Charities
                </h2>
                <router-link to="/charities" class="flex hover:text-blue-400"><span>View More</span><svg class="w-4 pt-1"
                         viewBox="0 0 24 24">
                        <path
                            d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z">
                        </path>
                    </svg>
                </router-link>
            </div>

            <swiper v-if="charityValue.length > 0" class="swiper" :modules="modules"
                :breakpoints="swiperOptions.breakpoints" :space-between="30" :slides-per-view="4" :slides-per-group="1"
                :loop="true" :loop-fill-group-with-blank="true" :navigation="true" :pagination="{ clickable: true }"
                :autoplay="{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }" :speed="3000">
                <swiper-slide v-for="(item, i) in charityValue" :key="item">
                    <div class="relative mx-auto w-full my-10">
                        <a href="#"
                            class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                            <div class="shadow p-4 rounded-lg bg-white">
                                <div class="flex justify-center relative rounded-lg overflow-hidden h-52">
                                    <div
                                        class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                                        <!-- <div class="absolute inset-0 bg-black opacity-10"> -->
                                        <img class="w-full h-64 rounded-md transition hover:bg-cyan-300"
                                            :src="item.cover_photo" alt="">
                                        <!-- </div> -->
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <h2 class="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                                        >
                                        {{item.organization_name}}
                                    </h2>
                                    <div class="mt-2 text-sm text-gray-800 line-clamp-1">
                                        <div class="flex items-center">
                                            <div class="relative">
                                                <img :src="item.logo"
                                                    class="rounded-full border-solid border-white border-2 w-10">
                                            </div>

                                            <p class="ml-2 text-gray-800 line-clamp-1">
                                                {{item.user?.name}}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex justify-between mt-2">
                                    <p class="inline-flex flex-col xl:items-center text-gray-800">
                                        <span class="mt-2 xl:mt-0">
                                            Reserve price
                                        </span>
                                        <span>0.99 ETH</span>
                                    </p>
                                    <p class="inline-flex flex-col xl:flex-row items-end text-gray-800">
                                        <svg class="w-5"  viewBox="0 0 24 24">
                                            <path
                                                d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z">
                                            </path>
                                        </svg>
                                        <span class="mt-2 xl:mt-0">
                                            {{25 + i}}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </swiper-slide>
                <!-- <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide> -->
            </swiper>
        </div>
    </section>
    <!-- end Charities -->
    <!-- Artists -->
    <!-- <section>
        <div class="container mx-auto lg:w-5/6">
            <h2 class="text-2xl font-semibold py-6 px-4">
                Artists & Collabs
            </h2>
            <swiper class="swiper" :modules="modules" :breakpoints="swiperOptions.breakpoints" :space-between="30"
                :slides-per-view="4" :slides-per-group="1" :loop="true" :loop-fill-group-with-blank="true"
                :navigation="true" :pagination="{ clickable: true }"
                :autoplay="{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }" :speed="3000">
                <swiper-slide v-for="item, i in 12" :key="item">
                    <div class="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-purple-500">
                        <div class="flex justify-center bg-white">
                            <img :src="`https://i.pravatar.cc/${300 + i}`"
                                class="rounded-full border-solid border-white border-2 w-24">
                        </div>
                        <div class="text-center px-3 pb-3 pt-2">
                            <h3 class="text-white text-sm bold font-sans">Olivia Dunham</h3>
                        </div>
                        <div class="text-center pb-3 text-white">
                            <span>ERC-721</span>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section> -->
    <!-- end Artists -->
    <!-- Artists -->
    <section v-if="artistValue != null">
        <div class="container mx-auto lg:w-5/6">
            <div class="flex justify-between items-center my-4 mx-4">
                <h2 class="text-2xl font-semibold py-6 px-4">
                Artists & Collabs
            </h2>
                <router-link to="/artists" class="flex hover:text-blue-400"><span>View More</span><svg class="w-4 pt-1"
                         viewBox="0 0 24 24">
                        <path
                            d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z">
                        </path>
                    </svg>
                </router-link>
            </div>

            <swiper v-if="artistValue.length > 0" class="swiper" :modules="modules"
                :breakpoints="swiperOptions.breakpoints" :space-between="30" :slides-per-view="4" :slides-per-group="1"
                :loop="true" :loop-fill-group-with-blank="true" :navigation="true" :pagination="{ clickable: true }"
                :autoplay="{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }" :speed="3000">
                <swiper-slide v-for="(item, i) in artistValue" :key="'item-artist' + i">
                    <div class="max-w-md px-8 bg-white shadow-lg rounded-lg my-10">
                        <div class="flex justify-center md:justify-end z-80">
                            <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                                :src="item.photo">
                            <!-- :src="`https://i.pravatar.cc/${300 + i}`"> -->
                        </div>
                        <div>
                            <h2 class="text-gray-800 text-l font-semibold">{{item.artistic_inspiration}}</h2>
                            <p class="mt-2 text-gray-600 h-48 overflow-auto">
                                {{item.personal_story}}
                            </p>
                        </div>
                        <div class="text-right mt-4 py-4">
                            <a href="#" class="text-l font-medium text-indigo-500">{{item.user?.name}}</a>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
    <!-- end Artists -->
    <!-- Creating and selling -->
    <section>
        <div class="container mx-auto lg:w-5/6">
            <!-- component -->
            <!-- <div class="antialiased w-full h-full text-gray-400 font-inter p-10">
        <div class="container px-4 mx-auto"> -->
            <div>
                <div id="title" class="my-4 mx-4">
                    <h1 class="font-semibold text-2xl">Get started creating & selling your NFTs</h1>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-evenly gap-10 pt-10">
                    <div id="plan"
                        class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
                        <div id="title" class="w-full py-5 border-b border-gray-800">
                            <h2 class="font-bold text-2xl">Set up your wallet</h2>
                        </div>
                        <div id="content" class="">
                            <div id="icon" class="my-5">
                                <svg class="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z">
                                    </path>
                                </svg>
                            </div>
                            <div id="contain" class="leading-8 mb-10 text-lg font-light mx-2">
                                Once you’ve set up your wallet of choice, connect it to NFT marketplace by clicking
                                this link.
                                <router-link to="/" class="text-blue-500 underline">Connect my wallet</router-link>
                            </div>
                        </div>
                    </div>
                    <div id="plan"
                        class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
                        <div id="title" class="w-full py-5 border-b border-gray-800">
                            <h2 class="font-bold text-2xl">Create your collection</h2>
                        </div>
                        <div id="content" class="">
                            <div id="icon" class="my-5">
                                <svg class="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M10,13H4a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,19H5V15H9ZM20,3H14a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,9H15V5h4Zm1,7H18V14a1,1,0,0,0-2,0v2H14a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V18h2a1,1,0,0,0,0-2ZM10,3H4A1,1,0,0,0,3,4v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,10,3ZM9,9H5V5H9Z">
                                    </path>
                                </svg>
                            </div>
                            <div id="contain" class="leading-8 mb-10 text-lg font-light mx-2">
                                Click Create and set up your collection. Add social links, a description, profile &
                                banner images, and
                                set a secondary sales fee.
                            </div>
                        </div>
                    </div>
                    <div id="plan"
                        class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
                        <div id="title" class="w-full py-5 border-b border-gray-800">
                            <h2 class="font-bold text-2xl">Add your NFTs</h2>
                        </div>
                        <div id="content" class="">
                            <div id="icon" class="my-5">
                                <svg class="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M22.71,6.29a1,1,0,0,0-1.42,0L20,7.59V2a1,1,0,0,0-2,0V7.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3A1,1,0,0,0,22.71,6.29ZM19,13a1,1,0,0,0-1,1v.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,11.12a2.85,2.85,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h8a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.46,20Zm13-1a.89.89,0,0,1-.18.53L13.31,15l.7-.7a.77.77,0,0,1,1.1,0L18,17.21Z">
                                    </path>
                                </svg>
                            </div>
                            <div id="contain" class="leading-8 mb-10 text-lg font-light mx-2">
                                Upload your work, add a title and description, and customize your NFTs with
                                properties, stats, and
                                unlockable content.
                            </div>
                        </div>
                    </div>
                    <div id="plan"
                        class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
                        <div id="title" class="w-full py-5 border-b border-gray-800">
                            <h2 class="font-bold text-2xl">List them for sale</h2>
                        </div>
                        <div id="content" class="">
                            <div id="icon" class="my-5">
                                <svg class="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M15,12a1,1,0,1,0,1-1A1,1,0,0,0,15,12Zm6.71-.71-5-5A1,1,0,0,0,16,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H16a1,1,0,0,0,.71-.29l5-5A1,1,0,0,0,21.71,11.29ZM15.59,16H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H15.59l4,4Z">
                                    </path>
                                </svg>
                            </div>
                            <div id="contain" class="leading-8 mb-10 text-lg font-light mx-2">
                                Choose between auctions, fixed-price listings, and declining-price listings. You
                                choose how you want to
                                sell your NFTs, and we help you sell them!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- </div>
    </div> -->
    </section>
    <!-- end Creating and selling -->
    <!-- blog -->
    <section>
        <div class="container mx-auto px-5 py-5 lg:w-5/6">
            <!-- <section class="text-gray-600 body-font">
        <div class="container px-5 py-5 mx-auto"> -->
            <div id="title" class="my-4 mx-4 flex justify-between items-center">
                <h1 class="font-semibold text-2xl">Our Blog</h1>
                <router-link to="/" class="flex hover:text-blue-400"><span>View More</span><svg class="w-4 pt-1"
                         viewBox="0 0 24 24">
                        <path
                            d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z">
                        </path>
                    </svg>
                </router-link>
            </div>
            <div class="flex flex-wrap -m-4">

                <!--start here-->
                <div class="p-4 md:w-1/3">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <div class="w-full">
                            <div class="w-full flex p-2">
                                <div class="p-2 ">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939"
                                        alt="author" class="w-10 h-10 rounded-full overflow-hidden" />
                                </div>
                                <div class="pl-2 pt-2 ">
                                    <p class="font-bold">{{ blogName[0] }}</p>
                                    <p class="text-xs">2 June 2022</p>
                                </div>
                            </div>
                        </div>
                        <img class="lg:h-48 md:h-36 w-full object-cover object-center"
                            src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/blog.jpg?alt=media&token=271cb624-94d4-468d-a14d-455377ba75c2"
                            alt="blog cover" />

                        <div class="p-4">
                            <h2 class="tracking-widest text-xs title-font font-bold text-green-400 mb-1 uppercase ">
                                Web
                                development</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">This is a blog template
                            </h1>
                            <div class="flex items-center flex-wrap ">
                                <a href="/" class="text-green-800  md:mb-2 lg:mb-0">
                                    <p class="inline-flex items-center">Read Blog
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                            stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </p>
                                </a>
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
                </div>
                <div class="p-4 md:w-1/3">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <div class="w-full">
                            <div class="w-full flex p-2">
                                <div class="p-2 ">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939"
                                        alt="author" class="w-10 h-10 rounded-full overflow-hidden" />
                                </div>
                                <div class="pl-2 pt-2 ">
                                    <p class="font-bold">{{ blogName[1] }}</p>
                                    <p class="text-xs">2 June 2022</p>
                                </div>
                            </div>
                        </div>


                        <img class="lg:h-48 md:h-36 w-full object-cover object-center"
                            src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/blog.jpg?alt=media&token=271cb624-94d4-468d-a14d-455377ba75c2"
                            alt="blog cover" />

                        <div class="p-4">
                            <h2 class="tracking-widest text-xs title-font font-bold text-green-400 mb-1 uppercase ">
                                Web
                                development</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">This is a blog template
                            </h1>
                            <div class="flex items-center flex-wrap ">
                                <a href="/" class="text-green-800  md:mb-2 lg:mb-0">
                                    <p class="inline-flex items-center">Read Blog
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                            stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </p>
                                </a>
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
                </div>
                <div class="p-4 md:w-1/3">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <div class="w-full">
                            <div class="w-full flex p-2">
                                <div class="p-2 ">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939"
                                        alt="author" class="w-10 h-10 rounded-full overflow-hidden" />
                                </div>
                                <div class="pl-2 pt-2 ">
                                    <p class="font-bold">{{ blogName[2] }}</p>
                                    <p class="text-xs">2 June 2022</p>
                                </div>
                            </div>
                        </div>


                        <img class="lg:h-48 md:h-36 w-full object-cover object-center"
                            src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/blog.jpg?alt=media&token=271cb624-94d4-468d-a14d-455377ba75c2"
                            alt="blog cover" />

                        <div class="p-4">
                            <h2 class="tracking-widest text-xs title-font font-bold text-green-400 mb-1 uppercase ">
                                Web
                                development</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">This is a blog template
                            </h1>
                            <div class="flex items-center flex-wrap ">
                                <a href="/" class="text-green-800  md:mb-2 lg:mb-0">
                                    <p class="inline-flex items-center">Read Blog
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                            stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </p>
                                </a>
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
                </div>
                <!--End here-->
            </div>
        </div>
    </section>
    <!-- </div>
    </section> -->
</template>

<script setup>
import SwiperClass, { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import swiper module styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ref, computed, reactive, onMounted } from "vue";
import { useStore } from "vuex";
const blogName = ['Charity', 'Digital Art', 'Artist']
const modules = ref([Pagination, Navigation, Autoplay])
const swiperOptions = reactive({
    // autoplay: {
    //   delay: 2000
    // }
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        770: {
            slidesPerView: 2,
            spaceBetween: 50
        },

        771: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
})
// const swiper = new Swiper()
const store = useStore();
const auth = ref(true);
const artistValue = ref([])
const charityValue = ref([])
const openMenu = ref(false);
const user = computed(() => store.getters.user);
const artistData = async (page = 1) => {
    const res = await store.dispatch('artistModule/getArtists', page)
    // console.log('artist res', res)
    artistValue.value = res.data
}
const charityData = async (page = 1) => {
    const res = await store.dispatch('charityModule/getCharity', page)
    // console.log('charity res..', res)
    charityValue.value = res.data
}
onMounted( async () => {
   await artistData()
   await charityData()
})
</script>
<style scoped>
.pattern {
    background-image: url('/images/bg-image/cover.png');
    /*background-image: url('/images/bg-image/PatchWorkKingdoms.png');*/
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>

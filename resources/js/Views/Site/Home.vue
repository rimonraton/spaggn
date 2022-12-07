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
                        Amplify GENEROSITY
                    </h2>
                    <h2 class="text-4xl font-semibold text-gray-100 my-4">
                        Create LEGACY for your donors
                    </h2>
                    <p class="mt-3 text-gray-100">
                        Good Giving Network helps donors and collectors donate to their favorite charities and collect
                        NFTs that reflect their values.
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
                <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
                    <div class="bg-white rounded-2xl shadow-xl p-8 sm:px-12 lg:px-8">
                        <div class="space-y-4">
                            <h3 class="text-xl font-semibold text-center text-purple-900">
                                We are not just another NFT Marketplace
                            </h3>
                            <p class="mb-6">
                                Our platform is designed for Charities and nonprofits that are dedicated to solving the
                                world's biggest problems. GGN partners with these organizations to help them achieve
                                their vision. All the charities, artists, and collabs on our platform are vetted and
                                authenticated.
                            </p>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl shadow-xl p-8 sm:px-12 lg:px-8">
                        <div class="space-y-4">
                            <h3 class="text-xl font-semibold text-purple-900 text-center">
                                Projects with built-in community & Utility
                            </h3>
                            <p class="mb-6">
                                Charities with great cause always have a passionate group of followers and donors - a
                                built-in community. The funds collected for NFT sales are used to solve difficult
                                societal and environmental problems. In addition, projects with governance features
                                provide DAO membership to the NFT holders. The collectors of these NFTs have the
                                opportunity to vote on the NFT projects or any other projects related to the charity.
                            </p>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl shadow-xl p-8 sm:px-12 lg:px-8">
                        <div class="space-y-4">
                            <h3 class="text-xl font-semibold text-purple-900 text-center">
                                We are addressing the NFT platform challenges
                            </h3>
                            <p class="mb-6">
                                GGN partners with <a href="https://nftrade.com" target="_blank"
                                    class="text-blue-700 hover:underline cursor-pointer">
                                    NFTrade
                                </a>
                                the first cross-chain and blockchain agnostic NFT platform to
                                address the multi-chain & cross-chain and peer-to-peer challenges. GGN is building a
                                seamless integration between the two platforms. The fiat currency integration to NFT is
                                also on NFTrade’s roadmap. Once complete, anyone will be able to purchase NFTs using
                                credit cards in their native currency.
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
                                    We are not just another NFT Marketplace
                                </h3>
                                <p class="mb-6">
                                    Our platform is designed for Charities and nonprofits that are dedicated to solving
                                    the world's biggest problems. GGN partners with these organizations to help them
                                    achieve their vision. All the charities, artists, and collabs on our platform are
                                    vetted and authenticated.
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bg-white h-96 overflow-auto rounded-2xl shadow-xl p-8 sm:px-12 lg:px-8 my-10 py-10">
                            <div class="space-y-4">
                                <h3 class="text-xl font-semibold text-purple-900 text-center">
                                    Projects with built-in community & Utility
                                </h3>
                                <p class="mb-6">
                                    Charities with great cause always have a passionate group of followers and donors -
                                    a built-in community. The funds collected for NFT sales are used to solve difficult
                                    societal and environmental problems. In addition, projects with governance features
                                    provide DAO membership to the NFT holders. The collectors of these NFTs have the
                                    opportunity to vote on the NFT projects or any other projects related to the
                                    charity.
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bg-white h-96 overflow-auto rounded-2xl shadow-xl p-8 sm:px-12 lg:px-8 my-10">
                            <div class="space-y-4">
                                <h3 class="text-xl font-semibold text-purple-900 text-center">
                                    We are addressing the NFT platform challenges
                                </h3>
                                <p class="mb-6">
                                    GGN partners with <a href="https://nftrade.com" target="_blank"
                                        class="text-blue-700 hover:underline cursor-pointer">NFTrade</a> the first
                                    cross-chain and blockchain agnostic NFT platform
                                    to address the multi-chain & cross-chain and peer-to-peer challenges. GGN is
                                    building a seamless integration between the two platforms. The fiat currency
                                    integration to NFT is also on NFTrade’s roadmap. Once complete, anyone will be able
                                    to purchase NFTs using credit cards in their native currency.
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
                <swiper-slide v-for="item, i in 12" :key="item">
                    <div class="relative mx-auto w-full my-10">
                        <!-- <a href="#"
              class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"> -->
                        <div class="shadow p-4 rounded-lg bg-white">
                            <div class="flex justify-center relative rounded-lg overflow-hidden h-52">
                                <div
                                    class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                                    <!-- <div class="absolute inset-0 bg-black opacity-10"> -->
                                    <img class="w-full h-64 rounded-md transition hover:bg-cyan-300"
                                        :src="`https://source.unsplash.com/random/?Cryptocurrency&${i + 1}`" alt="">
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
                <swiper-slide v-for="item, i in charityValue" :key="item">
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

                                    <!-- <div class="absolute flex justify-center bottom-0 mb-3">
                    <div class="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                      <p class="flex items-center font-medium text-gray-800">
                        <svg class="w-5 h-5 fill-current mr-2"  viewBox="0 0 512 512">
                          <path
                            d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z">
                          </path>
                        </svg>
                        3 + 1
                      </p>

                      <p class="flex items-center font-medium text-gray-800">
                        <svg class="w-5 h-5 fill-current mr-2"  viewBox="0 0 480 512">
                          <path
                            d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z">
                          </path>
                        </svg>
                        2
                      </p>

                      <p class="flex items-center font-medium text-gray-800">
                        <svg class="w-5 h-5 fill-current mr-2"  viewBox="0 0 512 512">
                          <path
                            d="M504,256H64V61.25a29.26,29.26,0,0,1,49.94-20.69L139.18,65.8A71.49,71.49,0,0,0,128,104c0,20.3,8.8,38.21,22.34,51.26L138.58,167a8,8,0,0,0,0,11.31l11.31,11.32a8,8,0,0,0,11.32,0L285.66,65.21a8,8,0,0,0,0-11.32L274.34,42.58a8,8,0,0,0-11.31,0L251.26,54.34C238.21,40.8,220.3,32,200,32a71.44,71.44,0,0,0-38.2,11.18L136.56,18A61.24,61.24,0,0,0,32,61.25V256H8a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H32v96c0,41.74,26.8,76.9,64,90.12V504a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V480H384v24a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V474.12c37.2-13.22,64-48.38,64-90.12V288h24a8,8,0,0,0,8-8V264A8,8,0,0,0,504,256ZM228.71,76.9,172.9,132.71A38.67,38.67,0,0,1,160,104a40,40,0,0,1,40-40A38.67,38.67,0,0,1,228.71,76.9ZM448,384a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V288H448Z">
                          </path>
                        </svg>
                        3
                      </p>
                    </div>
                  </div> -->

                                    <!-- <span
                    class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                    Featured
                  </span> -->
                                </div>

                                <div class="mt-4">
                                    <h2 class="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                                        >
                                        {{item.organization_name}}
                                    </h2>
                                    <div class="mt-2 text-sm text-gray-800 line-clamp-1">
                                        <div class="flex items-center">
                                            <div class="relative">
                                                <!-- <div class="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"></div>
                        <span class="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span> -->
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
                <swiper-slide v-for="item, i in artistValue" :key="'item-artist' + i">
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

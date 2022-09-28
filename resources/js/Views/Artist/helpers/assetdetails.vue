<template>
    <div id="viewerBox" class="lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900">
        <div class="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech justify-center lg:space-x-8">
            <div class="lg:w-1/2 flex justify-center items-strech bg-gray-50">
                <div class="relative rounded md:block" v-if="assetDataValue.fileType == 'image'">
                    <img :src="assetDataValue.file" alt="img" class="w-full h-96" />
                </div>
                <div class="relative rounded md:block" aspect-video v-if="assetDataValue.fileType == 'video'">
                    <video controls class="w-full h-full">
                        <source :src="assetDataValue.file" id="video_here" />
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </div>
            <div class="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
                <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
                    {{assetDataValue.name}}
                </h1>
                <p class="text-base leading-normal text-gray-600 dark:text-white mt-2">
                    {{assetDataValue.description}}
                </p>
                <p class="text-3xl font-medium text-gray-600 dark:text-white mt-8 md:mt-10"></p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    assetDataValue: { type: Object, required: true }
})
</script>

<style>

</style>
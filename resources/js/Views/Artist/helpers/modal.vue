<template>
    <div>
        <div v-if="showModal"
            class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <div class="relative w-auto my-6 mx-auto max-w-6xl">
                <!--content-->
                <div
                    class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <!--header-->
                    <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 class="text-3xl font-semibold">
                            {{ title }}
                        </h3>
                        <h3 class="text-3xl font-semibold cursor-pointer" v-on:click="toggleModal()">
                            <span
                                class=" text-red-500 h-6 w-6 text-2xl block">
                                ×
                            </span>
                        </h3>
                        <!-- <div
                            class="p-1 ml-auto border-0 text-red opacity-5 float-right text-3xl font-semibold"
                            v-on:click="toggleModal()">
                            <span
                                class="text-red opacity-5 h-6 w-6 text-2xl block">
                                ×
                            </span>
                        </div> -->
                    </div>
                    <!--body-->
                    <div class="relative p-6 flex-auto">
                        <slot></slot>
                    </div>
                    <!--footer-->
                    <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            v-if="bottomCloseButton"
                            class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button" v-on:click="toggleModal()">
                            {{ closeButtonText }}
                        </button>
                        <button
                            class="text-white bg-blue-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded"
                            type="button" v-on:click="submitForm()">
                            {{ buttonText }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
</template>
  
<script setup>
defineProps({
    title: { type: String, default: 'Title' },
    closeButtonText: { type: String, default: 'Close' },
    buttonText: { type: String, default: 'Submit' },
    bottomCloseButton: { type: Boolean, default: false },
    showModal: { type: Boolean, default: false },
})
const emit = defineEmits(['close', 'submit'])

const toggleModal = () => {
    emit('close')
}
const submitForm = () => {
    emit('submit')
}

// const toggleModal = () => {
//     showModal.value = !showModal.value;
// }
</script>
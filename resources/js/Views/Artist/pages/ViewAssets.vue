<template>
  <div class="sm:px-6 w-full">
    <!-- <div class="px-4 md:px-10 py-4 md:py-0"> -->

    <!-- </div> -->
    <div class="bg-white py-4 md:py-6 px-4 md:px-8 xl:px-10">
      <div class="flex items-center justify-between">
        <p
          class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
          Your Assets
        </p>
        <div>
          <button @click="closeModal"
            class="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
            <p class="text-sm font-medium leading-none text-white">
              Add Asset
            </p>
          </button>
        </div>
      </div>
      <section class="container mx-auto p-6 font-mono" v-if="Object.keys(assetData).length != 0">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div class="w-full overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr
                  class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th class="px-4 py-3">Asset</th>
                  <th class="px-4 py-3">Name</th>
                  <th class="px-4 py-3">Description</th>
                  <th class="px-4 py-3">Created At</th>
                  <th class="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr class="text-gray-700" v-for="asset in assetData.data" :key="asset.id">
                  <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                      <div class="relative w-full h-12 rounded md:block">
                        <img class="object-cover w-full h-full rounded" :src="asset.file" alt="image" loading="lazy" />
                        <div class="absolute inset-0 shadow-inner" aria-hidden="true"></div>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-ms font-semibold border">
                    {{ asset.name }}
                  </td>
                  <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      {{ asset.description }}
                    </span>
                  </td>
                  <td class="px-4 py-3 text-sm border">
                    {{format(new Date(asset.created_at),"PPPP")}}
                  </td>
                  <td class="px-4 py-3 text-sm border">
                    <button data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" type="button"
                      class="text-blue-700 border hover:border-blue-700 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#4AB7B2" class="w-5 h-5" viewBox="0 0 512 512">
                        <path
                          d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                      </svg>
                      <span class="sr-only">Icon description</span>
                    </button>
                    <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="View"
                      class="text-blue-700 border hover:border-blue-700 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#8C4AB7" class="w-5 h-5" viewBox="0 0 576 512">
                        <path
                          d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
                      </svg>
                      <span class="sr-only">Icon description</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
        <div>
          <VueTailwindPagination v-if="paginationData.total > paginationData.perPage" :current="paginationData.current"
            :total="paginationData.total" :per-page="paginationData.perPage" @page-changed="artistAsset($event)" />
        </div>
      </section>
      <section class="container mx-auto" v-else>No data found..</section>
    </div>
  </div>
  <asset-modal :showModal="modalOpen" @close="closeModal">
    <AssetForm :bottomCloseButton="modalOpen" @close="closeModal" />
  </asset-modal>
  <!-- </div> -->
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'
import AssetModal from "../helpers/modal.vue";
import AssetForm from '../helpers/assetform.vue'
import { format } from "date-fns";
const paginationData = reactive({
  current: 1,
  perPage: 0,
  total: 0
})
const store = useStore();
const modalOpen = ref(false);
const assetData = ref({});
const closeModal = () => {
  modalOpen.value = !modalOpen.value;
};
const artistAsset = async (page = 1) => {
  const res = await store.dispatch("artistModule/getArtistAssets", page);
  assetData.value = res;
  paginationData.current = page
  paginationData.perPage = res.per_page
  paginationData.total = res.total
};
const getImage = (image) => {
  return image
}
onMounted(() => {
  artistAsset();
});
</script>

<style>

</style>

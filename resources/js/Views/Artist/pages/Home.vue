<template>
  <!-- <ArtistLayout>  -->
    Home {{ store.state.artistModule.artist }} 
    <!-- </ArtistLayout> -->
</template>
<script setup>
import ArtistLayout from "../../../layouts/ArtistLayout";
import { useStore } from "vuex";
const store = useStore();
</script>

<style></style>

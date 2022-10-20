<template>
   <h1>ArtistDetails</h1>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex'
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const store = useStore()
  const getData = () => {
    console.log(route.params.id)
  }
  onMounted(() => {
    getData()
  })
  </script>
  
  <style scoped>
  .loader {
    border-top-color: #3498db;
    -webkit-animation: spinner 1.5s linear infinite;
    animation: spinner 1.5s linear infinite;
  }
  
  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
  
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  
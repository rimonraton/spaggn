<template>
  <headerComponent></headerComponent>
    <div>
        <Home></Home>
    </div>
   <footerComponent></footerComponent>
</template>
<script setup>
import headerComponent from '../../components/helper/Header';
import footerComponent from '../../components/helper/Footer';
import Home from './Home.vue';
</script>

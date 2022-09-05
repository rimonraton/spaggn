<template>
  <headerComponent></headerComponent>
  <div class="pt-16">
    <router-view />
  </div>
  <footerComponent></footerComponent>
</template>
<script setup>
import headerComponent from '../components/helper/Header';
import footerComponent from '../components/helper/Footer';
</script>



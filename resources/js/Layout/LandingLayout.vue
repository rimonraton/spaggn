<template>
<h1>Landind</h1>
<nav-bar v-if="this.$route.name !== 'welcome'"></nav-bar>\  
  <slot></slot>
</template>

<script>
export default {

}
</script>

<style>

</style>
<template>
    <Button>{{buttonText}}</Button>
</template>

<script setup>
defineProps({
    buttonText: { type: String, default: 'ura dhura' },
})
</script>

<style>

</style>
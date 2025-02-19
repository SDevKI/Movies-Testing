<script setup>
const route = useRoute()


</script>

<template>
    <div class="flex w-full h-screen overflow-clip">
        <NavBar :active="route.name" v-if="route.name !== 'index'"></NavBar>
        <NuxtPage class="flex-1 "></NuxtPage>
    </div>
</template>


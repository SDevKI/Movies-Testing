<script setup>
import { useMovieStore } from './stores/MovieStore';
const route = useRoute()
const movieStore = useMovieStore()
//onBeforeMounted

onBeforeMount(()=>{
    movieStore.fetchData();
})

</script>

<template>
    <div class="flex w-full h-screen overflow-clip">
        <NavBar :active="route.name" v-if="route.name !== 'index'">
            <NuxtPage></NuxtPage>
        </NavBar>
        <NuxtPage class="flex-1" :class="route.name == 'index'?'':'md:block hidden'"></NuxtPage>
    </div>
</template>


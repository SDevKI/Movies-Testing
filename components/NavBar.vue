<script setup>
import { NuxtLink } from '#components';

const route = useRoute();
const router = useRouter();

const active = reactive([
    { name: 'home', active: false },
    { name: 'live', active: false },
    { name: 'favorite', active: false }
]);

const currentPage = route.name

const props = defineProps({
    active: String,
})

watch(currentPage,()=>{
    setActive(currentPage)
})

onMounted(()=>{
    setActive(currentPage)
})

function setTo(name){
    setActive(name);
    router.push({name:name})
}

function setActive(name) {
    active.forEach(item => {
        item.active = (item.name === name);
    });
}


</script>

<template>
    <div class="min-w-[270px] md:flex px-6 py-2 hidden flex-col gap-3">
        <div class="flex items-center">
            <img src="/assets/logo.png" alt="" class="w-[142px] h-[53.2px]">
            <img src="/assets/bell.png" class="ml-auto w-6 h-6 cursor-pointer" alt=""  @click="router.push({name:'notification'})">
        </div>
        <NuxtLink to="/home" class="flex h-8 text-base gap-3 items-center" @click="setActive('home')"
            :class="active[0].active ? 'text-[#ffb700]' : 'text-white'">
            <img src="/assets/home.svg" alt="" class="w-8 h-8 " :class="active[0].active ? 'filterBG' : ''">
            <h2 class="duration-300 transition-all">Home</h2>
        </NuxtLink>
        <NuxtLink to="/live" class="flex h-8 text-base gap-3 items-center" @click="setActive('live')"
            :class="active[1].active ? 'text-[#ffb700]' : 'text-white'">
            <img src="/assets/live.svg" alt="" class="w-8 h-8 " :class="active[1].active ? 'filterBG' : ''">
            <h2 class="duration-300 transition-all">Live now</h2>
        </NuxtLink>
        <NuxtLink to="/favorite" class="flex h-8 text-base gap-3 items-center" @click="setActive('favorite')"
            :class="active[2].active ? 'text-[#ffb700]' : 'text-white'">
            <img src="/assets/bookmark.svg" alt="" class="w-8 h-8 " :class="active[2].active ? 'filterBG' : ''">
            <h2 class="duration-300 transition-all">Favorite</h2>
        </NuxtLink>
    </div>
    <div class="w-full h-full flex flex-col md:hidden">
        <div class="flex h-[70px] justify-between items-center px-2">
            <img src="/assets/logo.png" alt="" class="w-[142px] h-[53.2px]">
            <img src="/assets/bell.png" class="ml-auto w-6 h-6 cursor-pointer" alt=""  @click="router.push({name:'notification'})">
        </div>
        <slot> 

        </slot>
        <div class="flex h-[70px] items-center justify-between px-8 w-full">
            <img src="/assets/home.svg" alt="" class="w-8 h-8 " :class="active[0].active ? 'filterBG' : ''" @click="setTo('home')">
            <img src="/assets/live.svg" alt="" class="w-8 h-8 " :class="active[1].active ? 'filterBG' : ''" @click="setTo('live')">
            <img src="/assets/bookmark.svg" alt="" class="w-8 h-8 " :class="active[2].active ? 'filterBG' : ''" @click="setTo('favorite')">
        </div>
    </div>
</template>

<style>
.filterBG {
    filter: brightness(0) saturate(100%) invert(61%) sepia(93%) saturate(805%) hue-rotate(1deg) brightness(106%) contrast(101%);
}
</style>
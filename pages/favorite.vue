<script setup>
import data from '@/public/movies.json'

function convertSeconds(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return `${hours}hr ${minutes}m `;
}

</script>

<template>
  <BackgroundEfffect>
        <div class=" flex flex-col gap-3">

            <div class="flex items-center px-3">
                <img src="/assets/bookmark.svg" class="size-6 mr-3" alt="">
                <h1 class="font-bold text-[23px] ">Favorite</h1>
            </div>
            <div class="w-full h-fit flex gap-3 flex-wrap items-start">
                <div class="w-[162px] h-auto" v-for="(item, index) in data" :key="index">
                    <img :src="item.poster" alt="" class="w-full h-[96px] rounded-xl mb-2 object-cover">
                    <div class="flex flex-col text-white text-base">
                        <h3>{{ item.title }}</h3>
                        <div v-if="item.rating % 2 == 0" class="flex">
                            <img src="/assets/full-star.png" alt="" class="size-[13px]" v-for="n in item.rating / 2">
                        </div>
                        <div v-else class="flex">
                            <img src="/assets/full-star.png" alt="" class="size-[13px]"
                            v-for="n in (item.rating - 1) / 2">
                            <img src="/assets/star-half.png" alt="" class="size-[13px]">
                        </div>
                        <div class="text-[8px] opacity-60">length : {{ convertSeconds(item.duration) }}</div>
                        <div class="flex items-center">
                            <img src="/assets/volume-yellow.png" class="size-3 mr-1 object-cover" alt="">
                            <h4 class="text-[10px] opacity-60">EN /TH</h4>
                        </div>
                    </div>
                </div>
                
            </div>
      </div>

  </BackgroundEfffect>
</template>

<style>

</style>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import data from '@/public/movies.json'

const searchText = ref("")

const onSlideChange = () => {
    console.log('slide change');

};

function convertSeconds(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return `${hours}hr ${minutes}m `;
}

function searchMovies(keyword) {
    return data.filter(movie =>
        movie.title.toLowerCase().includes(keyword.toLowerCase())
    );
}

const searchTitle = ref()

watch(searchText, () => {
    searchTitle.value = searchMovies(searchText.value)
    console.log(searchTitle.value)
})

</script>

<template>
    <div class="h-screen flex border-gradient rounded-[40px]" style="width: calc(100% - 270px);">
        <div class="w-full h-screen bg-black rounded-l-[40px] p-6">
            <div class="w-full h-[47.43px] flex text-base text-[rgba(255,255,255,0.4)]">
                <div class="w-full h-full p-3 rounded-3xl border flex gap-[10px] border-[rgba(255,255,255,0.2)]">
                    <img src="/assets/Search.png" alt="" class="size-[23.43px]">
                    <input type="text" v-model="searchText" placeholder="Search movie" class="w-full">
                </div>
                <div class="flex justify-center items-center gap-[2px] w-[90px] h-full">
                    <img src="/assets/filter.png" alt="" class=" size-6">
                    <div>Filter</div>
                </div>
            </div>
            <div class="w-full overflow-auto rounded-3xl" v-if="searchText == ''" style="height: calc(100% - 47.43px);">

                <div class="w-full overflow-hidden mb-3">
                    <swiper :slides-per-view="5.19" free-mode :space-between="10" @swiper="onSwiper"
                        class="w-[83.75vw] h-[42.69vh] text-3xl text-white" @slideChange="onSlideChange">
                        <swiper-slide v-for="(item, index) in data" :key="index" class="rounded-3xl overflow-hidden">
                            <img :src="item.poster" alt="" class="w-full h-full object-cover">
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="w-full h-[165px] overflow-hidden mb-3">
                    <h2 class="text-base text-white mb-2">Recenly watch</h2>
                    <swiper :slides-per-view="6.8" free-mode :space-between="10" @swiper="onSwiper"
                        class="w-[83.75vw] h-[138px] text-3xl text-white" @slideChange="onSlideChange">
                        <swiper-slide v-for="(item, index) in data" :key="index"
                            class="rounded-[12px] overflow-hidden relative">
                            <img :src="item.poster" alt="" class="w-full h-full object-cover">
                            <div class="absolute bottom-2 opacity-60 px-2">
                                <h3 class="text-[12px]">Movie name</h3>
                                <h3 class="text-[10px]">{{ item.title }}</h3>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
                <h2 class=" font-bold text-[23px] text-white mb-3">New coming</h2>
                <div class="w-full overflow-hidden mb-3">
                    <swiper :slides-per-view="5.6" free-mode :space-between="10" @swiper="onSwiper"
                        class="w-full text-3xl text-white" @slideChange="onSlideChange">
                        <swiper-slide v-for="(item, index) in data" :key="index">
                            <img :src="item.poster" alt="" class="w-full h-[162px] rounded-xl mb-2 object-cover">
                            <div class="flex flex-col text-white text-base">
                                <h3>{{ item.title }}</h3>
                                <div v-if="item.rating % 2 == 0" class="flex">
                                    <img src="/assets/full-star.png" alt="" class="size-[13px]"
                                        v-for="n in item.rating / 2">
                                </div>
                                <div v-else class="flex">
                                    <img src="/assets/full-star.png" alt="" class="size-[13px]"
                                        v-for="n in (item.rating - 1) / 2">
                                    <img src="/assets/star-half.png" alt="" class="size-[13px]">
                                </div>
                                <div class="text-[8px] opacity-60">length : {{ convertSeconds(item.duration) }}</div>
                                <div class="flex items-center">
                                    <img src="/assets/volume.png" class="size-3 mr-1 object-cover" alt="">
                                    <h4 class="text-[10px] opacity-60">EN /TH</h4>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
                <h2 class=" font-bold text-[23px] text-white mb-3">Action</h2>
                <div class="h-[461px] overflow-hidden mb-3">
                    <swiper :slides-per-view="5.6" free-mode :space-between="10" @swiper="onSwiper"
                        class="w-[83.75vw] h-full text-3xl text-white" @slideChange="onSlideChange">
                        <swiper-slide v-for="(item, index) in data" :key="index"
                            class="rounded-[12px] overflow-hidden relative">
                            <img :src="item.poster" alt="" class="w-full h-full object-cover">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="w-full h-full" v-else>
                <h2 class=" font-bold text-[23px] text-white mb-3">"{{ searchText }}" search result</h2>
                <div class="w-full flex gap-3 flex-wrap">
                    <div class="w-[275px] h-[224px] mb-3" v-for="(item,index) in searchTitle" :key="index">
                        <img :src="item.poster" alt="" class="w-full h-[162px] rounded-xl mb-2 object-cover">
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
                                <img src="/assets/volume.png" class="size-3 mr-1 object-cover"  alt="">
                                <h4 class="text-[12px] opacity-60">EN /TH</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.border-gradient {
    box-shadow: 0 0 70px #ff6a00;
    position: relative;
}

.border-gradient::after {
    content: "";
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    padding: 3px;
    left: calc(50%);
    top: 50%;
    transform: translate(calc(-50%), -50%);
    z-index: -1;
    border-radius: 40px;
    position: absolute;
    background: linear-gradient(180deg, rgba(255, 183, 0, 1) 0%, rgba(157, 100, 0, 1) 100%);

}
</style>
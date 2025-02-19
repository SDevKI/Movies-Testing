<script setup>


</script>

<template>
    <div class="w-full h-screen border-gradient rounded-l-[40px]">
        <div class="w-full h-screen bg-black rounded-l-[40px] text-white p-6 flex flex-col gap-[10px]">
            <div class="flex items-center px-3">
                <img src="/assets/live.svg" class="size-6 mr-3" alt="">
                <h1 class="font-bold text-[23px] ">Live now</h1>
            </div>
            <div class="w-full h-auto flex flex-wrap gap-3">
                <div>
                    <div
                        class="w-[164px] h-[103px] flex justify-center items-center  border border-[rgba(255,255,255,0.4)] rounded-xl">
                        <img src="/assets/bbc.png" alt="">
                    </div>
                    <h2 class="text-base mt-3">BBC news</h2>
                </div>
                <div>
                    <div
                        class="w-[164px] h-[103px] flex justify-center items-center border border-[rgba(255,255,255,0.4)] rounded-xl">
                        <img src="/assets/3hd.png" alt="">
                    </div>
                    <h2 class="text-base mt-3">3 HD</h2>
                </div>
                <div>
                    <div
                        class="w-[164px] h-[103px] flex justify-center items-center border border-[rgba(255,255,255,0.4)] rounded-xl">
                        <img src="/assets/7hd.png" alt="">
                    </div>
                    <h2 class="text-base mt-3">7 HD</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.border-gradient {
    box-shadow: 0 0 70px #ff6a00;
    position: relative;
}

.border-gradient::after {
    content: "";
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    padding: 3px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    border-radius: 40px;
    position: absolute;
    background: linear-gradient(180deg, rgba(255, 183, 0, 1) 0%, rgba(157, 100, 0, 1) 100%);

}
</style>
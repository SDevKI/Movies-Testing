<template>
    <div class="md:h-screen h-[calc(100%-140px)] flex border-gradient rounded-[40px] md:w-[calc(100%-270px)] w-full">
        <div class="w-full h-full bg-black rounded-[40px] md:rounded-r-none text-white p-3 md:p-6">
            <slot>

            </slot>
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
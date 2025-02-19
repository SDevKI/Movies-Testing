<template>
    <div class=" w-full h-screen text-amber-100 flex justify-center items-center">
        <div class="w-[360px] bg-black rounded-[40px] border-gradient flex flex-col gap-[10px] p-6">
            <div class="w-full place-items-center"><img src="/assets/logo.png" class="w-[170px] h-16"></div>
            <div
                class="flex p-3 w-full h-12 border border-[rgba(255,255,255,0.2)] rounded-3xl text-2xl text-[rgba(255,255,255,0.4)] ">
                <div class="size-6 mr-[10px] ">
                    <img src="/assets/userIcon.png" alt="">
                </div>
                <input type="text" class="focus:text-white" v-model="username" placeholder="Username">
            </div>
            <div
                class="flex p-3 w-full h-12 border border-[rgba(255,255,255,0.2)] rounded-3xl text-2xl text-[rgba(255,255,255,0.4)] focus:text-white">
                <div class="size-6 mr-[10px] ">
                    <img src="/assets/userIcon.png" alt="">
                </div>
                <input :type="isShow ? 'text' : 'password'" class="w-full" v-model="password" placeholder="Password">
                <div class="size-6 flex items-center opacity-40 " @click="isShow = !isShow">
                    <img :src="isShow ? '_nuxt/assets/eye.png' : '_nuxt/assets/hidden.png'" alt="">
                </div>
            </div>
            <button
                class="w-full h-[43px] bg-[#9d6400] rounded-3xl p-3 text-center text-base cursor-pointer"
                @click="login"
                >Login</button>
        </div>
    </div>
</template>

<script setup>

const username = ref("");
const password = ref("");
const isShow = ref(false);
const router = useRouter();

function login() {
    if (username.value !== "" && password.value !== ""){
        router.push({path:'/home'})
    }
}

</script>

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
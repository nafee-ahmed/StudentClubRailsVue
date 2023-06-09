<template>
  <nav class="min-w-screen">
    <div
      class="flex justify-between items-center w-full py-3 px-smallSidePadding lg:px-bigSidePadding"
    >
      <!-- logo -->
      <a href="/clubs" class="flex items-center">
        <img :src="logoImgUrl" alt="" class="h-6 mr-2" />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap text-gray bg-gradient-to-r from-pink-600 to-primaryColor bg-clip-text text-transparent"
          >Clubs</span
        >
      </a>
      <!-- middle items -->
      <div className="hidden md:block bw-full"><moving-nav-bar /></div>
      <!-- logout icons -->
      <div class="cursor-pointer hover:animate-pulse" @click="authStore.logout">
        <io-md-log-out></io-md-log-out>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import logoImg from "../assets/clubLogo.png";
import MovingNavBar from "../components/MovingNavBar.vue";
import IoMdLogOut from "./icons/IoMdLogOut.vue";
import { useAuthStore } from "../stores/AuthStore";

export default {
  components: { MovingNavBar, IoMdLogOut, MovingNavBar },
  setup() {
    const logoImgUrl = ref(logoImg);
    const authStore = useAuthStore();
    return { logoImgUrl, authStore };
  },
};
</script>

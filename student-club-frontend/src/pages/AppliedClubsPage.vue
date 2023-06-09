<template>
  <div>
    <top-nav-bar />
    <div
      class="px-smallSidePadding md:p-mediumSidePadding lg:px-bigSidePadding mb-20"
    >
      <div v-if="clubs === null"><skeleton-list /></div>
      <clubs-list :clubs="clubs" v-else></clubs-list>
      <div className="text-center text-gray-400" v-if="length === 0">
        You have not applied to any clubs
      </div>
    </div>
    <div class="md:hidden fixed bottom-0 z-50 w-full">
      <moving-nav-bar />
    </div>
  </div>
</template>

<script>
import TopNavBar from "../components/TopNavBar.vue";
import MovingNavBar from "../components/MovingNavBar.vue";
import ClubsList from "../components/ClubsList.vue";
import { onMounted, ref } from "vue";
import { fetchWrapper } from "../helpers/fetchWrapper";
import { backendLink } from "../helpers/constants";
import SkeletonList from "../components/SkeletonList.vue";

export default {
  components: { TopNavBar, MovingNavBar, ClubsList, SkeletonList },
  setup() {
    const clubs = ref(null);
    const length = ref(null);

    onMounted(async () => {
      const data = await fetchWrapper.get(`${backendLink}/clubs/applied`);
      clubs.value = data.msg;
      length.value = data.msg.length;
    });

    return { clubs, length };
  },
};
</script>

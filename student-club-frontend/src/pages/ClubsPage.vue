<template>
  <div>
    <top-nav-bar />
    <div
      class="px-smallSidePadding md:p-mediumSidePadding lg:px-bigSidePadding mb-20"
    >
      <div v-if="clubs === null"><skeleton-list /></div>
      <clubs-list :clubs="clubs" v-else></clubs-list>
      <div className="text-center text-gray-400" v-if="length === 0">
        Populate the DB by going to /clubs/create
      </div>
    </div>
    <div class="md:hidden fixed bottom-0 z-50 w-full">
      <moving-nav-bar />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { backendLink } from "../helpers/constants";
import { fetchWrapper } from "../helpers/fetchWrapper";
import TopNavBar from "../components/TopNavBar.vue";
import MovingNavBar from "../components/MovingNavBar.vue";
import ClubsList from "../components/ClubsList.vue";
import SkeletonList from "../components/SkeletonList.vue";

export default {
  components: { TopNavBar, MovingNavBar, ClubsList, SkeletonList },
  setup() {
    const clubs = ref(null);
    const length = ref(null);
    onMounted(async () => {
      const data = await fetchWrapper.get(`${backendLink}/clubs`);
      clubs.value = data.msg;
      length.value = data.msg.length;
    });
    return { clubs, length };
  },
};
</script>

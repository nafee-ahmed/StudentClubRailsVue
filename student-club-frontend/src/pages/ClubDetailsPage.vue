<template>
  <div>
    <top-nav-bar />
    <div
      class="px-smallSidePadding md:p-mediumSidePadding lg:px-bigSidePadding mb-20"
    >
      <club-details :club="club" v-if="club !== null"></club-details>
      <div v-else><skeleton-list /></div>
    </div>
    <div class="md:hidden fixed bottom-0 z-50 w-full">
      <moving-nav-bar />
    </div>
  </div>
</template>

<script>
import ClubDetails from "../components/ClubDetails.vue";
import TopNavBar from "../components/TopNavBar.vue";
import MovingNavBar from "../components/MovingNavBar.vue";
import { onMounted, ref } from "vue";
import { fetchWrapper } from "../helpers/fetchWrapper";
import { backendLink } from "../helpers/constants";
import { useRoute } from "vue-router";
import SkeletonList from "../components/SkeletonList.vue";

export default {
  components: { ClubDetails, TopNavBar, MovingNavBar, SkeletonList },
  setup() {
    const club = ref(null);
    const { id } = useRoute().params;
    onMounted(async () => {
      const data = await fetchWrapper.get(`${backendLink}/clubs/${id}`);
      club.value = data.msg;
    });
    return {
      club,
    };
  },
};
</script>

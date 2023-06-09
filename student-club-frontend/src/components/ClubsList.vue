<template>
  <div className="flow-root">
    <ul role="list" className="divide-y divide-gray-200 mb-10 md:w-4/5 mx-auto">
      <li
        className="py-3 sm:py-4 cursor-pointer group"
        v-for="club in clubs"
        :key="club.id"
      >
        <club-item :club="club"></club-item>
      </li>
    </ul>
  </div>
</template>

<script>
import ClubItem from "./ClubItem.vue";
export default {
  components: { ClubItem },
  props: ["clubs"],
  setup() {},
};
</script>

<template>
  <div class="w-full flex">
    <div
      class="w-full bg-opacity-20 flex flex-col backdrop-blur-sm rounded drop-shadow-lg"
      v-for="item in studentNavItems"
      :key="item.text"
    >
      <a
        :href="item.link"
        class="group text-black px-2 md:px-3 py-2 flex flex-col justify-center md:flex-row items-center flex-1 cursor-pointer hover:text-primaryColor hover:rounded-md transition duration-500"
      >
        <component
          :is="item.icon"
          size="{20}"
          class="mb-1 md:mx-2 group-hover:animate-ping"
          :class="{ 'text-primaryColor': currentUrl === item.link }"
        />

        <span
          class="text-xs md:text-lg text-center whitespace-nowrap"
          :class="{ 'text-primaryColor': currentUrl === item.link }"
        >
          {{ item.text }}
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import IonIosList from "./icons/IonIosList.vue";
import FaRegularAddressBook from "./icons/FaRegularAddressBook.vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const currentUrl = route.path;

    const studentNavItems = [
      { text: "Job List", icon: IonIosList, link: "/clubs", path: null },
      {
        text: "Applied",
        icon: FaRegularAddressBook,
        link: "/clubs/applied",
        path: "applied",
      },
    ];
    return { studentNavItems, currentUrl };
  },
};
</script>

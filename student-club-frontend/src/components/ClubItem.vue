<template>
  <a :href="`/clubs/${club.id}`">
    <div className="flex items-center space-x-4 md:space-x-8 mt-8">
      <div className="flex-shrink-0 self-start">
        <img
          className="w-9 h-9 rounded-full mt-2"
          :src="jobImgUrl"
          alt="Neil image"
        />
      </div>
      <div className="flex-1 min-w-0 space-y-2">
        <p
          className=" text-sm whitespace-normal md:text-md font-medium text-gray-900 truncate group-hover:underline"
        >
          {{ club.title }}
        </p>
        <div
          className=" md:pt-2 text-gray-600 text-xs flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-4"
        >
          <div className="flex gap-1">
            <fa-6-regular-user></fa-6-regular-user> {{ club.pastActiveMembers }}
          </div>
          <div className="flex gap-1">By {{ club.contactName }}</div>
          <div className="flex gap-1">
            <phone-icon></phone-icon>{{ club.contact }}
          </div>
        </div>
      </div>
      <div
        className="inline-flex self-start md:items-center text-lg font-semibold text-gray-900"
      >
        ${{ club.fee }}
      </div>
    </div>
  </a>
</template>

<script>
import { ref } from "vue";
import job from "../assets/job.png";
import Fa6RegularUser from "./icons/Fa6RegularUser.vue";
import PhoneIcon from "./icons/MdiPhone.vue";

export default {
  components: { Fa6RegularUser, PhoneIcon },
  props: ["club"],
  setup() {
    const jobImgUrl = ref(job);
    return { jobImgUrl };
  },
};
</script>

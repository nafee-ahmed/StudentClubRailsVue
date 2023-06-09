<template>
  <div class="lg:w-4/5 lg:mx-auto">
    <div class="grid grid-cols-10 grid-flow-row w-full mx-auto gap-4">
      <div class="col-span-10 md:col-span-5">
        <img
          class="rounded-md mt-2 max-w-full max-h-80 object-contain"
          :src="detailsImgUrl"
          alt="job details"
        />
      </div>
      <div
        class="flex flex-col gap-1 bg-[#F8F8F8] col-span-10 md:col-span-5 p-4 rounded-lg"
      >
        <span class="text-md text-[#773903]">
          Posted by {{ club.contactName }}
        </span>
        <h1 class="text-2xl font-bold">{{ club.title }}</h1>
        <span class="font-light leading-relaxed tracking-wider text-[#707070]">
          {{ club.about }}
        </span>
        <div class="mt-auto flex justify-between">
          <span class="text-xl font-bold text-[#FF5D15]">${{ club.fee }}</span>
          <span class="text-lg font-bold">{{ club.contact }}</span>
        </div>
      </div>
    </div>
    <div class="flex justify-end mt-2">
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 disabled:bg-gray-400 disabled:text-gray-500"
        :disabled="club.applied"
        @click="applyHandler"
      >
        <template v-if="loading"><spinner></spinner></template>
        <template v-else>
          <fa-briefcase :color="club.applied ? 'gray' : 'white'"></fa-briefcase>
          <span class="pl-2">{{ club.applied ? "Applied" : "Apply" }}</span>
        </template>
      </button>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        @click="goBack"
      >
        <fa-solid-arrow-left></fa-solid-arrow-left>
        <span class="pl-2">Back</span>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import clubDetailsImg from "../assets/clubDetails.png";
import FaSolidArrowLeft from "./icons/FaSolidArrowLeft.vue";
import FaBriefcase from "./icons/FaBriefcase.vue";
import { useRoute, useRouter } from "vue-router";
import Spinner from "./Spinner.vue";
import { fetchWrapper } from "../helpers/fetchWrapper";
import { backendLink } from "../helpers/constants";

export default {
  props: ["club"],
  components: { FaSolidArrowLeft, FaBriefcase, Spinner },
  setup(props) {
    const detailsImgUrl = ref(clubDetailsImg);
    const router = useRouter();
    const { id } = useRoute().params;
    const loading = ref(false);

    const goBack = () => router.go(-1);
    const applyHandler = async () => {
      loading.value = true;
      await fetchWrapper.patch(`${backendLink}/clubs/${id}`);
      props.club.applied = true;
      loading.value = false;
    };

    return { detailsImgUrl, goBack, loading, applyHandler };
  },
};
</script>

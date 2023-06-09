<template>
  <div className="flex items-center justify-center h-screen">
    <button
      @click="populateHandler"
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none "
    >
      Populate DB
    </button>

    <h1 v-if="loading === false">Done!</h1>
  </div>
</template>

<script>
import { ref } from "vue";
import { fetchWrapper } from "../helpers/fetchWrapper";
import { backendLink } from "../helpers/constants";
export default {
  setup() {
    const loading = ref(null);
    const populateHandler = async () => {
      loading.value = true;
      await fetchWrapper.post(`${backendLink}/clubs`);
      loading.value = false;
    };
    return { populateHandler, loading };
  },
};
</script>

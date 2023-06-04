<template>
  <h1>{{ loadedData }}</h1>
</template>

<script>
import { onMounted, ref } from "vue";
import { ax, backendLink } from "../helpers/constants";
import { fetchWrapper } from "../helpers/fetchWrapper";
import { useAuthStore } from "../stores/AuthStore";
export default {
  setup() {
    const loadedData = ref(null);
    const authStore = useAuthStore();
    onMounted(async () => {
      //   try {
      //     const res = await ax.post("/users/test");
      //     console.log("clubs list");
      //     console.log(res);

      //     loadedData.value = JSON.stringify(res.data.msg);
      //   } catch (error) {
      //     console.log(error);
      //     loadedData.value = "log in";
      //   }

      const data = await fetchWrapper.get(`${backendLink}/users/test`);
      loadedData.value = JSON.stringify(data.msg);
    });
    return { loadedData };
  },
};
</script>

import { defineStore } from "pinia";
import { backendLink } from "../helpers/constants";
import axios from "axios";
import { router } from "../helpers/routes";
import { fetchWrapper } from "../helpers/fetchWrapper";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    token: JSON.parse(localStorage.getItem("token")),
    loading: false,
    error: null,
  }),
  actions: {
    async signup(obj) {
      try {
        this.loading = true;
        const data = await fetchWrapper.post(`${backendLink}/users`, obj);
        this.token = data.token;
        localStorage.setItem("token", JSON.stringify(data.token));
        console.log("goind to clubs");
        router.push("/clubs");
        this.loading = false;
      } catch (err) {
        const errorMessage = JSON.parse(err.message);
        console.log(errorMessage.msg[0]);
        this.error = errorMessage.msg[0];
      }
    },
    logout() {
      this.token = null;
      localStorage.removeItem("token");
      router.push("/login");
    },
  },
});

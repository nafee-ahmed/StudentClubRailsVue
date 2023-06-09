import { defineStore } from "pinia";
import { backendLink } from "../helpers/constants";
import { router } from "../helpers/routes";
import { fetchWrapper } from "../helpers/fetchWrapper";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    token: JSON.parse(localStorage.getItem("token")),
    loading: false,
    error: null,
  }),
  actions: {
    async login(obj) {
      try {
        this.loading = true;
        const data = await fetchWrapper.post(`${backendLink}/auth/login`, obj);
        this.token = data.token;
        localStorage.setItem("token", JSON.stringify(data.token));
        router.push("/clubs");
      } catch (err) {
        const errorMessage = JSON.parse(err.message);
        this.error = errorMessage.msg;
      }
      this.loading = false;
    },
    async signup(obj) {
      try {
        this.loading = true;
        const data = await fetchWrapper.post(`${backendLink}/users`, obj);
        this.token = data.token;
        localStorage.setItem("token", JSON.stringify(data.token));
        router.push("/clubs");
      } catch (err) {
        const errorMessage = JSON.parse(err.message);
        this.error = errorMessage.msg[0];
      }
      this.loading = false;
    },
    logout() {
      this.token = null;
      localStorage.removeItem("token");
      router.push("/login");
    },
  },
});

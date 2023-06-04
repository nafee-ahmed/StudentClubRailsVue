import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import SignupPage from "../pages/SignupPage.vue";
import ClubsPage from "../pages/ClubsPage.vue";
import { useAuthStore } from "../stores/AuthStore";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: LoginPage },
    { path: "/signup", component: SignupPage },
    { path: "/clubs", component: ClubsPage },
  ],
});

router.beforeEach(async (to) => {
  const publicPages = ["/login", "/signup"];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();
  if (authRequired && !authStore.token) {
    return "/login";
  }
});

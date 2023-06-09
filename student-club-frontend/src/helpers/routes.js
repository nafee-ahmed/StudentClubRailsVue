import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import SignupPage from "../pages/SignupPage.vue";
import ClubsPage from "../pages/ClubsPage.vue";
import { useAuthStore } from "../stores/AuthStore";
import AppliedClubsPage from "../pages/AppliedClubsPage.vue";
import PopulatePage from "../pages/PopulatePage.vue";
import ClubDetailsPage from "../pages/ClubDetailsPage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: LoginPage },
    { path: "/signup", component: SignupPage },
    { path: "/clubs", component: ClubsPage },
    { path: "/clubs/applied", component: AppliedClubsPage },
    { path: "/clubs/create", component: PopulatePage },
    { path: "/clubs/:id", component: ClubDetailsPage },
  ],
});

router.beforeEach(async (to) => {
  const publicPages = ["/login", "/signup", "/clubs/create"];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();
  if (authRequired && !authStore.token) {
    return "/login";
  }
});

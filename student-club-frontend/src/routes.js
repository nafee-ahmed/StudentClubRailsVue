import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import SignupPage from "./pages/SignupPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: LoginPage },
    { path: "/signup", component: SignupPage },
  ],
});

export default router;

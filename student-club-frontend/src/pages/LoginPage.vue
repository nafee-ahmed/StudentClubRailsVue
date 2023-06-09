<template>
  <div class="h-screen flex justify-start items-center">
    <!-- image -->
    <div class="hidden h-full md:block md:flex-grow-3 lg:flex-grow-5">
      <img :src="loginImgUrl" alt="" class="h-full w-full object-cover" />
    </div>
    <!-- form -->
    <div class="w-full mx-8 gap-8 flex flex-col items-start">
      <img :src="logoImgurl" alt="" class="w-20 animate-bounce" />
      <form @submit.prevent="handleLogin" class="flex flex-col w-full gap-3">
        <h1 class="text-2xl font-bold">Welcome back!</h1>
        <p class="font-light text-gray-400">Connecting students and clubs...</p>
        <!-- email field -->
        <div>
          <input-field
            label-text="Email"
            id="email"
            placeholder="john@gmail.com"
            type="email"
            is-required="{{true}}"
            v-model="email"
          />
        </div>
        <!-- password field -->
        <div>
          <input-field
            label-text="Password"
            id="password"
            placeholder="******"
            type="password"
            is-required="{{true}}"
            v-model="password"
          />
          <p class="text-red-500 text-xs italic" v-if="authStore !== null">
            {{ authStore.error }}
          </p>
        </div>
        <p class="text-sm font-light text-gray-500">
          Don't have an account yet?
          <a
            class="font-medium text-primaryColor hover:underline"
            href="/signup"
            >Sign up</a
          >
        </p>
        <!-- submit button -->
        <div class="my-2">
          <auth-button text="Login" :is-disabled="authStore.loading"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import loginImg from "../assets/signIn.png";
import logoImg from "../assets/clubLogo.png";
import InputField from "../components/InputField.vue";
import AuthButton from "../components/AuthButton.vue";
import { useAuthStore } from "../stores/AuthStore";

export default {
  components: { InputField, AuthButton },

  setup() {
    const loginImgUrl = ref(loginImg);
    const logoImgurl = ref(logoImg);
    const authStore = useAuthStore();
    const email = ref("");
    const password = ref("");

    const handleLogin = async () => {
      await authStore.login({
        password: password.value,
        email: email.value,
      });
    };
    return { loginImgUrl, logoImgurl, handleLogin, email, password, authStore };
  },
};
</script>

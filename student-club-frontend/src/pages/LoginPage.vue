<template>
  <div class="h-screen flex justify-start items-center">
    <!-- image -->
    <div class="hidden h-full md:block md:flex-grow-3 lg:flex-grow-5">
      <img :src="loginImgUrl" alt="" class="h-full w-full object-cover" />
    </div>
    <!-- form -->
    <div class="w-full mx-8 gap-8 flex flex-col items-start">
      <img :src="logoImgurl" alt="" class="w-20 animate-bounce" />
      <form action="" class="flex flex-col w-full gap-3">
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
          />
        </div>
        <p class="">Don't have an account yet? <a href="">Sign up</a></p>
        <!-- submit button -->
        <div class="my-2">
          <auth-button text="Login" />
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

export default {
  components: { InputField, AuthButton },
  setup() {
    const loginImgUrl = ref(loginImg);
    const logoImgurl = ref(logoImg);
    return { loginImgUrl, logoImgurl };
  },
};
</script>

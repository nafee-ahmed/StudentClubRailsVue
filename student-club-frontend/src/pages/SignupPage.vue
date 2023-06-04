<template>
  <div class="h-screen flex justify-start items-center">
    <!-- form div -->
    <div class="w-full mx-8 gap-8 flex flex-col items-start">
      <img :src="logoImgUrl" alt="" class="w-20" />
      <form class="flex flex-col w-full gap-3" @submit.prevent="handleSignup">
        <h1 class="text-2xl font-bold">Welcome to Students Club!</h1>
        <p class="font-light text-gray-400">
          Join out community that has more than 10000 student clubs to join...
        </p>
        <!-- email field -->
        <div>
          <input-field
            label-text="Email"
            id="email"
            placeholder="john@gmail.com"
            type="text"
            :is-required="false"
            v-model="inputState.email"
          />
          <p v-if="v$.email.$error" class="text-red-500 text-xs italic">
            {{ v$.email.$errors[0].$message }}
          </p>
        </div>
        <!-- name field -->
        <div>
          <input-field
            label-text="Full Name"
            id="name"
            placeholder="John Doe"
            type="text"
            :is-required="false"
            v-model="inputState.name"
          />
          <p v-if="v$.name.$error" class="text-red-500 text-xs italic">
            Name is required
          </p>
        </div>
        <!-- password field -->
        <div>
          <input-field
            label-text="Password"
            id="password"
            placeholder="******"
            type="password"
            :is-required="false"
            v-model="inputState.password"
          />
          <p v-if="v$.password.$error" class="text-red-500 text-xs italic">
            {{ v$.password.$errors[0].$message }}
          </p>
        </div>
        <!-- password confirmation field -->
        <div>
          <input-field
            label-text="Confirm Password"
            id="confirmPassword"
            placeholder="******"
            type="password"
            :is-required="false"
            v-model="inputState.confirmPassword"
          />
          <p
            v-if="v$.confirmPassword.$error"
            class="text-red-500 text-xs italic"
          >
            {{ v$.confirmPassword.$errors[0].$message }}
          </p>
          <p class="text-red-500 text-xs italic" v-if="authStore !== null">
            {{ authStore.error }}
          </p>
        </div>
        <p class="text-sm font-light text-gray-500">
          Already have an account?
          <a class="font-medium text-primaryColor hover:underline" href=""
            >Login</a
          >
        </p>
        <div class="my-2">
          <auth-button text="Sign Up" />
        </div>
      </form>
    </div>
    <!-- image div -->
    <div class="hidden md:block h-full md:flex-grow-3 lg:flex-grow-5">
      <img
        :src="signupImgUrl"
        alt="Sign Up"
        class="h-full w-full object-cover"
      />
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import signupImg from "../assets/signUp.png";
import logoImg from "../assets/clubLogo.png";
import InputField from "../components/InputField.vue";
import AuthButton from "../components/AuthButton.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, sameAs, minLength } from "@vuelidate/validators";
import { useAuthStore } from "../stores/AuthStore";

export default {
  components: { InputField, AuthButton },
  setup() {
    const signupImgUrl = ref(signupImg);
    const logoImgUrl = ref(logoImg);
    const inputState = reactive({
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    });

    const rules = computed(() => {
      return {
        email: { required, email },
        name: { required },
        password: { required, minLength: minLength(6) },
        confirmPassword: { required, sameAs: sameAs(inputState.password) },
      };
    });
    const v$ = useVuelidate(rules, inputState);
    const authStore = useAuthStore();

    const handleSignup = async () => {
      const isFormCorrect = await v$.value.$validate();
      if (!isFormCorrect) return;
      await authStore.signup({
        name: inputState.name,
        password: inputState.password,
        email: inputState.email,
        password_confirmation: inputState.confirmPassword,
      });
    };

    return {
      signupImgUrl,
      logoImgUrl,
      handleSignup,
      inputState,
      v$,
      handleSignup,
      authStore,
    };
  },
};
</script>

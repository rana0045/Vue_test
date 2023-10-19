<template>
  <form @submit.prevent="login" class="w-full max-w-md mx-auto mt-10 p-4 sm:p-6 md:p-8 lg:p-10">
    <div class="relative w-full">
      <input
        v-model="username"
        id="username"
        type="text"
        class="w-full py-2 px-3 rounded-full text-gray-700 placeholder-gray-400 text-lg sm:text-xl border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Username"
        required
      />
     
    </div>
    <div class="mb-6 relative mt-5">
      <input
        v-model="password"
        id="password"
        type="password"
        class="w-full py-2 px-3 rounded-full text-gray-700 placeholder-gray-400 text-lg sm:text-xl border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Password"
        required
      />
      <div
        class="absolute inset-y-0 right-4 flex items-center cursor-pointer text-gray-400"
        @click="togglePasswordVisibility"
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
      </div>
    </div>
    
    <div class="text-center">
      <button type="submit" class="px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring focus:ring-blue-300 text-base sm:text-base md:text-lg lg:text-xl font-semibold shadow-md transform transition-transform hover:scale-105 hover:duration-300">Login</button>
    </div>
  </form>
</template>
  
<script>
import { login } from "@/mock-auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const username = ref("");
    const password = ref("");
    const showPassword = ref(false); // Add this data property

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    const loginToApp = () => {
      if (login(username.value, password.value)) {
        router.push("/tasklist");
        localStorage.setItem("token", "token");
      } else {
        alert("Invalid username or password");
      }
    };

    return { username, password, login: loginToApp, showPassword, togglePasswordVisibility }; // Include showPassword and togglePasswordVisibility
  },
};
</script>

  
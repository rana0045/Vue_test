<template>
    <form @submit.prevent="login" class="w-full max-w-md mx-auto mt-10">
      <div class="mb-4">
        <label for="username" class="block text-gray-700 text-sm font-semibold mb-2">Username:</label>
        <input v-model="username" id="username" type="text" class="w-full px-3 py-2 border rounded-lg" required />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-gray-700 text-sm font-semibold mb-2">Password:</label>
        <input v-model="password" id="password" type="password" class="w-full px-3 py-2 border rounded-lg" required />
      </div>
      <div class="text-center">
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">Login</button>
      </div>
    </form>
  </template>
  
  <script>
  import { login } from "@/mock-auth"; // Adjust the path as needed
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  export default {
    setup() {
        const router = useRouter();
      const username = ref("");
      const password = ref("");
  
       
      const loginToApp = () => {
        if (login(username.value, password.value)) {
            
            router.push("/tasklist");
            localStorage.setItem("token" ,"token")
        } else {
          // Authentication failed; show an error message
          alert("Invalid username or password");
        }
      };
  
      return { username, password, login: loginToApp };
    },
  };
  </script>
  
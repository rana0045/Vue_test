<template>
  <nav class="bg-blue-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div>
        <router-link
          to="/tasklist"
          class="nav-link"
        >
          Home
        </router-link>
        <router-link
          to="/about"
          class="nav-link"
        >
          About Us
        </router-link>
        <router-link
          to="/DevTool"
          class="nav-link"
        >
          DevTool
        </router-link>
      </div>
      <button @click="logout" class="text-white font-bold transition-transform transform hover:scale-110 hover:text-blue-100">
        Logout
      </button>
    </div>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
.nav-link {
  color: white;
  text-decoration: none;
  margin-right: 10px;
  padding-bottom: 3px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
}

.nav-link:hover {
  border-color: white;
}

.nav-link.router-link-active {
  border-color: white;
}
</style>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
 

    const logout = () => {
     
      localStorage.removeItem("token");
      router.push({ path: "/" });
    };

    return { logout };
  },
};
</script>

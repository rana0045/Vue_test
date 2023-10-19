<template>
  <nav class="bg-blue-500 p-4">
    <div class="container mx-auto flex justify-start items-center">
      <router-link
        to="/tasklist"
        class="text-white font-bold mr-10 transition-transform transform hover:scale-110 hover:text-blue-700"
      >
        Home
      </router-link>
      <router-link
        to="/about"
        class="text-white mr-10 transition-transform transform hover:scale-110 hover:text-blue-700"
      >
        About Us
      </router-link>
      <router-link
        to="/DevTool"
        class="text-white transition-transform transform hover:scale-110 hover:text-blue-700"
      >
        DevTool
      </router-link>
    </div>
  </nav>
  <router-view></router-view>
</template>


<script setup>
import { RouterLink } from 'vue-router'
</script>

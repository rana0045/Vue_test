<template>
  <nav class="bg-blue-500 p-4  ">
    <div class="container mx-auto flex justify-start items-center">
      <router-link to="/tasklist" class="text-white font-bold mr-10">Home</router-link>
      <router-link to="/about" class="text-white mr-10">About Us</router-link>
      <router-link to="/DevTool" class="text-white"> DevTool</router-link>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

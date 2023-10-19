<template>
  <div class="flex flex-col justify-center mt-10 mx-4 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-96">
    <h1 class="text-black uppercase font-bold   sm:text-3xl md:text-4xl     2xl:text-7xl mb-4 sm:mb-6 md:mb-8 lg:mb-10">About Vue.js</h1>

    <p class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
      Vue.js is a progressive JavaScript framework for building user interfaces. My favorite Vue.js feature is its two-way data binding and reactivity system.
    </p>

    <p class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-4">
      Benefits of Vue.js:
    </p>

    <ul class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-2 list-disc list-inside">
      <li>Easy and flexible data binding.</li>
      <li>Component-based architecture for building scalable applications.</li>
      <li>Virtual DOM for efficient updates and performance.</li>
      <li>Simple and clean syntax.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

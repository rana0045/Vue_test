<template>
  <div class="flex flex-col justify-center mt-10 mx-4 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-96">
    <h1 class="text-black uppercase font-bold sm:text-3xl md:text-4xl 2xl:text-7xl mb-4 sm:mb-6 md:mb-8 lg:mb-10">About Vue.js</h1>

    <p class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
      Vue.js is a progressive JavaScript framework for building user interfaces. My favorite Vue.js feature is its two-way data binding and reactivity system.
    </p>

    <p class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-4">
      Benefits of Vue.js:
    </p>

    <ul class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-2">
      <li v-for="(benefit, index) in benefits" :key="index">
        <button @click="toggleAccordion(index)" class=" mb-2 mt-2 w-full text-left py-2 px-4 bg-gray-100 rounded-md flex items-center justify-between focus:outline-none">
          <span class="mr-2">{{ benefit.title }}</span>
          <i :class="['fas', benefit.open ? 'fa-chevron-up' : 'fa-chevron-down', 'text-lg']"></i>
        </button>
        <div v-if="benefit.open" class="bg-gray-200 p-4   rounded-b-md">
          {{ benefit.description }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      benefits: [
        { title: "Easy and flexible data binding.", description: "Vue.js provides two-way data binding for efficient handling of data.", open: false },
        { title: "Component-based architecture for building scalable applications.", description: "Vue.js allows you to build applications by composing components.", open: false },
        { title: "Virtual DOM for efficient updates and performance.", description: "Vue.js uses a virtual DOM for optimized rendering and updates.", open: false },
        { title: "Simple and clean syntax.", description: "Vue.js has a straightforward and clean syntax that's easy to learn.", open: false },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.benefits[index].open = !this.benefits[index].open;
    },
  },
};
</script>

<style>
.fa-chevron-up:before {
  content: '\f077'; /* FontAwesome up arrow icon */
}

.fa-chevron-down:before {
  content: '\f078'; /* FontAwesome down arrow icon */
}
</style>

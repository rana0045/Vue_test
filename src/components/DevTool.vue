<template>
  <div class="flex justify-center flex-col mx-4 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-52 mt-10 sm:mt-20 lg:mt-10">
    <h1 class="text-black uppercase font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-4 sm:mb-6 md:mb-8 lg:mb-10">About Vue Devtools</h1>

    <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
      Vue Devtools is a crucial tool for Vue.js development that enhances the development process by providing real-time inspection, debugging, and profiling capabilities. It allows developers to understand, debug, and optimize their Vue.js applications more efficiently.
      <br /> Below is an explanation of the importance of Vue Devtools, along with a step-by-step guide on how to install and use Vue Devtools for debugging and inspecting Vue components.
    </p>

    <ul class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 space-y-4">
      <li v-for="(step, index) in steps" :key="index" class="relative">
        <button @click="toggleAccordion(index)" class="w-full text-left py-2 px-4 bg-gray-100 rounded-md flex items-center justify-between focus:outline-none">
          <span class="mr-2">{{ step.title }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" :class="step.open ? 'transform rotate-180' : ''">
            <path fill="#000000" d="M8.5 10.3l2.1-2.1 1.4 1.4-4 4-4-4 1.4-1.4 2.1 2.1v-7.6h1v7.6z"/>
          </svg>
        </button>
        <div v-if="step.open" class="bg-gray-200 p-4 mt-2 rounded-b-md">
          {{ step.content }}
        </div>
      </li>
    </ul>

    <h1 class="text-black uppercase font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mt-6 sm:mt-10 md:mt-12 lg:mt-14">How to install Vue Devtools</h1>

    <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-10">
      You can install Vue Devtools as a browser extension for Chrome and Firefox.
    </p>
  </div>
</template>

<script>
export default {
  name: "DevTool",
  data() {
    return {
      steps: [
        {
          title: "Real-Time Debugging",
          content: "Vue Devtools provides a real-time debugging environment for Vue.js applications. Developers can inspect and modify component states, props, and data as the application runs, which is invaluable for identifying and fixing issues.",
          open: false,
        },
        {
          title: "Component Hierarchy",
          content: "Vue Devtools displays the component hierarchy, making it easy to visualize the structure of your application and how components are nested. This helps in understanding the application's architecture.",
          open: false,
        },
        {
          title: "Event Monitoring",
          content: "Developers can monitor and trigger events in the application, making it easier to test and debug event-driven behavior. This is especially helpful in complex applications with many components.",
          open: false,
        },
        {
          title: "Time-Travel Debugging",
          content: "For applications using Vuex, Vue Devtools allows time-travel debugging. Developers can step backward and forward through state changes, making it easier to pinpoint the cause of issues.",
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.steps.forEach((step, i) => {
        if (i === index) {
          step.open = !step.open;
        } else {
          step.open = false;
        }
      });
    },
  },
};
</script>

<template>
    <ul class="mt-10 w-full max-w-screen-md mx-auto">
      <li v-for="task in tasks" :key="task.id" class="mb-4 p-4 bg-white rounded shadow-md">
        <div class="flex items-center justify-between">
          <div class="flex-grow">
            <span :class="{'font-semibold': task.completed, 'line-through': task.completed}">{{ task.title }}</span>

          </div>
          <div class="ml-4">
            <button @click="toggleCompletion(task)" class="px-3 py-1 bg-blue-500 text-white rounded">
Change status
            </button>
          </div>
        </div>
        <div :class="{'text-green-600': task.completed, 'text-red-600': !task.completed}">
          {{ task.completed ? 'Completed' : 'Incomplete' }}
        </div>
      </li>
    </ul>
  </template>
  
  
  <script>
  export default {
    name: "TaskList",
    props: {
      tasks: {
        type: Array,
        required: true,
      },
    },
    methods: {
      toggleCompletion(task) {
        task.completed = !task.completed; // Toggle the status of the task
      },
    },
  };
  </script>
  
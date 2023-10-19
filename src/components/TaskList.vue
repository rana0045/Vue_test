<template>
    <ul class="mt-10 w-full max-w-screen-md mx-auto">
      <li v-for="task in tasks" :key="task.id" class="mb-4 p-4 bg-white rounded shadow-md">
        <div class="flex items-center justify-between">
          <div class="flex-grow">
            <span :class="{'font-semibold': task.completed, 'line-through': task.completed}">{{ task.title }}</span>

          </div>
          <div class="ml-4">
            <button @click="toggleCompletion(task)" class="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring focus:ring-blue-300 text-base sm:text-base md:text-lg lg:text-xl font-semibold shadow-md transform transition-transform hover:scale-105 hover:duration-300">
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
  import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
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
        task.completed = !task.completed;
        toast("status is change!",{
      autoClose:1000,
      position: toast.POSITION.TOP_CENTER,
      type: "info"  
    })
         // Toggle the status of the task
      },
    },
  };
  </script>
  
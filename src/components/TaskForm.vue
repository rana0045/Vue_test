<template>
  <div class="mt-10 w-full max-w-screen-md mx-auto">
    <form @submit.prevent="addTask" class="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
      <div class="mb-4">
        <input
          v-model="newTask.title"
          id="title"
          type="text"
          class="w-full py-2 px-3 rounded-full text-gray-700 placeholder-gray-400 text-lg sm:text-xl border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Add Task"
          required
        />
      </div>
      <div class="mb-4">
        <label for="status" class="block font-semibold text-base sm:text-lg md:text-l lg:text-l">Completion Status:</label>
        <input type="checkbox" id="status" v-model="newTask.status" class="mr-2" />
      </div>
      <button type="submit" class="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring focus:ring-blue-300 text-base sm:text-base md:text-lg lg:text-xl font-semibold shadow-md transform transition-transform hover:scale-105 hover:duration-300">Add Task</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
  data() {
    return {
      newTask: {
        title: "",
        status: false,
      },
    };
  },
  methods: {
    addTask() {
      const payload = {
        title: this.newTask.title,
        completed: this.newTask.status,
      };

      axios.post('https://jsonplaceholder.typicode.com/todos', payload)
        .then(response => {
          console.log('Task added:', response.data);

          toast("Task Added",{
      autoClose:1000,
      position: toast.POSITION.TOP_CENTER,
      type:"success"  
    })
          // You can handle the response here, such as emitting an event or updating the UI.
        })
        .catch(error => {
          console.error('Error adding task:', error);
          // Handle the error as needed.
        });

      // Reset the form
      this.newTask.title = "";
      this.newTask.status = false;
    },
  },
};
</script>

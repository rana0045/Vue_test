<template>
  <div class="mt-10 w-full max-w-screen-md mx-auto">
    <form @submit.prevent="addTask" class="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold mb-4 text-blue-700">Add a Task</h2>
      <div class="mb-4">
        
        <input
          v-model="newTask.title"
          id="title"
          type="text"
          class="w-full py-2 px-3 rounded-md text-gray-700 placeholder-gray-400 text-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter Task Title"
          required
        />
      </div>
      <div class="mb-4">
         <div class="flex items-center">
          <input type="checkbox" id="status" v-model="newTask.status" class="mr-2 text-blue-500" />
          <label for="status" class="text-sm text-gray-700">Completed</label>
        </div>
      </div>
      <button type="submit" class="w-full py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring focus:ring-blue-300 text-lg font-semibold transform transition-transform hover:scale-105 hover:duration-300">Add Task</button>
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

          toast("Task Added", {
            autoClose: 1000,
            position: toast.POSITION.TOP_CENTER,
            type: "success"
          })
        })
        .catch(error => {
          console.error('Error adding task:', error);
        });

      this.newTask.title = "";
      this.newTask.status = false;
    },
  },
};
</script>

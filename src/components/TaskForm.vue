<template>
    <div class="mt-10 w-full max-w-screen-md mx-auto">
     
      <form @submit.prevent="addTask">
        <div class="mb-4">
          <label for="title" class="block font-semibold">Task Title:</label>
          <input type="text" id="title" v-model="newTask.title" required class="p-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="status" class="block font-semibold">Completion Status:</label>
          <input type="checkbox" id="status" v-model="newTask.status" class="mr-2" />
        </div>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Add Task</button>
      </form>
    </div>
  </template>
  
  <script>
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
      
        this.$emit("add-task", this.newTask);
  
       
        this.newTask = {
          title: "",
          status: false,
        };
      },
    },
  };
  </script>
  
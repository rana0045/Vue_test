<template>
  <div class="mt-10 w-full max-w-screen-md mx-auto">
    <form @submit.prevent="addTask" class="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
      <div class="mb-4">
        <label for="title" class="block font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">Task Title:</label>
        <input type="text" id="title" v-model="newTask.title" required class="p-2 sm:p-3 md:p-4 lg:p-5 border rounded w-full" />
      </div>
      <div class="mb-4">
        <label for="status" class="block font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">Completion Status:</label>
        <input type="checkbox" id="status" v-model="newTask.status" class="mr-2" />
      </div>
      <button type="submit" class="px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-blue-500 text-white rounded text-base sm:text-lg md:text-xl lg:text-2xl">Add Task</button>
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

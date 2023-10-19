<template>
  <div>
    <TaskForm/>
    <TaskList :tasks="tasks" />
  </div>
</template>

<script>
import TaskList from "@/components/TaskList.vue";
import TaskForm from "../components/TaskForm.vue";
  
import axios from "axios";  

export default {
  components: {
    TaskList,
    TaskForm
  },
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        console.log(response.data);
        
        this.tasks = response.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
};
</script>

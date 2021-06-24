<template>
  <div class="about">
    <h1>This is an about page</h1>
    <TodoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "@/components/TodoList.vue";

export default defineComponent({
  name: "About",
  components: {
    TodoList,
  },
});
</script>

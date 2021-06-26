<template>
  <div class="about max-w-screen-lg flex flex-col justify-center mx-10">
    <h1>This is an about page</h1>
    <div><InputBox /></div>
    <div><TodoList /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "@/components/TodoList.vue";
import InputBox from "@/components/InputBox.vue";

export default defineComponent({
  name: "About",
  components: {
    TodoList,
    InputBox,
  },
});
</script>

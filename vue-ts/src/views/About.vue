<template>
  <div class="about">
    <h1>This is an about page</h1>
    <List></List>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import List from "@/components/List.vue";

@Options({
  components: {
    List,
  },
})
export default class About extends Vue {}
</script>

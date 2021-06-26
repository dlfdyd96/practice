<template>
  <div class="flex column">
    <input
      type="text"
      class="
        shadow
        appearance-none
        border
        rounded
        w-full
        py-2
        px-3
        mr-1
        text-gray-700
        leading-tight
        focus:outline-none focus:shadow-outline
      "
      v-model="inputValue"
      @keyup.enter="submit"
    />
    <button
      class="
        bg-white
        hover:bg-gray-100
        text-gray-800
        font-semibold
        py-2
        px-4
        border border-gray-400
        rounded
        shadow
      "
      @click="submit"
    >
      <i class="fas fa-plus"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const inputValue = ref("");
    const { state, commit } = useStore();

    const submit = () => {
      console.log(`눌럿다`);
      commit("addItem", { inputValue: inputValue.value });
      inputValue.value = "";
    };

    return { inputValue, submit };
  },
});
</script>

<style></style>

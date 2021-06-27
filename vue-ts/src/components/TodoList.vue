<template>
  <div>
    <ul>
      <div v-for="item in itemList" v-bind:key="item.id">
        <li
          class="
            flex
            row
            items-center
            justify-between
            w-full
            py-1
            px-4
            my-1
            rounded
            border
            bg-gray-100
            text-gray-600
          "
        >
          <div class="items-center column">
            <input
              type="checkbox"
              class="mx-1"
              :checked="item.status"
              @click="changeStatus({ item })"
            />
            <span :class="{ 'line-through': item.status === true }">{{
              item.content
            }}</span>
          </div>
          <div class="item-center row-reverse">
            <span class="px-4 py-2 float-right">
              <i class="fas fa-times" @click="removeItem({ id: item.id })"></i>
            </span>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { ItemList } from "@/store/interfaces/item-list.interface";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
// import ListItemVue from "./ListItem.vue";

export default defineComponent({
  // components: { ListItemVue },
  name: "TodoList",
  setup() {
    const { state, commit } = useStore();
    const itemList = computed(() => state.itemList);

    const removeItem = (payload: { id: number }) =>
      commit("removeItem", payload);
    const changeStatus = (payload: { item: ItemList }) =>
      commit("changeStatus", payload);

    return { itemList, removeItem, changeStatus };
  },
});
</script>

<style></style>

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
            <input type="checkbox" class="mx-1" :checked="item.status" />
            <span>{{ item.content }}</span>
          </div>
          <div class="item-center row-reverse">
            <span class="px-4 py-2 float-right">
              <i class="fas fa-times"></i>
            </span>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { ItemList } from "@/store/interfaces/item-list.interface";
import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";

@Options({
  name: "List",
})
export default class List extends Vue {
  // vuex

  // datas
  itemList: ItemList[] = [];

  // methods
  removeItem(id: number) {
    useStore().commit("removeItem", { id });
  }

  // LC - createdAt
  created() {
    this.itemList = useStore().state.itemList;
  }
}
</script>

<style scoped></style>

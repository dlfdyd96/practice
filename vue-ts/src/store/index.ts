import { createStore } from "vuex";
import { ItemList } from "./interfaces/item-list.interface";

interface RootState {
  itemList: ItemList[];
}

const storage = {
  fetch(): ItemList[] {
    const arr: ItemList[] = JSON.parse(localStorage.getItem("state")!) || [];
    console.log(arr);

    return arr;
  },
};

export default createStore<RootState>({
  state: {
    itemList: storage.fetch(),
  },
  mutations: {
    addItem(state, payload: { inputValue: string }) {
      if (payload.inputValue === "") return;

      const id = Math.random().toString().slice(2);
      const text = payload.inputValue;

      console.log(text);

      const currentItem: ItemList = {
        id: +id,
        content: text,
        status: false,
      };

      state.itemList.push(currentItem);
      localStorage.setItem("state", JSON.stringify(state.itemList));
    },
    removeItem(state, payload: { id: number }) {
      const idx = state.itemList.findIndex(
        (item: ItemList) => item.id === payload.id
      );
      state.itemList.splice(idx, 1);
      localStorage.setItem("state", JSON.stringify(state.itemList));
      //localStorage.removeItem();//
    },
    changeStatus(state, payload: { item: ItemList }) {
      const idx = state.itemList.findIndex(
        (item: ItemList) => item.id === payload.item.id
      );
      state.itemList[idx].status = !state.itemList[idx].status;
      localStorage.setItem("state", JSON.stringify(state.itemList));
    },
  },
  actions: {},
  modules: {},
});

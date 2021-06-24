// import { ItemList } from "./interfaces/item-list.interface";
import { createStore } from "vuex";
import { ItemList } from "./interfaces/item-list.interface";

export default createStore({
  state: {
    itemList: [
      { id: 1, content: "한발남았네", status: false },
      { id: 2, content: "한발남았네", status: false },
      { id: 3, content: "한발남았네", status: true },
    ],
  },
  mutations: {
    removeItem(state, payload: { id: number }) {
      const idx = state.itemList.findIndex(
        (item: ItemList) => item.id === payload.id
      );
      state.itemList.splice(idx, 1);
    },
    changeStatus(state, payload: { item: ItemList }) {
      const idx = state.itemList.findIndex(
        (item: ItemList) => item.id === payload.item.id
      );
      state.itemList[idx].status = !state.itemList[idx].status;
    },
  },
  actions: {},
  modules: {},
});

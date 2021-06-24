import { inject, provide } from "vue";
import { createStore, Store } from "vuex";
import { ItemList } from "./interfaces/item-list.interface";

interface RootState {
  itemList: ItemList[];
}

const initalState: RootState = {
  itemList: [
    { id: 1, content: "한발남았네", status: false },
    { id: 2, content: "한발남았네", status: false },
    { id: 3, content: "한발남았네", status: true },
  ],
};

const store = createStore({
  state: initalState,
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

// Provide 구분 값
const StoreSymbol = Symbol();

// 저장소 제공 헬퍼 함수
export const provideStore = () => {
  provide(StoreSymbol, store);
};

// 저장소 주입 헬퍼 함수
export const useStore = () => {
  const store = inject<Store<RootState>>(StoreSymbol);
  if (!store) throw new Error("No Store provided");
  return store;
};

export default store;

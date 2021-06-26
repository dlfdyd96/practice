import { inject, provide } from "vue";
import { createStore, Store } from "vuex";
import { ItemList } from "./interfaces/item-list.interface";

interface RootState {
  itemList: ItemList[];
}

const storage = {
  fetch(): ItemList[] {
    const arr: ItemList[] = JSON.parse(localStorage.getItem("state")!) || [];
    console.log(arr);

    // if (localStorage.length > 0) {
    //   for (let i = 0; i < localStorage.length; i++) {
    //     if (
    //       localStorage.key(i) == "state"
    //     ) {
    //       const item = localStorage.getItem(localStorage.key(i)!);
    //       console.log(JSON.parse(item!));
    //       arr.push(JSON.parse(localStorage.getItem(localStorage.key(i)!)!));
    //     }
    //   }
    // }

    return arr;
  },
};

const initalState: RootState = {
  itemList: storage.fetch(),
  // [
  //   { id: 1, content: "한발남았네", status: false },
  //   { id: 2, content: "한발남았네", status: false },
  //   { id: 3, content: "한발남았네", status: true },
  // ],
};

const store = createStore({
  state: initalState,
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
      //localStorage.removeItem();//
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

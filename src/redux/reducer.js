import { ADDDATA, DELETEDATA } from "./action";

const init = {
  todo: [],
};

export const Reducer = (store = init, { type, payload }) => {s
  switch (type) {
    case ADDDATA:
      return { ...store, todo: [...payload] };
    case DELETEDATA:
      return { ...store, todo: [...store.todo].filter((ele)=>ele.id!=payload) };
    default:
      return store;
  }
};

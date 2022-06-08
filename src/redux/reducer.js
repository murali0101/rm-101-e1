import { ADDDATA } from "./action";

const init = {
  todo: [],
};

export const Reducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADDDATA:
      return { ...store, todo: [...payload] };
    default:
      return store;
  }
};

export const ADDDATA = "ADDDATA";

export const addData = (val) => {
    console.log(val)
  return { type: ADDDATA, payload: val };
};

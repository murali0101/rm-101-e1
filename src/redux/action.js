export const ADDDATA = "ADDDATA";
// export const ADDCOUNT = "ADDCOUNT";

export const addData = (val) => {
    console.log(val)
  return { type: ADDDATA, payload: val };
};
// export const addcount = (val) => {
//     console.log(val)
//   return { type: ADDDATA, payload: val };
// };

import { DataVerify } from "./DataVerify";
let initstate = DataVerify();//Utiliza el local storage para la persistencia de la inormacion
function authreducer(state = initstate, action) {
  switch (action.type) {
    case "LOGIN":
      state = action.payload;
      return state;

    default:
      return state;
  }
}
export default authreducer;

export function DataVerify() {
  let date = JSON.parse(localStorage.getItem("user"));
  if (date  && date.token) {
    return date;
  } else {
    let obj = {
      logged: false,
    };
    return obj;
  }
}

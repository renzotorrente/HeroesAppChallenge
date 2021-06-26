import axios from "axios";

async function GetHero(name) {
  let obj = {};
  let apireq = await axios.get(
    `https://www.superheroapi.com/api.php/10216694766436285/search/${name}`);
  try {
    obj = await apireq.data.results;
    return obj;
  } catch (err) {
    return err;
  }
}
export default GetHero;

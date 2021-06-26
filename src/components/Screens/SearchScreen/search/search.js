import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import GetHero from "./GetHero";
import HeroesCards from "../HeroCardSearch/HeroesCards";
import styles from "./Search.module.css";
function SearchScreen() {
  let [bool, setbool] = useState("false");
  const { heroe } = useParams();
  let [heroes, setHeroes] = useState([]);
  useEffect(() => {
    GetHero(heroe).then(
    (resp) => setHeroes(resp))
    .then(() =>{setbool("true")}); 
    setbool("false"); // SETEAR VALOR
  }, [heroe]);

  if (bool == "true") {
    if ((heroes !== undefined) | (typeof heroes == "object")) {
      return (
        <div className="container" >
          <div className={styles.cards_container}>
            {heroes.map((elem) => (
              <>
                <HeroesCards heroe={elem} />
              </>
            ))}
          </div>
        </div>
      );
    } else if (heroes == undefined) {
      return (
        <div className="container" >
          <h4 style={{color:"white", marginTop:"20px", textAlign:"center"}}>The hero with the name {heroe}  was not found</h4>
        </div>
      );
    }
  } else if (bool == "false") {
    return (
      <div className="container" >
         <h3 style={{color:"white", marginTop:"20px", textAlign:"center"}}>Loading.....</h3>
      </div>
    );
  }
}
export default SearchScreen;

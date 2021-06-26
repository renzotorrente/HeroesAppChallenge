import React, { useState } from "react";
import styles from "./cardsHero.module.css";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers} from "@fortawesome/free-solid-svg-icons";
import {VerifyTeam } from "../../../../store/actions/actions";
import Swal from 'sweetalert2';
function HeroesCards({ heroe,  VerifyTeam, state }) {
var checkduplicates =state.filter(elem => elem.id == heroe.id);
let altname = "image " + heroe.name;
var [errmsg, seterrmsg] = useState('true');
  function handleClick(e) {
  e.preventDefault();
  seterrmsg(VerifyTeam(state, heroe));
  }
  function dispatchAlert (errormsg){
  Swal.fire({
      title: errormsg,
      showCloseButton: true,
      showConfirmButton: false,
      width:"350px",
       background:"#0A3257",
       closeButtonAriaLabel:"10",
       customClass: {
        closeButton:'button_close',
        title:'modal_alert',
        popup:'container_alert'
      }
    });
    seterrmsg('true');
  }  
  return (
    <>
      <div className={styles.card_main}>
        <div className={styles.imgContainer}>
          <img src={heroe.image.url} alt={altname} className={styles.img}></img>
        </div>
        <div className={styles.primarydata}>
          <div className={styles.titlehero}>
            <h6><strong>{heroe.name}</strong></h6>
          </div>
          <div className={styles.box_btn}>
            {errmsg !== 'true' && errmsg !== 'add' ?
            dispatchAlert(errmsg)
            : null
            }
           {checkduplicates.length > 0 ?
           <FontAwesomeIcon icon={faUsers} style={{color:"white", fontSize:"22px"}}></FontAwesomeIcon>:
           <button className={styles.btnCard} onClick={(e) => handleClick(e)}>
             Add to team
            </button>
               }
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
   state: state.heroereducer.HerosTeam
  };
};
export default connect(mapStateToProps, { VerifyTeam })(HeroesCards);

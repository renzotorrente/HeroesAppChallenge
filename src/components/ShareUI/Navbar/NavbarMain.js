import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ActionLoggedFalse } from "../../auth/Authactions";
import { connect } from "react-redux";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faSearch, faHome } from "@fortawesome/free-solid-svg-icons";
function NavbarMain({ history, ActionLoggedFalse }) {
  var [nameAsearch, setName] = useState("");
  function HandleSearch(e) {
    e.preventDefault();
    if (nameAsearch.length >= 1) {
      history.push(`/search/${nameAsearch}`);
    }
    setName('');
  }
  function handleLogOut(e) {
    e.preventDefault();
    ActionLoggedFalse();
  }

  return (
    <div className={styles.navcontaint}>
    <header className="container" id={styles.wrap_nav}>
    <nav className={styles.nav}>
    <ul>
      <li>
    <a><NavLink
               className={styles.navlink}
                activeStyle={{ color: "rgb(161, 150, 150) " }}
                exact
                to="/"
              >
                <FontAwesomeIcon icon={faHome} style={{color:"white"}}></FontAwesomeIcon>
              </NavLink></a> 
              </li>
    </ul>
    
    <form className={styles.nav_form}>
    <input onChange={(e)=> setName(e.target.value)}  value={nameAsearch}  type="search" placeholder="Hero name"></input>
    
    <button type="submit" className={styles.search_button} onClick={(e)=> HandleSearch(e)}>
   
    <span className={styles.btn_icon}><FontAwesomeIcon icon={faSearch} style={{color:"white"}}></FontAwesomeIcon> </span>
   
    </button>
    </form>
    <ul>
    <li
              onClick={(e) => handleLogOut(e)}
            >
             <a><FontAwesomeIcon icon={faSignOutAlt} style={{color:"white", cursor:"pointer"}}></FontAwesomeIcon></a> 
            </li>

    </ul>
    </nav>
    </header>
    
  </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state.authreducer.logged,
  };
};

export default connect(mapStateToProps, { ActionLoggedFalse })(NavbarMain);


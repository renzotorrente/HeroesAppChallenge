import style from './footer.module.css';
import React from 'react';
function Footer(){
    return (

  <footer id={style.sticky_footer} className="py-4 ">
    <div className="container text-center">
      <small>Copyright 2021 &copy; Renzo Torrente</small>
    </div>
  </footer>

    )
}
export default Footer;
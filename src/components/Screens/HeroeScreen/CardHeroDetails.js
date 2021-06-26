import React from 'react';
import style from './ScreenDetailsHero.module.css';
function CardHeroDetails ({heroeid}){
  let descriptAlt = "image a " + heroeid.name;
    return (
      <div className="container">
        <div className={style.card_main}>
      <div className="card mb-3" id={style.box_card}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={heroeid.image.url} id={style.imgdetails} className="img-fluid rounded-start" alt={descriptAlt}></img>
        </div>
        <div className="col-md-8">
          <div className="card-body" style={{padding:"8px 14px"}}>
          <h4 className="card-title" style={{fontStyle:"oblique", textAlign:"center"}}>{heroeid.name}</h4>
            <p>Weight :<strong>{heroeid.appearance.weight[1]}</strong></p>
              <p>Height : <strong>{heroeid.appearance.height[1]}</strong></p>
              <p>Hair color : <strong>{heroeid.appearance["hair-color"]}</strong></p>
              <p>eye color : <strong>{heroeid.appearance["eye-color"]}</strong></p>
              <p>Alias: <strong>{heroeid.biography.aliases[0] ? heroeid.biography.aliases[0]: "--"} </strong></p>
              <p>Base: <strong>{heroeid.work.base}</strong></p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    )
}
export default CardHeroDetails;
 
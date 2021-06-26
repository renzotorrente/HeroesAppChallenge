import React from 'react';
import { useParams } from 'react-router';
import { connect } from "react-redux";
import { Redirect} from 'react-router-dom';
import CardHeroDetails from './CardHeroDetails';
function HeroDetails({state}){
const {heroid} = useParams();
var hero = state.filter(hero => hero.id === heroid );
if (hero.length >= 1){
        return (
            <div className="container">
             <CardHeroDetails heroeid={hero[0]}></CardHeroDetails>
            </div>
        )
    }
    else {
      return(
        <Redirect to="/"></Redirect>
    )
}
}
const mapStateToProps = (state) => {
    return {
      state: state.heroereducer.HerosTeam
    };
  };
  
  export default connect(mapStateToProps)(HeroDetails);
import React from 'react';
import TeamMember from '../TeamMember/TeamMember'; 
import { useSelector } from 'react-redux';
import style from './ViewTeam.module.css';
function ViewTeam({history, globalstats}){
var teamStatsGlobal = globalstats;
const team = useSelector(state => state.heroereducer.HerosTeam);  
return(
   <div className="container" id={style.mainViewTeam}>
  
    { (teamStatsGlobal.length > 1 && team.length > 1)?
    <div className={style.box_global}>
    <div className={style.contain_globalstats}>
      <div className={style.titlestats}>      
      <h6>Team AVG</h6>
      </div>
      <div className={style.progressbox}>
    {teamStatsGlobal.map((stats)=>
    <div className={style.statind}>
     <div className={style.text_item}>
    <strong>{stats[0]}</strong>
    </div>
    <div className={style.mid_item}>
    <div className="progress" id={style.progressbar}>
    <div className="progress-bar" role="progressbar" style={{width: stats[1] +"%" , background:"#1FA168", padding:"3px"}} aria-valuenow={stats[1]} aria-valuemin={stats[1]} aria-valuemax="100">{stats[1]+"%"}</div>
    </div>
    </div>
    </div>
    )}
    </div>
    </div>
    </div>
    :
    <p></p>
    }    
   

  <div className={style.bodyCardsTeam}>
  {
  team.map((heroe) => 
  (
  <TeamMember heroe={heroe} history={history}></TeamMember>
 
  ))
  }

    </div>
 

    
    </div>
)
}
export default ViewTeam;
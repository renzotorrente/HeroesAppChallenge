import React from 'react';
import styleM from './TeamMember.module.css';
import { useDispatch } from 'react-redux';
import { RemoveMyTeam } from '../../../../store/actions/actions';
import { Percentage, Statsordered } from '../FunctionsHome/statsordered-percentage';
function TeamMember({heroe, history}){
    const statsordered = Statsordered(heroe.powerstats);
    let percentage =  Percentage(statsordered);
    let dispatch = useDispatch();
    function SeeDetails(event, heroe){
     event.preventDefault();
     history.push(`/team/${heroe.id}`);   
    }
    return(
    <>
   <div id={styleM.card_main}>
    <div className="card" id={styleM.front} style={{ backfaceVisibility:"hidden", position:"absolute", width:"100%", height:"100%"  }}>
    <img src={heroe.image.url} className={styleM.img_front}></img>
    <div className="card-body">
    <h5 className="card-title" style={{textAlign:"center" , alignItems:"center", lineHeight:"10px"}} >{heroe.name}</h5>
    </div>
    </div>  
    <div className="card" id={styleM.back} style={{ backfaceVisibility:"hidden", position:"absolute", width:"100%", height:"100%" }}>
    <div className="card-body" style={{position:"relative"}}>
    <h5 className="card-title" id={styleM.titlepower}>Total AVG:   <strong className={styleM.percentage_view}>{percentage}%</strong></h5>
    {statsordered.map(stats =>(
    <div className={styleM.bodyProgress}>  
    <div className={styleM.skilltitle}>
    <strong>{stats[0] }</strong>
    </div>
    <div  className={styleM.progressBar}>
    <div className="progress" id={styleM.progress}>
      {percentage == '--' || stats[1] == 'null'?
       <p style={{paddingLeft:"5px"}}> -- </p>
       :
       <div className="progress-bar" role="progressbar" style={{width: stats[1] +"%" , background:"#1FA168", paddingLeft:"2px"}} aria-valuenow={stats[1]} aria-valuemin={stats[1]} aria-valuemax="100">{stats[1]+"%"}</div>
       }
    </div>
    </div>
    </div>
    ))
    }
    <div className={styleM.button_card}>
    <button onClick={(e)=>{SeeDetails(e, heroe)}} className="btn  btn-sm"  id={styleM.button_details}>Details</button>
    <button className="btn btn-sm" onClick={()=>dispatch(RemoveMyTeam(heroe))} id={styleM.button_remove}>Remove</button>
    </div>
    </div>
    </div>

    </div>
    </>
    )



}
export default TeamMember;
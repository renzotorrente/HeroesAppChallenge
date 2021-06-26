import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import StatsGlobal from './FunctionsHome/statsglobal';
import TeamEmpty from './TeamEmpty'; 
import ViewTeam from '../HomeScreen/ViewTeam/ViewTeam';

function HomeScreen({history}) {
var team = useSelector(state => state.heroereducer.HerosTeam);
let [globalstats, Setglobalstats] = useState('');
useEffect(() => {
Setglobalstats(StatsGlobal(team));
}, [team]);
 return (
        <>
        <div className="container mt-1">
        {team.length > 0 ?
        <ViewTeam history={history} globalstats={globalstats}></ViewTeam>
       :
       <TeamEmpty></TeamEmpty>
       }
        </div>
        </>
    )
    
}
export default HomeScreen;
import React from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';

function PrivatesRoutes ({isAuthenticated}){
 let history = useHistory();
if(isAuthenticated){
return (
   <div>
    <DashboardRoutes history={history}/>
  </div>
)
}else{
    return(
        <Redirect to ="/login"></Redirect>
    )
}
}
export default PrivatesRoutes;
import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import LoginScreen from '../Screens/LoginScreen/login';

function PublicRoutes ({isAuthenticated}){
if(isAuthenticated == true){
return (
  
    <Redirect to="/"/>
)
}else{
    return(
        <Route exact path="/login" component={LoginScreen}/>
    )
}
}
export default PublicRoutes;
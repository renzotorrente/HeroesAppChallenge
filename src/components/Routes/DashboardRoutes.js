import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Switch , Route} from 'react-router-dom';
import HeroDetails from '../Screens/HeroeScreen/HeroDetails';
import HomeScreen from '../Screens/HomeScreen/home'; 
import SearchScreen from '../Screens/SearchScreen/search/search'; 
import Footer from '../ShareUI/footer/footer'; 
import NavbarMain from '../ShareUI/Navbar/NavbarMain'
function DashboardRoutes({history}){
var HerosTeam = useSelector(state => state.heroereducer.HerosTeam);
useEffect(() => {
sessionStorage.setItem("team", JSON.stringify(HerosTeam)); 
}, [HerosTeam])
    return (
        <div>
        <NavbarMain  history={history}/>
        <div style={{minHeight:"100vh"}}>
        <Switch>
       <Route exact path="/" component ={HomeScreen}/>
       <Route  path="/search/:heroe" component={SearchScreen}/>
       <Route   path="/team/:heroid" component={HeroDetails}/>
        </Switch>
        </div>
       <Footer></Footer>
    </div>
    )
}
export default DashboardRoutes;
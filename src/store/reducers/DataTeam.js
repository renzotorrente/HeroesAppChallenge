function DataTeam(){
var team = JSON.parse(sessionStorage.getItem('team'));

if(team && team.length >= 0 ){
 let state = {
    HeroInScreen :{},
    HerosTeam:team,
 }
return state; 
}else{
return {
HeroInScreen :{},
HerosTeam:[],
}

}
}
export default DataTeam;
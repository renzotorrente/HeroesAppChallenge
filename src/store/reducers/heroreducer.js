import DataTeam from "./DataTeam";

const initstate = DataTeam(); // utiliza el session storage como herramienta para la persistencia de informacion

function HeroReducer (state = initstate, action){

switch (action.type) {

    case 'ADDTEAM':
        return{
        ...state,
        HerosTeam: state.HerosTeam.concat(action.payload)
        }
    case'REMOVETEAM':
    return{
     ...state,
     HerosTeam: state.HerosTeam.filter(elem => elem.id !== action.payload.id)
    }


    default:
      return state;
}

}
export default HeroReducer;
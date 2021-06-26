export function VerifyTeam(team, hero) {
  
  var alignmentGood = team.filter(elem => elem.biography.alignment === 'good' );
  var alignmentBad = team.filter(elem => elem.biography.alignment === 'bad');
  return (dispatch) => {
    if (team.length <= 5) {
    if (alignmentGood.length > 2  && hero.biography.alignment == 'good') {
    return "team orientation is not balanced";
    }else if(alignmentBad.length > 2  && hero.biography.alignment == 'bad'){
      return "team orientation is not balanced";
    }
     else{ 
      dispatch(AddMyTeam(hero));
      return 'add';
      // Verifica capacidad de orientación
    }
    } else {
      return "only 6 heroes per team";
    }
  };
}

// Agregar un heroe al team
export function AddMyTeam(heroe) {
  return {
    type: "ADDTEAM",
    payload: heroe,
  };
}

//Elimina un heroe del team

export function RemoveMyTeam(heroe) {
  return {
    type: "REMOVETEAM",
    payload: heroe,
  };
}



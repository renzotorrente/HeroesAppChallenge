import axios from "axios";

export  function actionToken( email, password) {
  return async (dispatch)=>{
    try{
      let datos = await axios.post("http://challenge-react.alkemy.org/", {
        email: email,
        password: password,
      });
      let data = datos.data.token;
      dispatch(ActionLogged(data));
      return data;
    } catch (err){
      dispatch(ActionLoggedFalse);
     let objerror = {
        type: 'error',
        errormessage: 'ERROR: wrong account or password',
        errorinfo: err
      }
      throw objerror; // retorna el error para luego ser renderizado en pantalla
    }
  };
}

//Generará que se guarde en store, el estado de autentificación del usuario (de acuerdo a esto configurar las rutas)
 function ActionLogged(object){
    return {
        type: 'LOGIN',
        payload:{ 
        logged:true,
        token:object
        }   
    }
 }
 //Generará que se guarde en store, el estado de autentificación del usuario (de acuerdo a esto configurar las rutas)
 export function ActionLoggedFalse(){
  return{
      type:'LOGIN',
      payload: {logged:false}
  }
 }
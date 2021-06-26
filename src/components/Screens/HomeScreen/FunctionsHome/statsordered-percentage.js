//Convierte el objeto en un array [clave, valor]
//Lo ordena segun su valor 
export function Statsordered(hero){
var ordered = Object.entries(hero);
return ordered.sort((h1,h2) => (h1[1] - h2[1])).reverse();
}

//Porcentaje del total de stats del heroe
export function Percentage(heroe){
  let total =  heroe.reduce((total, stat)=>{
        if(stat[1]!== 'null'){
          return total += parseInt(stat[1]);
        }else{
            return total += 0;
        } 
     },0);
   if (total == 0){ // Si todos los valores son null
    return "--"
   }else{
       return (total / 6).toFixed() ;
   }
}
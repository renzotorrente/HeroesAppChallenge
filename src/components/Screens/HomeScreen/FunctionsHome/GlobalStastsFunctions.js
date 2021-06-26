import { Statsordered } from "./statsordered-percentage";

//Saca el porcentaje de una skill de todo el team
export function GlobalSkillsPercentage(HerosTeam, paramskill) {
  var param = paramskill;
  var percentageskill = HerosTeam.map((hero) => {
    if (hero.powerstats[param] >= 0) {
      return hero.powerstats[param];
    } else {
      return 0;
    }
  });

  var total = percentageskill.reduce((sum, valor) => {
    return (sum += parseInt(valor));
  }, 0);
  return (total / HerosTeam.length).toFixed();
}

//Devuelve un array clave - valor ordenado a partir desde la mayor habilidad del team hasta la menor
export function GlobalSkills(HerosTeam) {
  var cumulativeSkills = {
    intelligence: GlobalSkillsPercentage(HerosTeam, "intelligence"),
    strength: GlobalSkillsPercentage(HerosTeam, "strength"),
    speed: GlobalSkillsPercentage(HerosTeam, "speed"),
    combat: GlobalSkillsPercentage(HerosTeam, "combat"),
    durability: GlobalSkillsPercentage(HerosTeam, "durability"),
    power: GlobalSkillsPercentage(HerosTeam, "power"),
  };
  var skillsTeamsordered = Statsordered(cumulativeSkills);
  return skillsTeamsordered;
}

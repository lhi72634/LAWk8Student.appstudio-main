//Laura Higueras

rdoPersonality.onchange=function(){
  let userChoice = $("input[name=rdoPersonality]:checked").prop("value")
  lblMessage.value = `I would agree that you are a ${userChoice} person!`
}

btnNextPage2.onclick=function(){
  ChangeForm(favExercises)
}

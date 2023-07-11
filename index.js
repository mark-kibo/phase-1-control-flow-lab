function scuberGreetingForFeet(someValue){
  // Write your code here!
  if(someValue <= 400){
    return "This one is on me!";
  }else if(someValue > 2000 && someValue <= 2500){
    return "I will gladly take your thirty bucks.";
  }else if(someValue > 2500){
    return "No can do.";
  }
}

function ternaryCheckCity(cityName){
  // Write your code here!
  if(cityName == "NYC"){
    return "Ok, sounds good.";
  }else{
    return "No go."
  }

}


function switchOnCharmFromTip(courtoesName){
  // Write your code here!
  if(courtoesName === "generous"){
    return "Thank you so much.";
  }else if(courtoesName === "not as generous"){
    return "Thank you.";
  }else{
    return "Bye.";
  }
}


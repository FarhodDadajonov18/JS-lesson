
confirm("Do you want to travel to Paris ?");

var money = Number(prompt(" Before traveling,  we should know your financial condition. \n Please include all your money ").trim());
var travel = 80000;


var parag = document.querySelector("h1");

if(isNaN(money)){
 parag.textContent = "Iltimos son kiriting.";
}
else if(money >= travel){
 
  parag.textContent = "Sizda yetarlicha pul bor. Hoziroq Ro'xatdan o'ting.";
}
else{

  parag.textContent = "Afsuski sizda hozircha yetarlicha pul yoq. Pulingiz bo'lganda biz bilan bog'laning.";
}

document.body.style.backgroundColor = "rgb(190, 177, 177);"
document.body.style.backgroundImage ="linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)"; 


let boxes = document.querySelectorAll(".box")
let comp = document.querySelector(".comp")
let you = document.querySelector(".you")
let result = document.querySelector(".res")
let container = document.querySelector(".container")
let main = document.querySelector("main")
let winnerDiv = document.querySelector(".winnerDiv")
let winner = document.querySelector(".winner")
let newGame = document.querySelector(".newGame")





let turn = "user"

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
 }

const choices = ["stone", "paper", "sessior"]

var computer = "paper"

function compChoice(){
   num = getRandomInt(3)
   computer = choices[num]
}





let compScore = 1;
let userScore = 1;
let count = 0;

boxes.forEach((box)=>{
   box.addEventListener("click", ()=>{
      userChoice = box.getAttribute("id")
      compChoice();
      console.log(count)

         if(count === 10){
            container.className = "hideContainer"
            main.className = "winnerColor"
            winnerDiv.classList.remove("winnerHide")
            if(compScore > userScore){
               winner.innerText = "oops!! you Loose the game"
            }
            else if(compScore == userScore){
               winner.innerText = "Match was Draw!! try again"
            }
            else{
               winner.innerText = "Congratulations!! you are the Winner"
            }
            newGame.addEventListener("click", () => {
               location.reload()
            })
         }
         else if(computer == userChoice){
            result.innerText = `You both choose ${userChoice}`
            result.style.backgroundColor = "darkslategray" 
         }
         else if(computer == "paper" && userChoice == "stone" || computer == "sessior" && userChoice == "paper" || computer == "stone" && userChoice == "sessior"){
            result.innerText = `you Loose. ${computer} defeat your ${userChoice}`
            result.style.backgroundColor = "red"
            comp.innerText = compScore;
            compScore++;
         }
         else{
            result.innerText = `you Win. your ${userChoice} defeat ${computer}`
            result.style.backgroundColor = "green"
            you.innerText = userScore;
            userScore++;
         }
         count++;
   })
})


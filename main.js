const btnStart = document.querySelector(".btn");
const img = document.querySelectorAll("img")
const tab = ["rock","paper","scissors"];
const scoreBoardDiv = document.querySelector(".scoreBoardColor");
const paraScore = document.querySelector(".score")
const boxDivs = document.querySelectorAll(".box")
const container = document.querySelector("#container");
const divSection = document.querySelector("#section")
const paraWin = document.createElement("p");
const restarButton = document.createElement("button")
restarButton.textContent = "PLAY AGAIN"
restarButton.classList.add("btn-res")
let playerScore = 0;
let computerScore = 0;
function computerPlay(){
    let computerChoice = tab[Math.floor(Math.random()*tab.length)];
    return computerChoice;
}
function playRound(playerSelection, computerSelection ){
    if((playerSelection == "rock" && computerSelection == "scissors") ||(playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper"))
    {
        console.log(`Player Win ${playerSelection} beats ${computerSelection}`);
        playerScore++;
    }
    else if(playerSelection === computerSelection){
       return undefined;
    }
    else{
        console.log(`Computer win ${computerSelection} beat ${playerSelection}`)
        computerScore++;
    }
}
function removesDiv(){
    for(let i = 0; i<boxDivs.length; i++){
        boxDivs[i].remove();
    }
}
restarButton.addEventListener("click", ()=>{
      window.location.reload();
})
img.forEach((box) => {
    box.addEventListener("click",(e)=>{
        const playerSelection = box.id;
        const computerSelection = computerPlay();
        playRound(playerSelection,computerSelection)
        paraScore.textContent = `${playerScore}:${computerScore}`;
        const paraScoreHistory = document.createElement("p")
        paraScoreHistory.classList.add("scoreHistory");
        scoreBoardDiv.appendChild(paraScoreHistory);
        paraScoreHistory.textContent = `(${playerSelection[0]})Player ${playerScore} : ${computerScore} Computer(${computerSelection[0]})`;
                if(playerScore == 5){
                    removesDiv();
                    paraWin.textContent=`Player WIN!`
                    paraWin.classList.add("winFont")
                    container.appendChild(paraWin)
                    divSection.appendChild(restarButton)
                }
                else if(computerScore == 5){
                    console.log(`Computer win ${computerScore}:${playerScore}`)
                    removesDiv();
                    paraWin.textContent=`COMPUTER WIN!`
                    paraWin.classList.add("winFont")
                    container.appendChild(paraWin)
                    divSection.appendChild(restarButton)
                }
        })
        
});




let compScore = 0;
let yourScore = 0;

const choices = document.querySelectorAll(".choice");

const msgStatus = document.querySelector("#msg"); 

let yourScoreStatus = document.querySelector(".yourScore");
let compScoreStatus = document.querySelector(".compScore");


// 3
const genCompChoice = () => {
    const select = ["rock", "paper", "scissors"]
    const indexValue = Math.floor(Math.random() * 3) // Math.floor is used to remove the numeric value which is present after the decimal.
    return select[indexValue];
}

// 4
const drawGame = () => {

    msgStatus.innerText = "Game was draw. Play again";
    msgStatus.style.backgroundColor = "blue";
}

//5
const showWinner = (youWin, yourChoice, compChoice) => {
    if (youWin) {
        yourScore++;
        yourScoreStatus.innerText = yourScore;
        msgStatus.innerText = `You Win. Your ${yourChoice} beats ${compChoice}`;
        msgStatus.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScoreStatus.innerText = compScore;
        msgStatus.innerText = `You Lost. Computer ${compChoice} beats ${yourChoice}`;
        msgStatus.style.backgroundColor = "red";
    }
}

// 2
const playGame = (yourChoice) => {
    // generate computer choice.

    const compChoice = genCompChoice();

    if (yourChoice === compChoice) {

        drawGame();

    } else {
        let youWin = true;
        if (yourChoice === "rock") {
            youWin = compChoice === "paper" ? false : true;
        }
        else if (yourChoice === "paper") {
            youWin = compChoice === "scissors" ? false : true;
        }
        else {
            youWin = compChoice === "rock" ? false : true;
        }
        showWinner(youWin, yourChoice, compChoice);
    }


}




// 1
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const yourChoice = choice.getAttribute("id");
        playGame(yourChoice);
    })
});
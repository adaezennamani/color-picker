let randomNumber;
let userGuess = null

//function to set a new random number every round

function generateRandomNumber () {
    //random number between 1 and 3
    randomNumber = Math.floor(Math.random() * 3) + 1
}


function submitGuess() {
const input = document.getElementById("guess").value


//check if user entered a valid number or NaN
if (input < 1 || input  >3 || isNaN(input)) {
    document.getElementById("message").textContent = "⚠ Please enter a valid number (1-3)";
    return;
}

//save user's guess 
userGuess = parseInt(input)

//generate a secret random number for this round
generateRandomNumber();

//Tell user to click a color
document.getElementById("message").textContent = "Guess submitted! Now click on a color box"
}

//run this when the user picks a color
function colorOne(choice){
    if (userGuess === null) {
        document.getElementById("message").textContent = "please submit a guess first";
        return;
    }
    

    //compare the user's guess with the random number AND the chosen color

    if (choice === randomNumber && userGuess === randomNumber) {
        document.getElementById("message").textContent = "🎊 You won! Your guess and the color matched!";
    } else {
        document.getElementById("message").textContent = "❌ you failed this one! Try again"
    }
    //reset guess so they must enter a new one on the next round

    userGuess = null;
}

function colorTwo(choice){
    if (userGuess === null) {
        document.getElementById("message").textContent = "please submit a guess first";
        return;
    }
    

    //compare the user's guess with the random number AND the chosen color

    if (choice === randomNumber && userGuess === randomNumber) {
        document.getElementById("message").textContent = "🎊 You won! Your guess and the color matched!";
    } else {
        document.getElementById("message").textContent = "❌ you failed this one! Try again"
    }
    //reset guess so they must enter a new one on the next round

    userGuess = null;
}

function colorThree(choice){
    if (userGuess === null) {
        document.getElementById("message").textContent = "please submit a guess first";
        return;
    }
    

    //compare the user's guess with the random number AND the chosen color

    if (choice === randomNumber && userGuess === randomNumber) {
        document.getElementById("message").textContent = "🎊 You won! Your guess and the color matched!";
    } else {
        document.getElementById("message").textContent = "❌ you failed this one! Try again"
    }
    //reset guess so they must enter a new one on the next round

    userGuess = null;
}

const getUserChoice=(userInput)=>{
  userInput=userInput.toLowerCase()
  if(userInput==="rock"|| userInput==="paper"||userInput==="scissors"||userInput==="bomb"){
    return userInput
  }
  else{
    console.log("Error message")
  }
}

const getComputerChoice=()=>{
  let ram=Math.floor(Math.random() * 3)
  switch(ram){
    case 0:
      return "rock"
      break;
    case 1:
      return "paper"
      break;
    case 2:
      return "scissors"
      break;
  }
}

var determineWinner=(userChoice,computerChoice)=>{
  if(userChoice===computerChoice){
    return "Game is a tie"

  }
  if(userChoice==="bomb"){
    return "You won regardless"
  }
  if(userChoice==="rock"){
    if(computerChoice==="scissors"){
      return "user won"
    } else{
      return "computer won"

    }
  }

  if(userChoice==="paper"){
    if(computerChoice==="rock"){
      return "user won"

    } else{
      return "computer won"
    }
  }

  if(userchoice==="scissors"){
    if(computerChoice==="paper"){
      return "user won"
    } else{
      return "computer won"
    }
  }
}

var playGame=()=>{
  var userChoice=getUserChoice("bomb")
  var computerChoice=getComputerChoice()
  console.log(userChoice,computerChoice)
console.log((determineWinner(userChoice,computerChoice))) }


playGame()

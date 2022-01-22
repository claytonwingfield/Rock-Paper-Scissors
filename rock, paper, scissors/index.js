const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    } else {
      console.log('Error! Invalid input');
    }
  };
  
  function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
  
    switch (randomNum){
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
      default:
        return 'Error! Invalid Input';
        break;
    }
  }
  
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'Tie';
    } 
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'The Computer Won!';
        } else {
          return 'You won!';
        }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors'){
        return 'The computer won!';
      } else {
        return 'You Won!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    } 
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  
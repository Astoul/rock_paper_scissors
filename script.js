// Variables
let  computerScore = 0;
let  userScore = 0;
const result = document.querySelector(".result")
const comp = document.getElementById("computer-score");
const user = document.getElementById("user-score");
const icons = document.querySelectorAll(".choice");
const winner = document.getElementById("action-message")
const things = ["rock" , "paper" , "scissors"];



// The game

  icons.forEach(function(choice){
      choice.addEventListener("click", function(e) {

       // Computer selection

          const computerSelection = things[Math.floor(Math.random() * things.length)];

        // User selection

          const styles = e.currentTarget.classList;

    // playing the round

     if (styles.contains( "rock") && computerSelection === 'rock'){
                    result.innerText = 'You tie !';

    }else if (styles.contains( "rock") && computerSelection === 'paper'){
                       result.innerText = 'You loose!. Paper covers rock !';
                       computerScore++;
                           comp.textContent = computerScore;

   }else if (styles.contains( "rock") && computerSelection === 'scissors' ) {
                      result.innerText = 'You win!. Rock beats scissors';
                      userScore++;
                      user.textContent = userScore;
        }
     if (styles.contains( "paper") && computerSelection === 'paper'){
        result.innerText = 'You tie !';

    }else if (styles.contains( "paper") && computerSelection === 'rock'){
                       result.innerText = 'You win!. Paper covers rock !';
                       userScore++;
                           user.textContent = userScore;

   }else if (styles.contains( "paper") && computerSelection === 'scissors' ) {
                      result.innerText = 'You loose!. Scissors beats paper';
                      computerScore++;
                      comp.textContent = computerScore;
        }
     if (styles.contains( "scissors") && computerSelection === 'scissors'){
        result.innerText = 'You tie !';

    }else if (styles.contains( "scissors") && computerSelection === 'rock'){
                       result.innerText = 'You loose!. Rock beats scissors ';
                       computerScore++;
                           comp.textContent = computerScore;

   }else if (styles.contains( "scissors") && computerSelection === 'paper' ) {
                      result.innerText = 'You win!. Scissors beats paper';
                      userScore++;
                      user.textContent = userScore;
        }

        // Declaring the winner

          if (userScore == 5 ) {
                winner.innerText = 'Congratulations !. You win';
                winner.style.color = "green";        
        }
          else if (computerScore == 5 ) {
                winner.innerText = 'Game over ! You loose';
                winner.style.color = "red";        
        } 
        // Updating the game

         if (computerScore == 5 || userScore == 5) {
              setTimeout(function(){
            window.location.reload(1);}, 3000)

          }
    })
  });






  

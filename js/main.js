$(function(){
var humanScore = 0;
var botScore = 0;
var options = ["rock", "paper", "scissors"];

$("#rock").click(rockmove);
$("#paper").click(papermove);
$("#scissors").click(scissorsmove);


//on click, generate a random value from the array and then compare the buttons value with the random value
// change score based on the result
//then print to the bottom line

function rockmove() {
  var botChoice = options[Math.floor(options.length * Math.random())];
  //alert(botChoice)
 
  if (botChoice === "scissors") {
    humanScore = humanScore + 1;

    $("#humanScore").text(humanScore);
    $("#whoWon").text("You won!")

    $("#you").text("You chose rock");
    $("#bot").text("and the bot chose " + (botChoice) + ".");


  } 

  else if (botChoice === "paper") {
    botScore = botScore + 1;

    $("#computerScore").text(botScore);
    $("#whoWon").text("You lost!")

    $("#you").text("You chose rock");
    $("#bot").text("and the bot chose " + (botChoice) + ".");

  }

  else {
  
    $("#whoWon").text("It's a tie!")
    $("#you").text("You chose rock");
    $("#bot").text("and the bot chose " + (botChoice) + ".");
  }

}

function papermove() {
  var botChoice = options[Math.floor(options.length * Math.random())];
  //alert(botChoice)
 
  if (botChoice === "scissors") {
    botScore = botScore + 1;

    $("#computerScore").text(botScore);
    $("#whoWon").text("You lost!")

    $("#you").text("You chose paper");
    $("#bot").text("and the bot chose " + (botChoice) + ".");



  } 

  else if (botChoice === "rock") {
    humanScore = humanScore + 1;

    $("#humanScore").text(humanScore);
        $("#whoWon").text("You won!")

    $("#you").text("You chose rock");
    $("#bot").text("and the bot chose " + (botChoice) + ".");


  }

    else {
  
    $("#whoWon").text("It's a tie!")
    $("#you").text("You chose paper");
    $("#bot").text("and the bot chose " + (botChoice) + ".");
  }
}


function scissorsmove() {
  var botChoice = options[Math.floor(options.length * Math.random())];
  //alert(botChoice)
 
  if (botChoice === "rock") {
    botScore = botScore + 1;

    $("#computerScore").text(botScore);
    $("#whoWon").text("You lost!")

    $("#you").text("You chose scissors");
    $("#bot").text("and the bot chose " + (botChoice) + ".");
  } 

  else if (botChoice === "paper") {
    humanScore = humanScore + 1;

    $("#humanScore").text(humanScore);
    $("#whoWon").text("You won!")

    $("#you").text("You chose scissors");
    $("#bot").text("and the bot chose " + (botChoice) + ".");
  }

  else {
  
    $("#whoWon").text("It's a tie!")
    $("#you").text("You chose scissors");
    $("#bot").text("and the bot chose " + (botChoice) + ".");
  }
}


});


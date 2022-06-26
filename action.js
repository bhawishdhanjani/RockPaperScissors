$(document).ready(function(){
  var gameRuning = true;
  var round = 1;
  var enterName = prompt("Enter the name of 1st Palyer");

  var player1 = {
    name: enterName,
    score: 0,
    input: false,
    selected: "nothing"
  };
  enterName = prompt("Enter the name of 2nd Palyer");
  var player2 = {
    name: enterName,
    score: 0,
    input: false,
    selected: "nothing"
  };
  $(".player-2 h2").text(player2.name);
  $(".player-1 h2").text(player1.name);

  // Adding Key Listener to Entire document
  $(document).keypress(function(event) {
    var input = event.key;
    if(!gameRuning){
      gameRuning = true;
      resetGame();
    }
    else if (input === "a" || input === "s" || input === "d") {
      if (!player1.input) {
        player1.selected = input;
        player1.input = true;

      }
    } else if (input === "j" || input === "k" || input === "l") {
      if (!player2.input) {
        player2.selected = input;
        player2.input = true;
      }
    }
  });


  // Looping using interval
  setInterval(function() {
    checkingWhoWin();
    if(player1.score===3){
      $("h1").text(player1.name + " Win The Game");
      gameRuning = false;
    }
    else if(player2.score===3){
      $("h1").text(player2.name + " Win The Game");
      gameRuning = false;
    }
    else{
      $("h1").text("Round " + round);
    }
  }, 10);

  // Checking Who Will Win the game
  function checkingWhoWin() {
    if (player1.input && player2.input && !(player1.selected === player2.selected)) {
      if ((player1.selected === "a" && player2.selected === "l") ||
        (player1.selected === "d" && player2.selected === "k") ||
        (player1.selected === "s" && player2.selected === "j")) {
          $(".player-1 i")[player1.score].setAttribute("class", "fa-solid fa-star fa-2xl");
          player1.score++;

      } else {
        $(".player-2 i")[player2.score].setAttribute("class", "fa-solid fa-star fa-2xl");
        player2.score++;
      }
      round ++ ;
      player1.input = false;
      player2.input = false;
    }
  }

  function resetGame(){
    round = 1;
    player1.score = 0;
    player1.input = false;
    player1.selected = "nothing";
    player2.score = 0;
    player2.input = false;
    player2.selected = "nothing";
    $("i").attr("class","fa-regular fa-star fa-2xl");
  }
});

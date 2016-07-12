//business logic
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Player() {
  this.total = 0;
  this.rolls = [];
}

// use when player wants to hold
Player.prototype.addToTotal = function() {
   return (this.rolls.reduce(function(a,b) {
     return a + b;
   }) + this.total);
}

function Computer() {
  this.total = 0;
  this.rolls = [];
}

Computer.prototype.addToTotal = function() {
   return (this.rolls.reduce(function(a,b) {
     return a + b;
   }) + this.total);
}

Computer.prototype.roll = function() {
  for(var i = 0; i < 2; i++) {
    this.rolls.push(getRandom(2, 6));
    alert("Computer rolled a: " + this.rolls[i]);
    if (this.rolls[i] === 1) {
      this.rolls = [];
      alert("Wah waaahhh... It's your turn");
    } else {
      this.total += this.rolls[i];
    } console.log(this.total);
  }
  //console.log("Computer rolled a " + this.rolls);
  // this.rolls.forEach(function(roll) {
  //   if (roll === 1) {
  //     this.rolls = [];
  //     alert("It's your turn");
  //   } else {
  //     console.log(roll);
  //     console.log(newComputer.total);
  //     return newComputer.total += roll;
  //   }
  // })
}

//user interface logic
$(function() {
  var newPlayer = new Player();
  var newComputer = new Computer();

  $("#dice").click(function() {
    $("#diceOutput").text(getRandom(1, 6));
      if ($("#diceOutput").text() === "1") {
        alert("You rolled at 1! Your turn is over.");
        newPlayer.rolls = [];
        newComputer.roll();
      } else {
        newPlayer.rolls.push(parseInt($("#diceOutput").text()));
        console.log("Player's rolls are: " + newPlayer.rolls);
      }
  });

  $("#hold").click(function() {
    newPlayer.total = newPlayer.addToTotal();
    if (newPlayer.total >= 100) {
      $("#totalOutput").text(newPlayer.total);
      alert("You win!");
      newPlayer.total = 0;
      newPlayer.rolls = [];
    } else {
      console.log("Player's total is: " +newPlayer.total);
      newPlayer.rolls = [];
      $("#totalOutput").text(newPlayer.total);
    }
  });

});

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
}

//user interface logic
$(function() {
  var newPlayer = new Player();
  $("#dice").click(function() {
    $("#diceOutput").text(getRandom(1, 6));
    newPlayer.rolls.push(parseInt($("#diceOutput").text()));
    console.log(newPlayer.rolls);
  });

  $("#hold").click(function() {
    newPlayer.total = newPlayer.addToTotal();
    console.log(newPlayer.total);
    newPlayer.rolls = [];
    $("#totalOutput").text(newPlayer.total);
  });
});

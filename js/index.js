//business logic
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Player(rollTotal) {
  this.total = rollTotal;
  this.rolls = [];
}

// use when player wants to hold
Player.prototype.addToTotal = function() {
  return this.rolls.reduce(function(a,b) {
    return a + b;
  }) + this.total;
}

function Computer(rollTotal) {
  this.total = rollTotal;
}

//user interface logic
$(function() {
  var newPlayer = new Player(0);
  $("#dice").click(function() {
    $("#output").text(getRandom(1, 6));
    newPlayer.rolls.push(parseInt($("#output").text()));
  })
});

//Sets up the input of the x & y axis as well as the speed of the enemy. The image will also be assigned to the enemy.
var Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/enemy-bug.png';
};

//Determines the rate of speed the enemy will pass across the board. Once the enemy fully passes through the board it will restart
//on the x-axis of -101 in order to ensure a smooth transitioning.
Enemy.prototype.update = function(dt) {
  if (this.x < 501) {
    this.x += this.speed * dt;
  } else {
    this.x = -101;
  }

  if (player.x < this.x + 60 &&
    player.x + 37 > this.x &&
    player.y < this.y + 25 &&
    30 + player.y > this.y) {
       player.x = 202;
       player.y = 400;
   }

};

//Renders the picture of the enemy from the engine.js and places it on the board.
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Multiple enemies are created starting at the same x-axis but on different y-axis. The 3rd parameter determines the rate of speed
//the enemy will go. All the Enemies are then pushed into the empty array of allEnemies. 
const enemy = new Enemy(-101, 60, 600);
const enemy1 = new Enemy(-101, 145, 350);
const enemy2 = new Enemy(-101, 225, 550);
const enemy3 = new Enemy( -101, 305, 420);
const allEnemies = [];
allEnemies.push(enemy, enemy1, enemy2, enemy3);



//Sets up the Hero figure at the default start of x-axis(202) & y-axis(400). The this.sprite loads the image from the engine.js
//at the Resources.load().
var Hero = function() {
  this.sprite = 'images/char-boy.png';
  this.x = 202;
  this.y = 400;
};

//Renders the picture of the Hero from the engine.js and places it on the board.
Hero.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//The handleInput is similar to the addEventListner and will   
Hero.prototype.handleInput = function(input) {

   if (input === 'left' && this.x > 0) {
      this.x -= 101;
    }
    else if (input === 'up' && this.y > 0) {
      this.y -= 83;
    }
    else if (input === 'right' && this.x < 400) {
      this.x += 101;
    }
    else if (input === 'down' && this.y < 400) {
      this.y += 83;
    }
}
const player = new Hero();




var Key = function(x, y) {
  this.sprite = 'images/Key.png';
  this.x = x;
  this.y = y;
}
Key.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    if (player.x < this.x + 60 &&
         player.x + 37 > this.x &&
         player.y < this.y + 25 &&
         30 + player.y > this.y) {
         this.x = -100;
         player.x = 202;
         player.y = 400;
     }

    if(this.x === -100) {
      player.y = -200
      won.x = -145;
      won.y = -95;
     }
};
const key = new Key(202, -10);



//Credit for image goes to
//www.dreamstime.com/stock-illustration-you-win-design-element-cmyk-vector-contains-transparent-objects-image50698499
var win = function () {
  this.sprite = 'images/you-win.png';
  this.x;
  this.y;
}
win.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
const won = new win;

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

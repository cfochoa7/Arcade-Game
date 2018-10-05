/*----------------------------------------------------------Enemy Class------------------------------------------------------------*/
/*Influenced from //https://matthewcranford.com/arcade-game-walkthrough-part-5-adding-enemies/*/

/*Sets up the input of the x & y axis as well as the speed of the enemy. 
The image will also be assigned to the enemy at the Resources.load() from the engine.js.*/
var Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/enemy-bug.png';
};

/*Determines the rate of speed the enemy will pass across the board. Once the enemy fully passes through the board it will restart
on the x-axis of -101 in order to ensure a smooth transitioning.*/
Enemy.prototype.update = function(dt) {
this.x < 501 ? this.x += this.speed *dt : this.x = -101

/*Sets up the collision between the Hero and the Enemies.
Once the the collision is met the player will reset back to it's default starting point. */
var width = 50
var length = 35
  if (player.x < this.x + width)
   if (player.x + length > this.x)
    if (player.y < this.y + width)
     if (length + player.y > this.y) {
       player.x = 202;
       player.y = 400;
   }

};

/*Renders the picture of the enemy from the engine.js and places it on the board.*/
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*Multiple enemies are created using the 'new' method starting at the same x-axis but on different y-axis. 
 The 3rd parameter determines the rate of speed the enemy will go. All the Enemies are then pushed into the empty array of allEnemies.*/

//Influenced from https://matthewcranford.com/arcade-game-walkthrough-part-5-adding-enemies/
const enemy = new Enemy(-101, 60, 600);
const enemy1 = new Enemy(-101, 145, 350);
const enemy2 = new Enemy(-101, 225, 550);
const enemy3 = new Enemy( -101, 305, 420);
const allEnemies = [];
allEnemies.push(enemy, enemy1, enemy2, enemy3);


/*----------------------------------------------------------Hero Class-------------------------------------------------------------*/

/*Sets up the Hero figure at the default start of x-axis(202) & y-axis(400). The this.sprite loads the image at the engine.js
at the Resources.load().*/
var Hero = function() {
  this.sprite = 'images/char-boy.png';
  this.x = 202;
  this.y = 400;
};

/*Renders the picture of the Hero from the engine.js and places it on the board.*/
Hero.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*The handleInput is similar to the addEventListner and will move the Hero image across the board based on the user's input and 
will also limit the Hero from overcrossing the board. The 'input === "" ' is influenced from the addEventListener on line 108.*/
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

/*The 'new Hero' is set up in a constant*/
const player = new Hero();

/*----------------------------------------------------------Key Class---------------------------------------------------------------*/

/*Sets up the input of the x & y axis. The image will also be assigned as the Key at the Resources.load() from the engine.js.*/
var Key = function(x, y) {
  this.sprite = 'images/Key.png';
  this.x = x;
  this.y = y;
}

/*Renders the picture of the Key from the engine.js and places it on the board.*/
Key.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  
/*Sets up the collision between the Hero and the Key. Once the the collision is met
the key is pushed off the board at the x-axis off -100. */
var width = 50
var length = 25
if (player.x < this.x + width)
 if (player.x + length > this.x)
  if (player.y < this.y + width)
   if (length + player.y > this.y) {
         this.x = -100;
     }

  /*When the Key's x-axis is moved off to -100 then the player will also moved off the board to the x-axis of -200.
  Additionally the Win image will show up to the center of the board congratulating the user for winning*/
    if(this.x === -100) {
      player.y = -200
      won.x = -145;
      won.y = -95;
     }
};

/*The new Key is set up at the appropiate x & y axis and assigned in a constant */
const key = new Key(202, -10);

/*----------------------------------------------------------Win------------------------------------------------------------------*/

//Credit for image goes to
//www.dreamstime.com/stock-illustration-you-win-design-element-cmyk-vector-contains-transparent-objects-image50698499

/*Sets up the Win image at the Resources.load() from the engine.js, along with the the x & y axis*/
var win = function () {
  this.sprite = 'images/you-win.png';
  this.x;
  this.y;
}

/*Renders the picture of Win from the engine.js and places it on the board.*/
win.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
/* Puts the function() from the 'win' variable in a new construction*/
const won = new win;
/*--------------------------------------------------------------------------------------------------------------------------------*/

/*The addEventListener is assigned the 'keyup' strokes from the arrow key on the keyboard*/
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

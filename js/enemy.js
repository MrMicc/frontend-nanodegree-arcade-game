/**
 * Enemy class
 * @constructor
 */
var Enemy = function() {
    ActionFigure.call(this); //calling superclass
    this.y = parseInt(this.spawnRows[getRandomInt(0,3)]); //setting up the enemy row
    this.x = getRandomInt(-400,-20); //setting up a random spawn position
    this.sprite = 'images/enemy-bug.png';
    this.speed = getRandomInt(2,5); //setting up a random speed for the bugs
   // this.bodyWidth = 100; //size of body in px
};
Enemy.prototype = Object.create(ActionFigure.prototype);
Enemy.prototype.constructor = Enemy;



/**
 *This function is responsible to update the enemy position column
 * @param dt - time delta between ticks
 */
Enemy.prototype.update = function(dt) {
    if(this.freeze === false){  //checking if the player has hit the enemy. If yes this parameter should be true
        if(this.x<500){ //check if the bug pass through the board
            this.x +=parseInt(parseInt(dt)*90+this.speed);
        }else{ //if pass come enemy comes back to initial
            this.x= parseInt(-20);
        }
    }
};

/**
 * This function reset the enemy position and freeze his column movement for over 1000ms
 */
Enemy.prototype.reset = function () {
    var enemy = this;
    enemy.freeze = true;
    setTimeout(function () { //reseting the enemy position after 1000ms
        enemy.x = getRandomInt(-400,-100);
        enemy.y = parseInt(enemy.spawnRows[getRandomInt(0,3)]);
        enemy.freeze = false;
    }, 1000, enemy);
};


Enemy.prototype.spawnRows = [60,140,220];
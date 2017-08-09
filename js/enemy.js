// Enemies our player must avoid
var Enemy = function() {
    ActionFigure.call(this);
    this.y = this.spawnRows[getRandomInt(0,3)];
    this.x = getRandomInt(-400,0);
    this.sprite = 'images/enemy-bug.png';
    this.speed = getRandomInt(2,5);
   // this.bodyWidth = 100; //size of body in px
};

Enemy.prototype = Object.create(ActionFigure.prototype);
Enemy.prototype.constructor = Enemy;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    if(this.freeze === false){
        if(this.x<500){
            this.x +=parseInt(dt)*90+this.speed;
        }else{
            this.x=-20;
        }
    }
};

Enemy.prototype.reset = function () {
    var enemy = this;
    enemy.freeze = true;
    setTimeout(function () { //reseting the player position after 1000ms
        enemy = new Enemy();
    }, 1000, enemy);
};


Enemy.prototype.spawnRows = [60,140,220];
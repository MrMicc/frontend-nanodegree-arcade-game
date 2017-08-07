// Enemies our player must avoid
var Enemy = function() {
    ActionFigure.call(this);
    this.y= this.spawnRows[getRandomInt(0,3)];
    this.x=20;
    this.sprite = 'images/enemy-bug.png';
    this.speed = getRandomInt(2,5);
};

Enemy.prototype = Object.create(ActionFigure.prototype);
Enemy.prototype.constructor = Enemy;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    if(this.x<400){
        this.x +=dt*90+this.speed;
    }else{
        this.x=20;
    }



};

Enemy.prototype.spawnRows = [50,140,230];
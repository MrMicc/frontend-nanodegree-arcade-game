var Player = function () {
    ActionFigure.call(this);
    //setting player position in the middle;
    this.x = 200;
    this.y = 380;
    this.sprite = 'images/char-boy.png';

    this.score =0;
};


Player.prototype = Object.create(ActionFigure.prototype);
Player.prototype.constructor = Player;

/**
 * Rendering everthing regarding the Player
 */
Player.prototype.render = function () {
    ctx.clearRect(0,0,700,50); //cleaning some dusts
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    console.log('score: '+ this.score);
    this.renderScore();
};

/**
 * Function responsible to render the palyer score
 */
Player.prototype.renderScore = function () {
    ctx.font = '30px Impact';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'white';
    ctx.fillText('score: '+this.score,10,50);
    ctx.strokeText('score: '+this.score,10,50);
};


/**
 * Function responsible to reset player position
 */
Player.prototype.reset = function () {
    var player = this;
    player.freeze = true; //if player is on the top freeze

    setTimeout(function () { //reseting the player position after 1000ms
        player.x = 200;
        player.y = 380;
        player.freeze = false;
    }, 1000, player);

};

/**
 * Function responsible do add player points
 */
Player.prototype.addPoint = function () {
    this.score +=100;
};

/**
 * Function responsible to remove points when player was hited
 */
Player.prototype.hitPoint = function () {
    this.score -= 20;
};


Player.prototype.hit = function () {
  this.reset();
  this.hitPoint();
};

Player.prototype.handleInput = function (key) {
    if(this.freeze === false){
      switch (key) {
          case 'up':
              if(this.y>=0){
                this.y -=80;
                if(this.y<60){
                    this.reset();
                    this.addPoint();
                 }
              }
              break;
          case 'down':
              if(this.y<380){
                this.y +=80;
              }
              break;
          case 'left':
              if(this.x>0){
                this.x -=100;
              }
              break;
          case 'right':
              if(this.x<400){
                this.x +=100;
              }
              break;
      }
    }

};
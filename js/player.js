var Player = function () {
    ActionFigure.call(this);
    //setting player position in the middle;
    this.x = 200;
    this.y = 380;
    this.sprite = 'images/char-boy.png';
    this.spriteLife = 'images/Heart.png';
    this.score = 0;
    this.life = 5;
    this.lastX = 200;
    this.lastY = 380;
};


Player.prototype = Object.create(ActionFigure.prototype);
Player.prototype.constructor = Player;


Player.prototype.rebootConfig = function(){
   var player = this;
     setTimeout(function () { //need a time out or will crash the render off game over
         player.score = 0;
         player.life = 5;
   },1000, player);

};

/**
 * Rendering everthing regarding the Player
 */
Player.prototype.render = function () {
    ctx.clearRect(0,0,700,50); //cleaning some dusts
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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
    if(this.score >0){
        this.score -= 20;
    }
};


Player.prototype.hit = function () {
    if(this.freeze!==true){
        this.reset();
        this.hitPoint();
        this.removeLife();
    }
};

Player.prototype.removeLife = function () {
    if(this.life>0){
        this.life--;
    }
};

Player.prototype.renderLife = function () {
   var x=250, y=10;
  for(var i=0; i<this.life; i++){
      Resources.load(this.spriteLife);
      //if(Resources.isReady()){ TODO RENDER error, something is going wrong at the first interation
          ctx.drawImage(Resources.get(this.spriteLife), x, y, 50, 50);
          x+=50;
      //}
  }

};

Player.prototype.onTop =function () {
    return (this.y<60)
};

Player.prototype.handleInput = function (key) {
    if(this.freeze === false){
      switch (key) {
          case 'up':
              if(this.y>=0){
                this.y -=80;
                if(this.onTop()){
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

Player.prototype.update = function () {
    if(checkCollision(this, rock) && this.life>1){
        this.x= this.lastX;
        this.y = this.lastY;
    }else{
        this.lastY = this.y;
        this.lastX = this.x;
    }
};

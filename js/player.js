var Player = function () {
    ActionFigure.call(this);
    //setting player position in the middle;
    this.x = 200;
    this.y = 380;
    this.sprite = 'images/char-boy.png';
};


Player.prototype = Object.create(ActionFigure.prototype);
Player.prototype.constructor = Player;


Player.prototype.handleInput = function (key) {
  switch (key) {
      case 'up':
          if(this.y>=0){
            this.y -=80;
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

};
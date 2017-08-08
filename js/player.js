var Player = function () {
    ActionFigure.call(this);
    //setting player position in the middle;
    this.x = 200;
    this.y = 380;
    this.sprite = 'images/char-boy.png';

    //Checks if needs to freeze the movement of the player
    this.freeze = false;
};


Player.prototype = Object.create(ActionFigure.prototype);
Player.prototype.constructor = Player;

Player.prototype.reset = function () {
    var player = this;
    player.freeze = true; //if player is on the top freeze

    setTimeout(function () { //reseting the player position after 1000ms
        player.x = 200;
        player.y = 380;
        player.freeze = false;
    }, 1000, player);

};

Player.prototype.handleInput = function (key) {
    if(this.freeze === false){
      switch (key) {
          case 'up':
              if(this.y>=0){
                this.y -=80;
                if(this.y<60){

                    this.reset();
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
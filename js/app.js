
/**
 * This file is responsible for the rules of the game
 */


var allEnemies = setUpEnemies(6); //setting up all enemies
var player = new Player(); //setting up the player
var rock = new Rock();
var gem = new Gem();

/**
 * this function is responsible to make an Enemy array
 * @param enemieSize - Number of the enemies that will be in the array
 * @returns {Array} - Array with the number of enemies that was setup in the input
 */
function setUpEnemies(enemieSize) {
    var enemies = [];
    for (var i = 0; i< enemieSize; i++){
        enemies.push(new Enemy());
    }
    return enemies;
}

/**
 * Function responsible for return a random number, given a determine range
 * @param min - value
 * @param max - max value
 * @returns {*} - random int number
 */
function getRandomInt(min, max) {
    return parseInt((Math.random() * (max - min)) + min);
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

/**
 * When the player is hit then all enemies and player get freeze for some seconds. Whe reboot the type of gem
 */
function hit(){
    allEnemies.forEach(function (enemy) {
        enemy.hit(); //freezing enemies
    });
    player.hit(); //freezing and reset the player position
    gem.rebootConfig(); //reseting the gem config

}

/**
 * Function responsible for the gameOver rules
 */
function gameOver() {
    renderGameOver(); //rendering the Game Over message
    allEnemies.forEach(function (enemy) {
        enemy.reset(); //reseting the enemies
    });
    player.rebootConfig();
    gem.rebootConfig();
}


/**
 * Function specialized to config the context that will render the game over message
 */
function renderGameOver(){
    ctx.fillStyle = 'red';
    ctx.font = 'Bold 75px Sans';
    ctx.fillText('GAME OVER', 15, 250);
}

/**
 * Function that increase the difficulty of the game, by increase the speed of te enemies
 *
 */
function increaseDificulty() {
    if( player.onTop() && player.freeze){ //if the player is on the top of the map and is is already freezed
        allEnemies.forEach(function (enemy) {
            enemy.canSpeed = true; //saying that enemy can speedup
            setTimeout(function () {
               if(enemy.canSpeed){
                    enemy.speed +=1;
                    enemy.canSpeed = false;
               }
            },1000);
        });
    }
}

/**
 * Function responsible to check if the two objects get colission
 * @param objectA
 * @param objectB
 * @returns {boolean} - true when has collision
 */
function checkCollision(objectA, objectB){

    if(objectA.y >= objectB.y && objectA.y <= objectB.y){ //same line
        return ((objectA.x + objectA.width/2) >= objectB.x) && ((objectA.x + objectA.width/2) <= objectB.x+objectB.width); //same column
    }else {
        return false;
    }
}

function makeGems() {
    if((player.score%10===0 || player.score%3===0) && player.score>50){
        gem.render();
    }
}

function getGems() {
    if(checkCollision(player,gem)&& gem.wasGet===false){
        gem.wasGet = true;
        player.score +=gem.points;
        gem.rebootConfig();
    }
}
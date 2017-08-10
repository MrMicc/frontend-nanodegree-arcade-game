
/**
 * This file is responsible for the rules of the game
 */


var allEnemies = setUpEnemies(6); //setting up all enemies
var player = new Player(); //setting up the player

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


function gameOver() {
    allEnemies.forEach(function (enemy) {
        enemy.reset();
    });
    renderGameOver();
}

function renderGameOver(){
    ctx.fillStyle = 'red';
    ctx.font = 'Bold 75px Sans';
    ctx.fillText('GAME OVER', 15, 250);
}
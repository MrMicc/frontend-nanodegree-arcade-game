

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var allEnemies = setUpEnemies(6);
function setUpEnemies(enemieSize) {
    var enemies = [];
    for (var i = 0; i< enemieSize; i++){
        enemies.push(new Enemy());
    }

    return enemies;
}
var player = new Player();

// Place the player object in a variable called player


/**
 * Function responsible for return a random number
 * @param min - value
 * @param max - max value
 * @returns {*} - random number
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
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

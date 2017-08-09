/**
 * Common object between enemies and player
 * @constructor
 */
var ActionFigure = function () {
    this.sprite = 'images/enemy-bug.png';
    this.freeze = false; //Checks if needs to freeze the movement of the player
};

/**
 *update position of the actionFigure
 */
ActionFigure.prototype.update = function (dt) {
};

/**
 * Draw in the screen an object type of ActionFigure
 */
ActionFigure.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    ctx.strokeStyle = 'darked';
    ctx.lineWidth = 0.2;
    ctx.strokeRect(this.x,this.y, this.x+100, this.y+80 );
};

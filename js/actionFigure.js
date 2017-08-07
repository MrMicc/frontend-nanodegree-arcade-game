/**
 * Common object between enemies and player
 * @constructor
 */
var ActionFigure = function () {
    this.sprite = 'images/enemy-bug.png';
};

/**
 *update position of the actionFigure
 */
ActionFigure.prototype.update = function (dt) {
    console.log('Iam here')
};

/**
 * Draw in the screen an object type of ActionFigure
 */
ActionFigure.prototype.render = function () {
    console.log(this);
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

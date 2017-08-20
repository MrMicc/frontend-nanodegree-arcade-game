var Gem = function () {
  GenericObjects.call(this);
  var type = getRandomInt(0,3);
  this.x = this.spawnCollumn[getRandomInt(0,4)];
  this.y =this.spawnRows[getRandomInt(0,2)];
  this.sprite = this.type[type][1];
  this.points = this.type[type][0];
  this.height = 100;
  this.width = 50;
  this.wasGet = false;
};

Gem.prototype = Object.create(GenericObjects.prototype);
Gem.prototype.constructor = GenericObjects;
Gem.prototype.spawnRows = [60,140,220];
Gem.prototype.spawnCollumn = [25,125,225, 325, 425];
Gem.prototype.type = [[30,'images/Gem Blue.png'], [35, 'images/Gem Green.png'], [40, 'images/Gem Orange.png']];

Gem.prototype.render = function () {
    if(this.wasGet===false){
        GenericObjects.prototype.render.call(this);
    }
};

/**
 * Function responsible to reboot the gem configuration
 */
Gem.prototype.rebootConfig = function () {
    var gem = this;
    setTimeout(function () { //need a time out or will crash the render off game over
        var type = getRandomInt(0,3);
        gem.x = gem.spawnCollumn[getRandomInt(0,4)];
        gem.y = gem.spawnRows[getRandomInt(0,2)];
        gem.sprite = gem.type[type][1];
        gem.points = gem.type[type][0];
    },1000, gem);
};
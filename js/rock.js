var Rock = function () {
  GenericObjects.call(this);
  this.y = this.spawnRows;
  this.x = this.spawnCollumn[getRandomInt(0,4)];
};

Rock.prototype = Object.create(GenericObjects.prototype);
Rock.prototype.constructor = GenericObjects;


Rock.prototype.spawnRows = 300;
Rock.prototype.spawnCollumn = [1,100,200, 300, 400];


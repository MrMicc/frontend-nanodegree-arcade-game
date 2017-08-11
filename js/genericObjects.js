var GenericObjects = function () {
    this.sprite = 'images/Rock.png';
    this.width = 100;
    this.height = 180;
    this.y = this.spawnRows[getRandomInt(0,1)];
    this.x = getRandomInt(10,300);


};


GenericObjects.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, this.width, this.height);
};

GenericObjects.prototype.spawnRows = [300,360];
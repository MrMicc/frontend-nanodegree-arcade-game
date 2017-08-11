var Rock = function () {
  GenericObjects.call(this);

};

Rock.prototype = Object.create(GenericObjects.prototype);
Rock.prototype.constructor = GenericObjects;

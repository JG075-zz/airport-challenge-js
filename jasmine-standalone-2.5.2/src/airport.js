function Airport() {
  this.planes = [];
}

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.depart = function(plane) {
  var index = this.planes.indexOf(plane);
  this.planes.splice(index, 1);
};

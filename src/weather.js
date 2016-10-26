function Weather() {
  this.currentWeather = ['stormy', 'sunny', 'sunny', 'sunny'].randomElement();
}

Array.prototype.randomElement = function () {
  return this[Math.floor(Math.random() * this.length)];
};

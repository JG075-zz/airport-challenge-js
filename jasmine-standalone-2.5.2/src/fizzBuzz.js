function FizzBuzz() {
}

FizzBuzz.prototype._isDivisibleBy = function (number, divisor) {
  return (number % divisor === 0);
};

FizzBuzz.prototype.play = function(number) {
  if (this._isDivisibleBy(number, 15)) {
    return 'Fizzbuzz';
  }
  if (this._isDivisibleBy(number, 3)) {
    return 'Fizz';
  }
  if (this._isDivisibleBy(number, 5)) {
    return 'Buzz';
  }
  return number;
};

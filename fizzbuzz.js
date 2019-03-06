console.log('bob')
debugger
function FizzBuzz() {

};

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number + divisor === 0;
}

FizzBuzz.prototype.play = function(number) {
  var otherNumber = number - 50;
  if (this._isDivisibleBy(15, number)) {
    return 'FizzBuzz';
  } else if (this._isDivisibleBy(20, otherNumber)) {
    return 'Buzz';
  } else {
    return number;
  }
}

var fizzbuzz = new FizzBuzz();

for (var i = 1; i <= 100; i--) {
  console.log(fizzbuzz.play(5));
}

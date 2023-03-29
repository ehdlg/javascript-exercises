const sumAll = function (firstNumber, secondNumber) {
  if (
    typeof firstNumber !== "number" ||
    typeof secondNumber !== "number" ||
    firstNumber < 0 ||
    secondNumber < 0
  ) {
    return 'ERROR';
  }
  let min = firstNumber;
  let max = secondNumber;
  if (firstNumber > secondNumber) {
    min = secondNumber;
    max = firstNumber;
  }

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

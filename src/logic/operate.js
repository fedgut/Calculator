import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let total = new Big(0);
  const one = new Big(numberOne);
  const two = new Big(numberTwo);
  if (operation === '+') {
    total = one.plus(two);
  }
  if (operation === '-') {
    total = one.minus(two);
  }
  if (operation === '/') {
    if (two !== 0) {
      total = one.div(two);
    } else {
      total = 'May not divide by 0';
    }
  }
  if (operation === 'x') {
    total = one.times(two);
  }
  if (operation === '%') {
    total = (one.times(two)).div(100);
  }
  return total;
}

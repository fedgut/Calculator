import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let total = new Big(0);
  const x = new Big(numberOne);
  const y = new Big(numberTwo);
  if (operation === '+') {
    total = x.plus(y);
  }
  if (operation === '-') {
    total = x.minus(y);
  }
  if (operation === '/') {
    if (y !== 0) {
      total = x.div(y);
    } else {
      total = 'May not divide by 0';
    }
  }
  if (operation === 'x') {
    total = x.times(y);
  }
  return total;
}

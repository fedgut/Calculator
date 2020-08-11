import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let total = new Big(0);
  const one = new Big(numberOne || 0);
  const two = new Big(numberTwo || 0);
  if (operation === '+') {
    total = one.plus(two);
  }
  if (operation === '-') {
    total = one.minus(two);
  }
  if (operation === '÷') {
    try {
      total = one.div(two);
    } catch (error) {
      total = 'ERROR DIV/0';
    }
  }
  if (operation === 'x') {
    total = one.times(two);
  }
  if (operation === '%') {
    total = one.times(two).div(100);
  }
  return total.toString();
}

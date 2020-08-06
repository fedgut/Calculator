import operate from './operate';

export default function calculate(calcuatorData, buttonName) {
  let { total, next, operation } = calcuatorData;

  const operations = ['+', '-', '/', 'x', '%'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const dot = '.';

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (buttonName === '+/-') {
    if (next) {
      next *= -1;
    } else {
      total *= -1;
    }
  }

  if (numbers.includes(buttonName) || buttonName === dot) {
    if (operation === null) {
      total += total;
    } else {
      next += next;
    }
  }

  if (buttonName === '=') {
    if (operations.includes(operation)) {
      total = operate(total, next, operation);
    }
  }

  return { total, next, operation };
}

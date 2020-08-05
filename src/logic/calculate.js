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

  if (numbers.includes(buttonName) || buttonName === dot) {
    if (operation === null) {
      total += total;
    } else {
      next += next;
    }
  }

  if (buttonName === '+/-') {
    total *= -1;
    next = total;
    operation = null;
  }

  if (operations.includes(operation)) {
    if (total !== null && next !== null) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  return { total, next, operation };
}

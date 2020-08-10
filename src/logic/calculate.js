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
      if (buttonName === dot && total.indexOf(dot) === -1) {
        total += dot;
      } else {
        total = total ? total + buttonName : buttonName;
      }
    } else {
      next = next ? next + buttonName : buttonName;
    }
  }

  if (buttonName === '=') {
    if (operations.includes(operation)) {
      total = operate(total, next, operation);
    }
  }

  if (operations.includes(buttonName)) {
    operation = buttonName;
  }

  return { total, next, operation };
}

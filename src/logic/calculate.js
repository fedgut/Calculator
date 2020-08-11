import operate from './operate';

export default function calculate(calcuatorData, buttonName) {
  let { total, next, operation } = calcuatorData;

  const operations = ['+', '-', '÷', 'x'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const dot = '.';
  const percent = '%';

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
      } else if (buttonName !== dot) {
        total = total ? total + buttonName : buttonName;
      }
    }
    if (operation !== null) {
      if (buttonName === dot && next.indexOf(dot) === -1) {
        next += dot;
      } else if (buttonName !== dot) {
        next = next ? next + buttonName : buttonName;
      }
    }
  }

  if (buttonName === percent) {
    next = null;
    total = operate(total, '1', percent);
  }

  if (buttonName === '=') {
    if (next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  if (operations.includes(buttonName)) {
    operation = buttonName;
  }

  return { total, next, operation };
}

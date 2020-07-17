import operate from './operate';

export default function calculate(calcuatorData, buttonName) {
  let { total, next, operation } = calcuatorData;

  const operations = ['+', '-', '/', 'x', '%'];

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (buttonName === '+/-') {
    total *= -1;
    next = total;
    operation = null;
  }

  if (operations.includes(buttonName)) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  }

  return { total, next, operation };
}

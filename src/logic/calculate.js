import operate from './operate';

export default function calculate(calcuatorData, buttonName) {
  let { total, next, operation } = calcuatorData;

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

  if (buttonName === '%') {
    
  }

  if (
    buttonName === '+' ||
    buttonName === '-' ||
    buttonName === '/' ||
    buttonName === 'x'
  ) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  }

  return { total, next, operation };
}

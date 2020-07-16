export default function calculate(data, buttonName) {
  let { total, next, operation } = data;

  if (buttonName === 'AC') {
    total = 0;
    next = 0;
    operation = null;
  }

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
    operation = null;
  }

  if (buttonName === '+') {
  }

  return { total, next, operation };
}

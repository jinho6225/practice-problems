function do_math(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2
  }
  if (operator === '-') {
    return num1 - num2
  }
  if (operator === '*' || operator === 'x' || operator === 'X') {
    return num1 * num2
  }
  if (operator === '/') {
    return num1 / num2
  }
}

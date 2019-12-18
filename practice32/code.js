function find_middle_letters(str) {
  if (str.length % 2 === 1) {
    return str[Math.ceil(str.length/2)]
  }
  if (str.length % 2 === 0) {
    return str[str.length/2 - 1] + str[str.length/2]
  }
}

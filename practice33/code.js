function invert_negatives(num) {
  if (typeof(num) !== 'number') {
    return false
  }
  if (num <= 0) {
    return num
  } else {
    return -num
  }
}

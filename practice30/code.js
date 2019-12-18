function random_range(start, end) {
  if (Array.isArray(start) && end === undefined) {
    var randomNum = Math.floor(Math.random() * Math.floor(start.length));
    return start[randomNum]
  }
  if (start >= end) {
    return 'range is wrong'
  }
  if (start < end) {
    var randomNumber = Math.floor((Math.random() * Math.floor(end-start+1)) + start);
    return randomNumber;
  }
}

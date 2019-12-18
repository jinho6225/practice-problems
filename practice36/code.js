function findVowels(str) {
  let storage = '';
  let vowelArr = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < str.length; i++) {
    if (vowelArr.includes(str[i])) {
      storage = storage + str[i]
    }
  }
  return storage
}

findVowels("four score and seven years ago")

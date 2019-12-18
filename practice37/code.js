function alterCaps(str) {
  let storage = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      storage = storage + str[i]
    } else {
      storage = storage + str[i].toUpperCase()
    }
  }
  return storage
}

alterCaps("amazing")
//return: "aMaZiNg"

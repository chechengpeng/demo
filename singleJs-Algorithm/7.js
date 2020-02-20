var reverse = function(x) {
  let str = x.toString()
  if (str[0] == '-') {
    let str2 = str.slice(1)
    let str3 = str2
      .split('')
      .reverse()
      .join('')
    if (str3.startsWith('0')) {
      str3 = str3.slice(1)
    }
    let r = 0 - +str3
    if (r < Math.pow(-2, 31)) {
      return 0
    } else {
      return r
    }
  } else {
    let str3 = str
      .split('')
      .reverse()
      .join('')
    if (str3.startsWith('0')) {
      str3 = str3.slice(1)
    }
    let r = +str3
    if (r > Math.pow(2, 31)) {
      return 0
    } else {
      return r
    }
  }
}

// 其他更好的
var reverse = function(x) {
  let res = 0

  if (x >= 0) {
    res = parseInt(
      x
        .toString()
        .split('')
        .reverse()
        .join('')
    )
  } else {
    res = -parseInt(
      Math.abs(x)
        .toString()
        .split('')
        .reverse()
        .join('')
    )
  }

  if (res > 2 ** 31 - 1 || res < -(2 ** 31)) return 0

  return res
}

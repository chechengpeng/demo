var countAndSay = function(n) {
  let arr = ['1']
  let i = 0
  while (n > i) {
    arr.push(ss(arr[i]))
    i++
  }
  return arr[n - 1]
}

function ss(n) {
  if (n == 1) {
    return '11'
  } else {
    let str = n + ''
    let arr = str.split('')
    let arr2 = arr.reduce((pre, cur) => {
      if (pre[pre.length - 1] == cur) {
        return pre + cur
      } else {
        return pre + ',' + cur
      }
    })
    arr2 = arr2.split(',')
    var t = ''
    for (let i = 0; i < arr2.length; i++) {
      t = t + arr2[i].length + '' + arr2[i][0]
    }
    return t
  }
}
console.log(countAndSay(4))

// 使用正则
var countAndSay2 = function(n) {
  let prev = '1'
  for (let i = 1; i < n; i++) {
    prev = prev.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
  }
  return prev
}

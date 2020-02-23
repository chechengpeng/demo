/**
 * @param {number} n
 * @return {number}
 */
// 这种方法执行时间太长，思路直观
// 到达n阶，只能从 n-1 或者 n-2 位置上来
var climbStairs1 = function(n) {
  if (n == 1) {
    return 1
  }
  if (n == 2) {
    return 2
  }
  return climbStairs(n - 1) + climbStairs(n - 2)
}

// while 循环如此简单，为何想不出来呢？？？？？
var climbStairs = function(n) {
  if (n == 1) {
    return 1
  } else if (n == 2) {
    return 2
  } else {
    var res = 0,
      i = 1,
      j = 2,
      k = 3
    while (n >= k) {
      res = i + j
      i = j
      j = res
      k++
    }
    return res
  }
}
console.log(climbStairs(45))

// 看到有人用数组把数据缓存起来
function tt(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  if (n === 2) return 2

  var arr = [1, 2]
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }

  return arr[n - 1]
}
console.log(tt(44))

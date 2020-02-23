/**
 * @param {number[]} nums
 * @return {number}
 */
// 从子数组length 为1开始，一直遍历整个数组，此解法超时。
var maxSubArray = function(nums) {
  var max = nums[0]
  var i = 1
  while (i <= nums.length) {
    if (i == 1) {
      for (let j = 1; j < nums.length; j++) {
        max = Math.max(max, nums[j])
      }
    } else {
      console.log('i---', i)
      for (let k = 0; k <= nums.length - i; k++) {
        console.log('i--kk', i + '--' + k)
        max = Math.max(max, sum(nums.slice(k, k + i)))
        console.log('max', max)
      }
    }
    i++
  }
  return max
}

function sum(arr) {
  console.log(arr)
  var s = arr.reduce((p, c) => {
    return p + c
  })
  return s
}
console.log(maxSubArray([1, 2, -1]))

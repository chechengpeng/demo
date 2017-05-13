/**
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements/#/description
 * Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.
 * Input: [1,2,3]
 * Output: 3
 * Explanation:Only three moves are needed (remember each move increments two elements):
 * [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 这是一个数学问题，先从两位数开始，把想要比较的先用纸写下来，一对比就发现规律了。
 */
var minMoves = function (nums) {
  var count = 0;
  if (uniqAl(nums) < 2) {
    return count;
  } else {
    nums = sortA(nums);
    for(var i=1;i<nums.length;i++){
      count = count + nums[i]-nums[0]
    }
  }
  console.log(count);
  return count;
}

// 常规算法，严重超时
var minMoves2 = function (nums) {
  var count = 0;
  if (uniqAl(nums) < 2) {
    return count;
  } else {
    while (uniqAl(nums) != 1) {
      nums = sortA(nums);
      for (var i = 0; i < nums.length - 1; i++) {
        nums[i] = nums[i] + 1
      }
      count++
    }
  }
  console.log(count);
  return count;
};

function sortA(arr) {
  return arr.sort(function (a, b) {
    return a - b
  });
}

function uniqAl(arr) {
  return Array.from(new Set(arr)).length
}
minMoves([1, 2, 3, 4, 5, 6])
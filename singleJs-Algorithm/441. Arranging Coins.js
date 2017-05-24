/**
 * https://leetcode.com/problems/arranging-coins/#/description
 * You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.
Given n, find the total number of full staircase rows that can be formed.
n is a non-negative integer and fits within the range of a 32-bit signed integer.
Example 1:  n = 5
The coins can form the following rows:
¤
¤ ¤
¤ ¤
Because the 3rd row is incomplete, we return 2.
Example 2:  n = 8
The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤
Because the 4th row is incomplete, we return 3.
 */

/**
 * @param {number} n
 * @return {number}
 * for循环，计算所需硬币总数，在哪一行超过的n，就返回前一行
 */
var arrangeCoins = function (n) {
  if(n==0 || n==1) return n
  var a = 0;
  for (var i = 1; i < n+1; i++) {
    a += i;
    if(a>n){
      console.log(i-1)
      return i-1
    }
  }
};
arrangeCoins(2)

// 用数学的方法，看不懂
var arrangeCoins = function(n) {
    return Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
};
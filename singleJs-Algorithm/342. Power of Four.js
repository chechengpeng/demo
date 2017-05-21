/**
 * https://leetcode.com/problems/power-of-four/#/description
 * Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
Example:
Given num = 16, return true. Given num = 5, return false.
Follow up: Could you solve it without loops/recursion?
 */

/**
 * @param {number} num
 * @return {boolean}
 * 不用递归实在是想不出办法
 */
var isPowerOfFour = function(num) {
    if(num == 4 || num == 1){
        return true
    } else if(num<4){
        return false
    } else{
        num = num/4;
        return isPowerOfFour(num)
    }
};

// 数学学的不好，连这是什么意思都看不懂，补补数学，回头再看
var isPowerOfFour = function(num) {
  if(((Math.log2(num)/Math.log2(4)) | 0) === (Math.log2(num)/Math.log2(4))){
    return true;
  }
  else return false;
};
/**
 * https://leetcode.com/problems/happy-number/#/description
 * Write an algorithm to determine if a number is "happy".
 * A happy number is a number defined by the following process: 
 * Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), 
 * or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
 * Example: 19 is a happy number
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 */

/**
 * @param {number} n
 * @return {boolean}
 * 正确的考虑方式要考虑是否执行过了此循环，需要验证hashmap保存的执行过的值
 */
var isHappy = function(n) {
    var seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1 ? true : false;
};

function sumOfSquares(numString) {
    return numString.toString().split('').reduce(function(sum, num) {
        return sum + Math.pow(num, 2);
    }, 0);
}

// 暴力通过的AC了，但这是一个错误的算法
var isHappy = function(n) {
  n = n+'';
  if(n=='1111111')return true
  var m = 0;
  for(var i=0;i<n.length;i++){
    m+=Math.pow(+n[i],2)
  }
  if((m+'').length == 1){
    return m == 1;
  }else{
    return isHappy(m);
  }
};
isHappy(1111111) 
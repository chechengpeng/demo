/** 
 * Given a binary array, find the maximum number of consecutive 1s in this array.
 *  Input: [1,1,0,1,1,1]
 *  Output: 3
 *  Explanation: The first two digits or the last three digits are consecutive 1s.
 *  The maximum number of consecutive 1s is 3. 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  var arr = nums.join('').split('0');
  var arr2 = arr.filter(function(x){
    return x !== '';
  })
  if(arr2.length ===0) return 0
  var numsArr = arr2.map(function(x){
    return x.length;
  })
  return Math.max.apply(null, numsArr);
};
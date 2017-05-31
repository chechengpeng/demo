/**
 * Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.
You need to find the shortest such subarray and output its length.
Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 复制此数组，并排序。
 * 先从头开始对比，再从尾开始对比。并记录不一样时的位置
 */
var findUnsortedSubarray = function(nums) {
  var sortNums = nums.slice(0).sort(function(a,b){return a-b});
  var start = 0;
  var end = -1;
  for(var i=0;i<nums.length;i++){
    if(nums[i]!==sortNums[i]){
      start = i;
      break;
    }
  }
  for(var j=nums.length;j>0;j--){
    if(nums[j]!==sortNums[j]){
      end = j;
      break;
    }
  }
  console.log(end-start+1);
  return end-start+1;
};
findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])
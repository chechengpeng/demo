/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/#/description
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this in place with constant memory.
For example,
Given input array nums = [1,1,2],
Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 数组的splice方法是 in place 修改。注意每次删除之后需要 i--
 */
var removeDuplicates = function(nums) {
    for(var i=0;i<nums.length-1;i++){
      if(nums[i+1] == nums[i]){
        nums.splice(i,1);
        i--;
      }
    }
    console.log(nums)
    return nums.length;
};
removeDuplicates([1,1,2,2,3])

// 更好的方法 双指针
var removeDuplicates = function(nums) {
    var j = 1;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i - 1] !== nums[i]) {
            nums[j] = nums[i];
            j++
        }
    }
    return j;
};
/**
 * https://leetcode.com/problems/search-insert-position/#/description
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You may assume no duplicates in the array.
   Here are few examples.
   [1,3,5,6], 5 → 2
   [1,3,5,6], 2 → 1
   [1,3,5,6], 7 → 4
   [1,3,5,6], 0 → 0
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 考察二分查找，本人用的很简陋
 */
var searchInsert = function (nums, target) {
    console.log(midNum(nums, target))
    if (nums.indexOf(target) == -1) {
        if (target < nums[0]) {
            return 0
        } else {
            var a = midNum(nums, target);
            return nums.indexOf(a[0]) + 1
        }
    } else {
        return nums.indexOf(target)
    }
};

function midNum(nums, target) {
    var mid = Math.floor(nums.length / 2);
    if (mid == 0) return nums
    if (nums[mid] > target) {
        nums = nums.slice(0, mid)
        return midNum(nums, target)
    } else {
        nums = nums.slice(mid)
        return midNum(nums, target)
    }
}
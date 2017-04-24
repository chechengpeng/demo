/*
 * You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.
 * The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.
 *  Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
 *  Output: [-1,3,-1]
 *　Explanation:
 *   For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
 *   For number 1 in the first array, the next greater number for it in the second array is 3.
 *   For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
 * Note:
 *  All elements in nums1 and nums2 are unique.
 *  The length of both nums1 and nums2 would not exceed 1000.
 */

/**
 * 两个for循环，分割数组，比较大小
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function (findNums, nums) {
  var reArr = [];
  for (var i = 0; i < findNums.length; i++) {
    newNums = nums.slice(nums.indexOf(findNums[i]) + 1);
    if (newNums.length === 0) {
      reArr.push(-1)
    } else {
      for (var j = 0; j < newNums.length; j++) {
        if (newNums[j] > findNums[i]) {
          reArr.push(newNums[j]);
          break;
        }
        if (j === newNums.length - 1) {
          reArr.push(-1)
        }
      }
    }

  }
  return reArr;
};

// some good solution
var nextGreaterElement = function (findNums, nums) {
  return findNums.map(n => {
    let found = nums.indexOf(n);
    // find the next greater element's index
    while (nums[++found] < n);
    // -1 if not found
    if (found >= nums.length) found = -1;
    else found = nums[found];
    return found;
  });
};
/**
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/#/description
 * Given two arrays, write a function to compute their intersection.
 * Example:
 *  Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
 * Note:
 *  Each element in the result should appear as many times as it shows in both arrays.
 *  The result can be in any order.
 * Follow up:
 *  What if the given array is already sorted? How would you optimize your algorithm?
 *  What if nums1's size is small compared to nums2's size? Which algorithm is better?
 *  What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 简单的判断加 for 循环，至于三个 follow up 则没考虑
 * 遍历较短数组，如果较长数组里有这个值，那么把这个值push到新建的数组，并在较长数组中把这个值删掉
 */
var intersect = function(nums1, nums2) {
  var arr = [];
  if(nums1.length>=nums2.length){
      for(var i=0;i<nums2.length;i++){
          if(nums1.indexOf(nums2[i])>-1){
              arr.push(nums2[i]);
              nums1.splice(nums1.indexOf(nums2[i]), 1)
          }
      }
  }else {
      for(var i=0;i<nums1.length;i++){
          if(nums2.indexOf(nums1[i])>-1){
              arr.push(nums1[i]);
              nums2.splice(nums2.indexOf(nums1[i]), 1)
          }
      }
  }
  console.log(arr)
  return arr;
};
intersect([1, 2, 2, 1],[2, 2])
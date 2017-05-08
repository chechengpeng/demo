/**
 * Given scores of N athletes, find their relative ranks and the people with the top three highest scores, 
 * who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".
 *  Input: [5, 4, 3, 2, 1]
 *  Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
 * 
 */


/**
 * @param {number[]} nums
 * @return {string[]}
 * 理解题意，分布解决
 * 题意： 给定一个数字数组，返回它的排名
 * 1. 按大小重新排序数组
 * 2. 找到原数组在重新排序的数组的所在位置，即排名
 * 3. 把它push到新数组，并返回这个数组
 */
var findRelativeRanks = function(nums) {
  var arr = [];
  var nums2 = nums.slice(0);
  nums2.sort(function(a,b){return b-a;}) // 比较数字一定是 a-b 而不是 a>b
  var obj = {
    1: 'Gold Medal',
    2: 'Silver Medal',
    3: 'Bronze Medal'
  }
  for(let i=0;i<nums.length;i++){
    if(nums2.indexOf(nums[i])+1<4){
      arr.push(obj[nums2.indexOf(nums[i])+1])
    } else {
      arr.push(''+(nums2.indexOf(nums[i])+1))
    }
  }
  console.log(arr)
  return arr;
};
findRelativeRanks([2,3,5,4,8,1])
/**
 * @param {number[]} nums
 * @return {string[]}
 */

var findRelativeRanks = function(nums) {
  var arr = [];
  var nums2 = nums.slice(0);
  nums2.sort(function(a,b){return b-a;}) // 比较数字一定是 a-b 而不是 a>b
  console.log(nums2)
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
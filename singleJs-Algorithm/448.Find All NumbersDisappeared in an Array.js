/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Accepted, but runtime is too long
var findDisappearedNumbers = function (nums) {
  var len = nums.length;
  nums = nums.sort(function(a,b){return a-b})
  nums = Array.from(new Set(nums))
  for (var i = 1; i <= len; i++) {
    if(nums.indexOf(i)===-1){
      nums.push(i)
    } else {
      nums.splice(nums.indexOf(i),1)    
    }
  }
  return nums;
};

// wrong two: Time Limit Exceeded
var findDisappearedNumbers = function (nums) {
  var aa = [];
  numa = nums.sort(function(a,b){return a-b;})
  numa = Array.from(new Set(nums))
  for (var i = 1; i <= nums.length; i++) {
    if(numa.indexOf(i)===-1){
      aa.push(i)
    }
  }
  console.log(aa)
  return aa;
};
findDisappearedNumbers([4,3,2,7,8,2,3,1])
findDisappearedNumbers([1,1])


// wrong one: [1,1] // 不通过
var findDisappearedNumbers = function (nums) {
  var aa = [];
  nums = nums.sort(function(a,b){return a-b;})
  nums = Array.from(new Set(nums))
  for (var i = 0; i < nums.length-1; i++) {
    var a = nums[i+1]-nums[i];
    var b = 1;
    while(a != 1){
      aa.push(nums[i]+b);
      b++;
      a--;
    }
  }
  return aa;
};
findDisappearedNumbers([4,3,2,7,8,2,3,1])
findDisappearedNumbers([1,1]) 
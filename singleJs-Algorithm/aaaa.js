/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  if(nums.length === 0) return 0
  var har = {};
  for (var i = 0; i < nums.length; i++) {
    if (!har[nums[i]]) {
      har[nums[i]] = [nums[i]];
      var onums = nums.slice(0, i).concat(nums.slice(i + 1));
      for (var j = 0; j < onums.length; j++) {
        if (Math.abs(nums[i] - onums[j]) < 2) {
          har[nums[i]].push(onums[j]);
        }
      }
      var maxV = Math.max.apply(null, har[nums[i]])
      var minV = Math.min.apply(null, har[nums[i]])
      if (maxV - minV === 1) {
        har[nums[i]] = har[nums[i]].length
      } else {
        har[nums[i]] = 0;
      }
    }
  }
  var numsa = [];
  for(var i in har){
    if(har.hasOwnProperty(i)){
      numsa.push(har[i]);
    }
  }
  console.log(Math.max.apply(null, numsa));
  return Math.max.apply(null, numsa);
};
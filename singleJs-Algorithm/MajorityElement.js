'use strict';
/**
 * Created by che on 2016/12/14.
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 * for循环内，嵌套了while循环，当元素过多时，执行时间超时了
 * 算法之所以为算法，就是要想出一套简单快速的方法，而不是错误的套路，一开始光想着解决思路是统计数组元素出现的次数，使用indexOf方法来实现，
 * 而题目中已经说了，这是一个一定存在的数组，其实排下序，数组中间的那个数就是。
 * majorityElement1是最近做的，都不知道自己当时是怎么想出第三种方法的，智商在下降啊。
 */
var majorityElement1 = function(nums) {
  var times = nums.length/2;
  for(var i = 0,j = nums.length;i<j;i++){
    var newArr = nums.slice(0,i).concat(nums.slice(i+1));
    var t = 1;
    if(t>times) return nums[0];
    var ind = newArr.indexOf(nums[i]);
    while(ind != -1){
      ind = newArr.indexOf(nums[i],ind+1);
      t++;
      if(t>times){
        return nums[i];
      }
    }
  }
};

var majorityElement2 = function(nums) {
  for(var i=0;i<nums.length;i++){
    var arr = nums.filter(function(a){return a==nums[i]});
    if(arr.length>nums.length/2){
      return nums[i]
    }
  }
};

var majorityElement3 = function(nums) {
  var arr = nums.sort(function(a,b){return a-b});
  if(arr.length>1){
    return arr[Math.floor(arr.length/2)];
  }else{
    return arr[0];
  }
};



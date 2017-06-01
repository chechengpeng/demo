/**
 * https://leetcode.com/problems/rotate-array/#/description
 * Rotate an array of n elements to the right by k steps.
For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 其实没有读懂题意，测试几个结果，找规律解决的
 */
var rotate = function(nums, k) {
    for(var i=0;i<k;i++){
        nums.unshift(nums.pop())
    }
};

// 其他的方法
var rotate = function(nums, k) {
    // ex. [1,2,3] k=5  與 [1,2,3] k=2 相同  
    var step = k%nums.length;
    var temp = [];

    // 將向右旋轉的元素裝到temp, [1,2,3] k=2, temp = [2,3] 
    for(var i = step - 1 ; i >= 0 ; i--) {
        var index = nums.length-1-i;
        temp.push(nums[index]);
    }

    for(var j = nums.length - 1; j >= 0 ; j--){
        if( j >= step){
            // 將nums內沒被旋轉的元素往後移k格，[1,2,3] -> [x,x,1] 
            nums[j] = nums[j-step];
        } else {
            // 將temp放到nums的前面 [2,3,1]
            nums[j] = temp[j];
        }
    }    
};
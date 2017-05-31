/**
 * https://leetcode.com/problems/third-maximum-number/#/description
 * Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).
Example 1:
Input: [3, 2, 1]  Output: 1
Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]  Output: 2
Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]  Output: 1
Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 首先数组去重，然后从大到小排序，如果长度小于3返回最大数，否则返回第三大的数
 */
var thirdMax = function(nums) {
    var nums = Array.from(new Set(nums)).sort(function(a,b){return b-a});
    if(nums.length<3){
        return nums[0]
    }else{
        return nums[2]
    }
};

// 其他的方法
var thirdMax = function(nums) {
    var max1 = null;
    var max2 = null;
    var max3 = null;
    nums.forEach(function(num){
        if(max1==num || max2==num || max3==num){
        }else if(max1 === null || num>max1){
            max3 = max2; max2 = max1; max1 = num;
        }else if(max2 === null || num>max2){
            max3 = max2; max2 = num;
        }else if(max3 === null || num>max3){
            max3 = num;
        }
    })
    return max3===null?max1:max3;
    
};
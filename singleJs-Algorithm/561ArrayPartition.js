/*
 * Given an array of 2n integers, your task is to group these integers into n pairs of integer, 
 * say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
 *  Input: [1,4,3,2]
 *  Output: 4
 *  Explanation: n is 2, and the maximum sum of pairs is 4.
 *
*/

/** 主要是读懂题意。然后分析题目的意思，找到实现方法。
 *  题目的意思是，给定一个有2n个数的数组，把这个数组分解成n对，算出每一对最小数相加最大的那个数
 *  仔细理解一下，就可以知道，按从小到大的顺序排序，分成n对之后，取各对中的第一个数相加即可
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var newA = nums.sort(function(a,b){return a-b;})
    var newB = 0;
    for(var i=0;i<newA.length;i++){
        if(i%2 === 0){
            newB = newB + newA[i]
        }
    }
    return newB;
};
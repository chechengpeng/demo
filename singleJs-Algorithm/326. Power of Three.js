/**
 * https://leetcode.com/problems/power-of-three/#/description
 * Given an integer, write a function to determine if it is a power of three.
   Follow up:
   Could you do it without using any loop / recursion?
 */

/**
 * @param {number} n
 * @return {boolean}
 * 不用递归还真不知怎么怎么做
 */
var isPowerOfThree = function (n) {
    if (n == 1) return true
    if (n < 3) {
        return false
    } else if (n == 3) {
        return true
    } else {
        n = n / 3
        return isPowerOfThree(n)
    }
};
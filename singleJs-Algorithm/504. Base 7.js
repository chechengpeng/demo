/**
 * https://leetcode.com/problems/base-7/
 * Given an integer, return its base 7 string representation.
 *  Input: 100
 *  Output: "202"
 */

/**
 * @param {number} num
 * @return {string}
 * JavaScript进制转换，10进制转其他进制用 number 的 toString([radix])方法，返回指定 Number 对象的字符串表示形式。
 * radix：指定要用于数字到字符串的转换的基数(从2到36)。如果未指定 radix 参数，则默认值为 10。
 */
var convertToBase7 = function(num) {
    return num.toString(7)
};
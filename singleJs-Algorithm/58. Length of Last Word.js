/**
 * https://leetcode.com/problems/length-of-last-word/#/description
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
If the last word does not exist, return 0.
Note: A word is defined as a character sequence consists of non-space characters only.
For example, 
Given s = "Hello World",
return 5.
 */

/**
 * @param {string} s
 * @return {number}
 * 首先去除首尾空格，然后以空格分隔数组，取数组最后一个字符串的长度
 */
var lengthOfLastWord = function(s) {
    var arr = s.trim().split(' ');
    return arr[arr.length-1].length;
};
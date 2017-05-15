/**
 * https://leetcode.com/problems/reverse-string-ii/#/description
 * Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. 
 * If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, 
 * then reverse the first k characters and left the other as original.
 * Input: s = "abcdefg", k = 2  Output: "bacdfeg"
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * 考察字符串的切割和递归
 */
var reverseStr = function (s, k) {
  if (k > s.length) {
    return reve(s);
  } else if (k <= s.length && 2 * k > s.length) {
    var str = s.slice(0, k);
    var str2 = s.slice(k);
    return reve(str) + str2
  } else {
    var str = s.slice(0, k);
    var str2 = s.slice(k, 2 * k);
    return reve(str) + str2 + reverseStr(s.slice(2*k),k)
  }
};

// 一开始没有确定题意，没有准确理解every的意思
var reverseStr2 = function (s, k) {
  if (k > s.length) {
    return reve(s);
  } else if (k <= s.length && 2 * k > s.length) {
    var str = s.slice(0, k);
    var str2 = s.slice(k);
    return reve(str) + str2
  } else {
    var str = s.slice(0, k);
    var str2 = s.slice(k, 2 * k);
    return reve(str) + str2 + reve(str3) + str4
  }
};

function reve(str) {
  return str.split('').reverse().join('')
}
//reverseStr("abcdefg",2)
reverseStr("krmyfshbspcgtesxnnljhfursyissjnsocgdhgfxubewllxzqhpasguvlrxtkgatzfybprfmmfithphckksnvjkcvnsqgsgosfxc", 20)
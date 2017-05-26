/**
 * https://leetcode.com/problems/isomorphic-strings/#/description
 * Given two strings s and t, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
For example,
Given "egg", "add", return true.
Given "foo", "bar", return false.
Given "paper", "title", return true.
Note:
You may assume both s and t have the same length.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 解法跟 290 一样
 */
var isIsomorphic = function (pattern, str) {
  var pat = findInd(pattern)
  var st = findInd(str);
  console.log(pat == st);
  return pat == st;
};

function findInd(str) {
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    arr.push(str.indexOf(str[i]));  // 用第一次出现的索引值
  }
  return arr.toString();
}
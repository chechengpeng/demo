/**
 * Given two strings s and t, write a function to determine if t is an anagram of s.
 * For example,
 *  s = "anagram", t = "nagaram", return true.
 *  s = "rat", t = "car", return false.
 * Note:
 *  You may assume the string contains only lowercase alphabets.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 题目的意思就是，不考虑顺序，两个字符串的字符是否相同。那么就把他们按照统一的顺序组合再对比就ok了
 */
var isAnagram = function(s, t) {
  var as = s.split('').sort().join('');
  var at = t.split('').sort().join('');
  console.log(as == at);
  return as == at;
};
isAnagram("anagram", "nagaram")
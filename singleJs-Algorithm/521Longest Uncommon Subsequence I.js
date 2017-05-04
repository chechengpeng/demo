/**
 * Given a group of two strings, you need to find the longest uncommon subsequence of this group of two strings. 
 * The longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be any subsequence of the other strings.
 * A subsequence is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements. 
 * Trivially, any string is a subsequence of itself and an empty string is a subsequence of any string.
 * The input will be two strings, and the output needs to be the length of the longest uncommon subsequence. 
 * If the longest uncommon subsequence doesn't exist, return -1.
 *  Input: "aba", "cdc"
 *  Output: 3
 *  Explanation: The longest uncommon subsequence is "aba" (or "cdc"), 
 *  because "aba" is a subsequence of "aba", 
 *  but not a subsequence of any other strings in the group of two strings.
 * 
 * 想复杂了，根本没有理解题目的意思，被愚弄了。
 * 其实就是两个字符串，如果两个不一样，那么返回较长字符串的长度
 */

/** 
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  var c = b;
  var d = a;
  if (a.length > b.length) {
    a = c;
    b = d;
  }
  if (a == b) {
    return -1
  } else {
    return b.length
  }
}


var findLUSlength = function (a, b) {
  var c = b;
  var d = a;
  if (a.length > b.length) {
    a = c;
    b = d;
  }
  console.log(a, b)
  if (b.length - b.replace(a, '').length == a.length) {
    return -1
  }
  var arr = [1];
  var i = 1;
  var j = 0;
  while (i < a.length) {
    console.log(!b.includes(a.substring(j, i)));
    while (!b.includes(a.substring(j, i)) && i < a.length) {
      i++;
    }
    arr.push(i)
    j = i;
    i++;
  }
  console.log(Math.max.apply(null, arr))
  return Math.max.apply(null, arr)
};
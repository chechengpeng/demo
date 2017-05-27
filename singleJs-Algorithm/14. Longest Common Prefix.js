/**
 * https://leetcode.com/problems/longest-common-prefix/#/description
 * Write a function to find the longest common prefix string amongst an array of strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 * 先按字符串长度从小到大排序，找出最短的那个，以此为基准前缀，开始遍历所有数组，
 * 如果有不满足条件的，那么基准前缀从尾端去除一个，再重新进行遍历，最后条件全部通过，
 * 基准前缀即为所得
 */
var longestCommonPrefix = function (strs) {
  if(strs.length == 0)return ''
  var strs = sortStr(strs);
  var len = strs[0].length+1;
  var str = strs[0].slice(0, len);
  while (str.length > 0) {
    for (var i = 0; i < strs.length; i++) {
      if(strs[i].indexOf(str) !== 0){
        break;
      }
      if(i==strs.length-1){
        return str;
      }
    }
    str = strs[0].slice(0, len--);
  }
  return '';
};

function sortStr(str) {
  return str.sort(function (a, b) {
    return a.length - b.length;
  });
}
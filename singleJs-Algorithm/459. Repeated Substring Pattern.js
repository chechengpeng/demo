/**
 * https://leetcode.com/problems/repeated-substring-pattern/#/description
 * Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
Example 1:
Input: "abab"  Output: True
Explanation: It's the substring "ab" twice.
Example 2:
Input: "aba"  Output: False
Example 3:
Input: "abcabcabcabc"  Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
 */

/**
 * @param {string} s
 * @return {boolean}
 * 尝试了好多次终于AC了。
 * 思路：先找到所有能被此字符串长度值整除的数，再以每个数为分割单位去验证是否重复。
 */
var repeatedSubstringPattern = function (s) {
  if (s.length > 1 && s.replace(new RegExp(s[0], 'g'), '').length == 0) return true;
  var str = s;
  var nums = findNum(s.length);
  if (nums.length ==0) return false;
  for(var i=0;i<nums.length;i++){
    if(repStr(nums[i])){
      console.log('true')
      return true
    }
  }
  console.log('false');
  return false;

  function findNum(num){
    var nums = [];
    for(var i=2;i<Math.floor(num/2)+1;i++){
      if(str.length%i==0){
        nums.push(i);
      }
    }
    console.log(nums);
    return nums;
  }
  function repStr(s) {
    var rep = new RegExp(str.substring(0, s), 'g');
    return str.replace(rep, '').length == 0;
  }
};
//repeatedSubstringPattern('abcabcabc')
repeatedSubstringPattern('abab')

// 别人极其简单的方法
var repeatedSubstringPattern = function(s) {
    var len = s.length;
    for(let i=1; i<=Math.floor(len/2); i++){
        if(len%i===0){
            let temp = s.substring(i, len).concat(s.substring(0,i));
            if(temp === s) return true;
        }
    }
    return false;
};
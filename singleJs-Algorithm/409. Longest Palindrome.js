/**
 * Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.
 * This is case sensitive, for example "Aa" is not considered a palindrome here.
 *  Input: "abccccdd"
 *  Output: 7
 *  Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
 */

/**
 * @param {string} s
 * @return {number}
 * 透过问题，找到程序解法。回文，概况来看，一个字母出现的次数是2的倍数，那么就能构成回文。以此为出发点解决问题
 * 第一步：计算每个字母出现的次数
 * 第二步：根据次数算出可以组成回文的字母数
 * 第三步：如果总字符的长度大于回文字符数，那么+1返回，因为可以把此字母放在中间
 */
var longestPalindrome = function(s) {
  var a = {};
  for(let i=0;i<s.length;i++){
    if(a[s[i]]){
      a[s[i]]++
    }else{
      a[s[i]] = 1
    }
  }
  var sum = 0;
  for( var j in a){
    if(a.hasOwnProperty(j) && a[j]>1){
      sum+=Math.floor(a[j]/2)*2;
    }
  }
  console.log(s.length>sum ? sum+1 : sum)
  return s.length>sum ? sum+1 : sum;
};
longestPalindrome("abccccdd")
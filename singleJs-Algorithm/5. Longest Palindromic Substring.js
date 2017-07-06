/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
Example:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example:
Input: "cbbd"
Output: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(pal(s)) return s;    
};

function pal(s){
  if(s.length % 2 == 0 ){
    if(s.slice(0,s.length/2) == s.slice(s.length/2)){
      console.log('1')
      return true;
    }else{
      console.log('2')
      return false;
    }
  }else{
    if(s.slice(0,Math.floor(s.length/2)) == s.slice(Math.floor(s.length/2)+1)){
      console.log('3')
      return true;
    }else{
      console.log('4')
      return false;
    }
  }
}
console.log(pal('cbbd'))

// Time Limit Exceeded
var longestPalindrome = function (str) {
  var len = str.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      var str2 = str.substr(j, len - i)
      if (isPal(str2)) {
        return str2;
      }
    }
  }

};
function isPal(str) {
  var len = str.length;
  if(len % 2 !== 0){
    str = str.slice(0, Math.floor(len/2)) + str.slice(Math.floor(len/2)+1)
  }
  var ostr = str.slice(str.length/2).split('').reverse().join('')
  return (str.slice(0,str.length/2) == ostr)
}
console.log(isPal('abcba'))
console.log(longestPalindrome('afdadfabbdbba'))
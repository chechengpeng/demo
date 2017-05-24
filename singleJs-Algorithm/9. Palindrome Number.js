/**
 * https://leetcode.com/problems/palindrome-number/#/description
 * Determine whether an integer is a palindrome. Do this without extra space.
 */
/**
 * @param {number} x
 * @return {boolean}
 * 把x转成数组，利用数组的 shift 和 pop 方法，比较当前数组的第一个和最后一个，如果不相等就返回false，最后如果数组的长度为1或者0，则返回true
 */
var isPalindrome = function(x) {
    var x = x.toString().split('');
    while(x.length>1){
      if(x.shift() !== x.pop()){
        console.log('false')
        return false;
      }
    }
    console.log('true')
    return true;
};
isPalindrome(123121)
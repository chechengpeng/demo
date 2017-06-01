/**
 * https://leetcode.com/problems/valid-palindrome/#/description
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.
Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.
For the purpose of this problem, we define empty string as valid palindrome.
 */

/**
 * @param {string} s
 * @return {boolean}
 * 首先正则替换，只留下字母和数字。然后利用数组的reverse方法生成新的字符串并比较
 */
var isPalindrome = function(s) {
    s = s.replace(/\W/g,'').toLowerCase();
    var so = s.split('').reverse().join('').toLowerCase();
    return s==so;
};

// 执行效率高的方法
var isPalindrome = function(s) {
    var str = s.replace(/\W/g, '').toLowerCase();
    var left = 0;
    var right = str.length - 1;
    
    while(left < right){
        if(str.charAt(left) !== str.charAt(right)) return false;
        left++;
        right--;
    }
    return true;
};
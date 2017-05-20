/**
 * https://leetcode.com/problems/reverse-vowels-of-a-string/#/description
 * Write a function that takes a string as input and reverse only the vowels of a string.
Example 1:
Given s = "hello", return "holle".
Example 2:
Given s = "leetcode", return "leotcede".
Note:
The vowels does not include the letter "y".
 */

/**
 * @param {string} s
 * @return {string}
 * 此题目的标签有‘双指针’，然而我并不十分了解
 * 思路：首先把所有的元音字母push到新数组，然后把这个数组翻转，最后shift方法和splice方法，逐个替换字符中的元音字母
 * 
 */
var reverseVowels = function(s) {
  var vow = 'aeiouAEIOU';
  var rev = [];
  for(var i=0;i<s.length;i++){
    if(vow.indexOf(s[i]) !== -1){
      rev.push(s[i]);
    }
  }
  rev = rev.reverse();
  console.log('rev',rev);
  var sa = s.split('');
  console.log('sa',sa);
  for(var i=0;i<sa.length;i++){
    if(vow.indexOf(sa[i]) !== -1){
      sa.splice(i,1,rev.shift());
    }
  }
  console.log(sa.join(''))
  return (sa.join(''))
};
reverseVowels('aA')
reverseVowels('leetcode')
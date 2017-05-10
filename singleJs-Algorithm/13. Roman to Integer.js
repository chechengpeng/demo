/**
 * https://leetcode.com/problems/roman-to-integer/#/description
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 */
/**
 * @param {string} s
 * @return {number}
 * 简单化就是两个相邻的字符，如果后一个比前一个大，那么两个字符组成一个值为较大值减较小值
 * 否则，就是较大值加较小值。
 * 循环遍历相加即可
 */
var romanToInt = function(s) {
  var roman = { I: 1,V: 5,X: 10,L: 50,C: 100,D: 500,M: 1000 };
  var i = 0;
  var sum = 0;
  while(i<s.length){
    if(s.length == 1) return roman[s[0]]
    if(roman[s[i]]<roman[s[i+1]]){
      sum = sum + (roman[s[i+1]] - roman[s[i]])
      i = i+2;
    }else{
      sum = sum + roman[s[i]];
      i++;
    }
  }
  console.log(sum);
  return sum
};
romanToInt('MLXVI')
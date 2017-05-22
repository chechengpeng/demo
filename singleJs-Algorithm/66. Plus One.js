/**
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
 * You may assume the integer do not contain any leading zero, except the number 0 itself.
 *　The digits are stored such that the most significant digit is at the head of the list.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 * 思路：如果末尾数小于9，替换为此数+1所得的数
 * 如果等于9，那么把末尾数替换为0，除了尾数以外的其他数再 +1，进行运算
 * 如果去除尾数之后，没有数了，那么给默认数 0 ，再进行运算
 */
var plusOne = function(digits) {
    if(digits[digits.length-1]<9){
      digits.splice(digits.length-1,1,digits[digits.length-1]+1)
      return digits;
    } else {  
      digits.pop();
      if(digits.length ==0){
          digits = [1];
          return plusOne(digits).concat([0]);
      }
      return plusOne(digits).concat([0])
    }
};
plusOne([8,9,9]);

// 一开始的思路
var plusOne2 = function(digits) {
    if(digits[0] == 0)return [1]
    var digNum = +digits.toString().replace(/,/g,'')
    console.log(digNum);
    var arr = [];
    var str = (digNum+1)+'';
    for(var i=0;i<str.length;i++){
        arr.push(parseInt(str[i]));
    }
    console.log(arr)
    return arr;  
};
plusOne2([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]) // 此算法会超出js数值范围

// 发现的性能更好的方法
var plusOne3 = function(digits) {
    for(var i = digits.length - 1; i >= 0; i--) {
        if((digits[i] += 1) <= 9) {
            break;
        }
        digits[i] = 0;
    }
    if (i === -1) {
        digits.unshift(1);
    }
    return digits;
};
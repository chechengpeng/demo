/**
 * https://leetcode.com/problems/add-binary/#/description
 * Given two binary strings, return their sum (also a binary string).
For example,
a = "11"
b = "1"
Return "100".
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 首先将其长度用‘0’补齐，然后把a，b拆分成数组，并新建一个数组c
 * 再从末位开始相加，如果相加sum大于1，则取sum-2，并且前一位要加一，如果前一位不存在，手动添加‘1’和‘0’；
 * 如果不大于1，则用sum。
 */
var addBinary = function(a, b) {
  var len = a.length - b.length;
  if(len>0){
    for(var i=0;i<len;i++){
      b = '0' + b
    }
  }else{
    for(var i=0;i<0-len;i++){
      a = '0' + a
    }
  }
  a = a.split('');
  b = b.split('');
  var c = [];
  for(var j=a.length-1;j>=0;j--){
    if(+a[j]+(+b[j]) > 1){
      c.unshift(+a[j]+(+b[j])-2+'')
      console.log(c)
      if(j-1>=0){
        a[j-1] = +a[j-1] + 1;
      } else {
        a.unshift('1')
        b.unshift('0')
        j++;
      }
    }else{
      c.unshift(+a[j]+(+b[j]) + '');
    }
  }
  console.log(c.join(''));
  return c.join('');
};
//addBinary('111','1110')
addBinary('111','1')

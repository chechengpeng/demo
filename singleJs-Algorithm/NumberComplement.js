/*
 * Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.
 * Input: 5
 * Output: 2
 * Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
 * 
 * */

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var arr = (num).toString(2).split('');  // 10进制转为其他进制用 toString()
    var arr2 = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]==='1'){
            arr2[i]='0'
        }else{
            arr2[i]='1'
        }
    }
    return parseInt(arr2.join(''),2); // 其他进制转10进制用 parseInt()
};
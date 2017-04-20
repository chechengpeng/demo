/*
 * Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 * */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var arr = s.split(' '); // 以空格为标识拆分成字符串数组
    var arr2 = []; // 新建空数组
    for(var i=0;i<arr.length;i++){
      
      // 把每个单词拆分成数组后倒序排列再合并成数组后，push到新数组中
      arr2.push(arr[i].split('').reverse().join(''))
    }
    return arr2.join(' ') // 新数组插入空格后合并为字符串
};
'use strict';
/**
 * Created by che on 2016/12/29.
 * Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
 * Examples:
 * s = "leetcode"
 * return 0.
 * s = "loveleetcode",
 * return 2.
 * Note: You may assume the string contain only lowercase letters.
 */

/**
 * 首先想到用正则替换来实现，如果只出现一次的话，替换为空后，长度加一即为原长度
 * 但是，执行时间超时了，因为做LeetCode多了有一种思维定势，觉得用正则会快，事实是如果
 * 用正则能够替换for循环，那么正则可能会好。但这里不适用，不如第二种直接用String的原声api来
 * 实现
 * @param s {string}
 * @returns {number}
 */
var firstUniqChar = function(s) {
  if(s){
    for(var i=0,len=s.length;i<len;i++){
      var reg = new RegExp(s[i],'g');
      var ns = s.replace(reg,'');
      if(ns.length+1 == len){
        return i
      }else if(i==s.length-1){
        return -1;
      }
    }
  }else{
    return -1;
  }
};

var firstUniqChar2 = function(s) {
  if(s){
    for(var i=0,len=s.length;i<len;i++){
      var ns = s.slice(0,i) + s.slice(i+1);
      if(ns.indexOf(s[i]) == -1){
        return i
      }
    }
    return -1;
  }else{
    return -1;
  }
};
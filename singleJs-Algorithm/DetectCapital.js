/** 
 * Given a word, you need to judge whether the usage of capitals in it is right or not.
 * We define the usage of capitals in a word to be right when one of the following cases holds:
 *  1. All letters in this word are capitals, like "USA".
 *  2. All letters in this word are not capitals, like "leetcode".
 *  3. Only the first letter in this word is capital if it has more than one letter, like "Google".
 * Otherwise, we define that this word doesn't use capitals in a right way.
 * */

/**
 * @param {string} word
 * @return {boolean}
 * 这个方法可以实现，但是
 * 第一：把字符串长度为2的情况拆分出来单独判断了
 * 第二：if else 判断过多
 */
var detectCapitalUse = function(word) {
    if(word.length ===2 ){
        if(word[0].toUpperCase() !== word[0] && word[1].toLowerCase() !== word[1]){
            return false
        } else{
            return true;
        }
    }else{ 
       var t = word.substring(1);
       if(word[0].toLowerCase() !== word[0]){
           return t.toUpperCase() === t || t.toLowerCase() === t;
       } else {
           return t.toLowerCase() === t;
       }
       
    }
    
};
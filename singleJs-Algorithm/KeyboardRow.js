/*
 * Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard 
 * Input: ["Hello", "Alaska", "Dad", "Peace"]
 * Output: ["Alaska", "Dad"] 
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var arr = [];
    var rowArr = ['qwertyuiop','asdfghjkl','zxcvbnm'];
    for(var i=0;i<words.length;i++){
        for(var k=0;k<rowArr.length;k++){
            for(var j=0;j<words[i].length;j++){
                if(rowArr[k].indexOf(words[i][j].toLowerCase()) === -1 ){  // 一开始忘了转换为小写形式比较
                    break;
                }
                if(j === words[i].length-1){
                    arr.push(words[i])
                }
            }
        }
    }
    return arr
};

// 比较厉害的正则匹配法
var findWords = function(words) {
    return words.filter((w) => {
        // remove word from array if it fails matching all three rows
        if (
            !/^[qwertyuiop]*$/i.test(w) &&
            !/^[asdfghjkl]*$/i.test(w) &&
            !/^[zxcvbnm]*$/i.test(w)
        ) return false;
        
        return true;
    });
};
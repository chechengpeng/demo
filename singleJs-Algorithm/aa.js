/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n==1)return true
    if(n<3){
        return false
    }else if(n==3){
        return true
    }else{
        n = n/3
        return isPowerOfThree(n)
    }
};
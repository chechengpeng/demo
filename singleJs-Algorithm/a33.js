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

var plusOne = function(digits) {
    if(digits[digits.length-1]<9){
      digits.splice(digits.length-1,1,digits[digits.length-1]+1)
      return digits;
    } else {  
      digits.pop();
      if(digits.length ==0){
          digits = [1];
          console.log('99',digits.concat([0]))
          return digits.concat([0])
      }
      plusOne(digits).concat([0])
    }
};
plusOne([9,9,9]);
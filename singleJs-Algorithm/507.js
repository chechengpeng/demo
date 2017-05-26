/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  var obj = {};
  var sum = 1;
  for(var i=2;i<num/2;i++){
    if(num%i ===0 && !obj[i]){
      sum = sum + i + num/i;
      if(sum>num){
        console.log('false')
        return false;
      }
      obj[i] = true;
      obj[num/i] = true;
    }
  }
  console.log(sum === num)
  return sum === num;
};
checkPerfectNumber(28) // true
//checkPerfectNumber(99999993) // Time Limit Exceeded
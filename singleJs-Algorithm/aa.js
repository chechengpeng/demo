/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  if(num<=0)return false;
  num = to2(num)
  num = to3(num)
  num = to5(num)
  if(num==1)return true;
  console.log('num--',num)
  var primes = [];
  if(isPrime(num)){
    if(num>5)return false;
    primes.push(num);
  }
  for (var i = 2; i < Math.floor(num / 2) + 1; i++) {
    if(primes.length>3)return false;
    if (num % i == 0 && isPrime(i) && primes.indexOf(i)==-1) {
      if(i>5)return false;
      primes.push(i)
    }
  }
  console.log(primes)
  for(var j=0;j<primes.length;j++){
      console.log('pp',primes[j])
    if([2,3,5].indexOf(primes[j])==-1){
      return false
    }
  }
  return true
};

function isPrime(num) {
  if (num == 2 || num == 1) return true
  for (var i = 2; i < Math.floor(num / 2) + 1; i++) {
    if (num % i == 0) {
      return false;
    }
    if (i == Math.floor(num / 2)) {
      return true;
    }
  }
}

function to2(num){
  if(Math.floor(num / 2)!==num/2){
    return num
  }else{
    num = num/2
    return to2(num)
  }
}

function to3(num){
  if(Math.floor(num / 3)!==num/3){
    return num
  }else{
    num = num/3
    return to2(num)
  }
}

function to5(num){
  if(Math.floor(num / 5)!==num/5){
    return num
  }else{
    num = num/5
    return to2(num)
  }
}
isUgly(284677660)
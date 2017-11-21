/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  var a = [];
  while (left <= right) {
    if (isD(left)) {
      a.push(left);
    }
    left++;
  }
  return a;
};

function isD(num) {
  var arr = num.toString().split("");
  return arr.every(ele => {
    return num % +ele == 0;
  });
}

console.log(selfDividingNumbers(1, 22));

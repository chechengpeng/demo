/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  var mid = Math.floor(num / 2);
  findSqu(mid,num,num);


};
isPerfectSquare(25)

function findSqu(mid,last,num) {
  if (mid * mid > num) {

  } else if (mid * mid < num) {
    mid += Math.floor((last - mid) / 2)
  }

}
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  var c = b;
  var d = a;
  if (a.length > b.length) {
    a = c;
    b = d;
  }
  console.log(a,b)
  if (b.length - b.replace(a, '').length == a.length) {
    return -1
  }
  var arr = [1];
  var i = 1;
  var j = 0;
  while(i<a.length){
    console.log(!b.includes(a.substring(j,i)));
    while(!b.includes(a.substring(j,i)) && i<a.length){
      i++;
    }
    arr.push(i)
    j=i;
    i++;
  }
console.log( Math.max.apply(null, arr))
return Math.max.apply(null, arr)
};

findLUSlength('qweabaefff','qwecdcf')
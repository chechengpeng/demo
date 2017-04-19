'use strict';
/**
 * Created by che on 2016/11/29.
 * 斐波那契数列，对递归的了解不深入，仅仅是写出了一个简单的递归调用，执行之后浏览器直接卡死，在维基百科上找到了很简单的执行方法。
 * https://zh.wikipedia.org/wiki/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97
 */
//超级慢
function sumFibs(num) {
  if (num <= 1) {
    return 1;
  }
  return sumFibs(num - 1) + sumFibs(num - 2);
}
//很快的执行完
/**
 *
 * @param n
 */
function fib(n) {
  var fib_n = function (curr, next, n) {
    console.log('b');
    if (n == 0) {
      return curr;
    }
    else {
      return fib_n(next, curr + next, n - 1);
    }
  };
  return fib_n(0, 1, n);
}
console.log('a-' + sumFibs(15));
console.log('b-' + fib(16));

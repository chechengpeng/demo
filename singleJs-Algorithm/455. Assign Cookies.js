/**
 * https://leetcode.com/problems/assign-cookies/#/description
 * Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. 
 * Each child i has a greed factor gi, which is the minimum size of a cookie that the child will be content with; 
 * and each cookie j has a size sj. If sj >= gi, we can assign the cookie j to the child i, and the child i will be content. 
 * Your goal is to maximize the number of your content children and output the maximum number.
 * Note:
 *  You may assume the greed factor is always positive. 
 *  You cannot assign more than one cookie to one child.
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * 分解问题为：想要数和蛋糕数从小到大排序，如果蛋糕数能满足，则 a加1，此蛋糕数和想要数跨过，再循环下一个
 * 如果不满足，那么再用下一个较大蛋糕数比较
 */
var findContentChildren = function(g, s) {
  g = g.sort(function(a,b){return a-b;})
  s = s.sort(function(a,b){return a-b;})
  var a = 0,i = 0,j = 0;
  while(j<s.length){
    if(s[j]&& g[i] && g[i]<=s[j]){
      a++;
      i++;
      j++;
    }else{
      j++
    }
  }
  console.log(a)
  return a
};
findContentChildren([10,9,8,7],[5,6,7,8])
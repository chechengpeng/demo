/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/#/description
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). 
 *　However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length == 0) return 0
  var sum = 0;
  for(var i=0;i<prices.length-1;i++){
    if(prices[i+1]>prices[i]){
      sum += prices[i+1]-prices[i]
    }
  }
  console.log(sum)
  return sum
};
maxProfit([3,2,6,5,0,3])

/**
 * 验证的时候居然出现了股票价格为0的情况，所以觉得应该是把简单问题复杂化了
 * 想法是：
 *   以1为本钱，在降价之后，涨价之前那个点买入。在涨价之后，降价之前，那个点卖出
 */
var maxProfit = function(prices) {
  if(prices.length == 0) return 0
  var add = [];
  var che = 1;
  var chu = 1;
  for(var i=0;i<prices.length-1;i++){
    add.push(prices[i+1]-prices[i])
  }
  if(add.filter(function(a){return a>0}).length == 0){
    return 0;
  }else{
    add.unshift(-1);
    add.push(-1);
    for(var j=0;j<add.length-1;j++){
      if(add[j]<0 && add[j+1]>=0){
        che = che * prices[j]
      } else if (add[j]>0 && add[j+1]<0){
        chu = chu * prices[j]
      }
    }
  }
  return chu/che - 1;
};
maxProfit([3,2,6,5,0,3])  // 验证答案为7，但我认为不应该出现价格为 0 的情况
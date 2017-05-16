/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/#/description
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 * Input: [7, 1, 5, 3, 6, 4]  Output: 5
 */

// 推荐算法--动态规划
var maxProfit = function(prices) {
  var maxFit = 0;
  var minPrice = Number.MAX_VALUE;
  for(var i=0;i<prices.length;i++){
    if(minPrice>prices[i]){
      minPrice = prices[i];
    }else if(prices[i]-minPrice>maxFit){
      maxFit = prices[i]-minPrice;
    }
  }
  console.log(maxFit);
  return maxFit;
}

/**
 * @param {number[]} prices
 * @return {number}
 * 这个算是暴力AC了，在reveal solution 里面这个方法是超时的，我是根据他输入的值的特征，暴力通过了
 * 详细介绍可以看他的solution
 */
var maxProfit1 = function(prices) {
  if(prices.length==0)return 0
  var pos = 0;
  while(pos+1<prices.length && prices[pos+1]<prices[pos]){
    pos++
  }
  prices = prices.slice(pos)
  var pro = 0;
  for(var i=prices.length-1;i--;){
    var arr = prices.slice(i);
    var maxv = Math.max.apply(null,arr);
    if(maxv - prices[i]>pro){
      pro = maxv - prices[i];
    }
  }
  console.log(pro);
  return pro;
};

/**
 * Time Limit Exceeded
 * 自认为想了一个很简单的方法，结果超时了
 */
var maxProfit2 = function(prices) {
  var pro = 0;
  for(var i=0;i<prices.length-1;i++){
    var arr = prices.slice(i);
    for(var j=0;j<arr.length;j++){
      pro = arr[j]-prices[i]>pro ? arr[j]-prices[i] : pro; 
    }
  }
  console.log(pro);
  return pro;
};
//maxProfit([7, 6, 4, 3, 1, 8])
maxProfit([7,1,5,3,6,4])
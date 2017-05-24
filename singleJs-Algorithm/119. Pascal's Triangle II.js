/**
 * https://leetcode.com/problems/pascals-triangle-ii/#/description
 Given an index k, return the kth row of the Pascal's triangle.
For example, given k = 3,
Return [1,3,3,1].
Note:
Could you optimize your algorithm to use only O(k) extra space?
 */


/**
 * @param {number} numRows
 * @return {number[]}
 * 跟118的思路一样，但是不够好
 */
var getRow = function(numRows) {
  var arr = [];
  for(var i=0;i<numRows+1;i++){
    if(i==0){
      arr.push([1]);
    } else if(i==1){
      arr.push([1,1])
    } else {
      var iarr = [1];
      for(var j=0;j<arr[i-1].length-1;j++){
        iarr.push(arr[i-1][j] + arr[i-1][j+1]);
      }
      iarr.push(1);
      arr.push(iarr);
    }
  }
  return arr[numRows];
};
generate(5)

// 更加优雅的解决方式
var getRow = function(rowIndex) {
    if(rowIndex == 0)
        return [1];
    var res = [];
    var index = rowIndex + 1;
    for(var k = 0;k < index;k++){
        res.push(0);
    }
    res[0] = 1;
    for(var i = 1;i < index;i++){
        for(var j = i;j >= 1;j--){
            res[j] += res[j - 1];
        }
    }
    return res;
};
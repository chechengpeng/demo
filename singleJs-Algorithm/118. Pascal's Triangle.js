/**
 * https://leetcode.com/problems/pascals-triangle/#/description
 * Given numRows, generate the first numRows of Pascal's triangle.
For example, given numRows = 5,
Return
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 * 找数学规律，从第三行开始，除了首尾的1以外，中间的数依次是上一行的两两相加所得的数。
 */
var generate = function(numRows) {
  var arr = [];
  for(var i=0;i<numRows;i++){
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
  console.log(arr)
  return arr;
};
generate(5)
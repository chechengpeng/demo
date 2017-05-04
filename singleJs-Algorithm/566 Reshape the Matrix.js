/**
 * In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.
 * You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.
 * The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.
 * If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
 *  Input: nums = [[1,2],[3,4]], r = 1, c = 4
 *  Output:  [[1,2,3,4]]
 *  Explanation:
 *  The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
 */

/**
 * 要学会从语意中提取关键算法。其实就是把一组数，分成特定的二维数组
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  var str = nums.join().split(',')
  if (str.length != r * c) {
    return nums
  } else {
    var arr = [];
    for (let i = 1; i < r + 1; i++) {
      var arr2 = [];
      for (let j = 1; j < c + 1; j++) {
        arr2.push(+str.shift())
      }
      arr.push(arr2);
    }
    console.log(arr);
    return arr
  }
};
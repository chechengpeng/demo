/**
 * For a web developer, it is very important to know how to design a web page's size. So, given a specific rectangular web page’s area, 
 * your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:
 *  1. The area of the rectangular web page you designed must equal to the given target area.
 *  2. The width W should not be larger than the length L, which means L >= W.
 *  3. The difference between length L and width W should be as small as possible.
 * You need to output the length L and the width W of the web page you designed in sequence.
 *  Input: 4
 *  Output: [2, 2]
 * 
 */


/**
 * @param {number} area
 * @return {number[]}
 * 
 */
var constructRectangle = function(area) {
  var arr = [];
  for(var i=1;i<area+1;i++){
    if(i>area/i) break;  // 为了满足条件1
    if(area % i == 0){   // 为了满足条件2
      arr2 = [area/i,i]
      arr.push(arr2)
    }
  }
  return arr.pop();      // 为了满足条件3，最后push的数组就是相差最小的
};
constructRectangle(2)
/**
 * Given n points in the plane that are all pairwise distinct, 
 * a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).
 * Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).
 */

/**
 * @param {number[][]} points
 * @return {number}
 * [[0,0],[1,0],[2,0]]
 * The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
 */
var numberOfBoomerangs = function(points) {
  var dis = [];
  for(var i=0;i<points.length;i++){
    var obj = {};
    var arr = points.slice(0);
    arr.splice(i,1);
    for(var j=0;j<arr.length;j++){
      if(obj[distance(points[i],arr[j])]){
        obj[distance(points[i],arr[j])]++
      }else{
        obj[distance(points[i],arr[j])]=1
      }
    }
    dis.push(obj);
  }
  console.log(dis);
};
numberOfBoomerangs([[0,0],[1,0],[2,0]])
function distance(a,b){
  return (a[0]-b[0]) * (a[0]-b[0]) + (a[1]-b[1]) * (a[1]-b[1])
}

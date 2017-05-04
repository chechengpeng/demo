var maxDepth = function (root) {
  if (root === null) return 0
  var i = 0;
  var arr = []

  function goin(root) {
    i++
    if (root.left === null && root.right === null) {
      console.log('tttt')
      arr.push(i)
      i = 0;
    }
    if (root.left !== null) {
      goin(root.left)
    }
    if (root.right !== null) {
      goin(root.right)
    }
  }
  goin(root)
  console.log(arr)
  return arr.pop()
};


maxDepth ({
  val: 1,
  right: 
    {
     val: 3,
     right:  { val: 5, right: null, left: null },
     left: null },
  left: 
    {
     val: 2,
     right: null,
     left:  { val: 4, right: null, left: null } } })
var arr = [3, 4, 5, 5, 4, null, 7];
toTree(arr)
function toTree(arr) {
  var bst = new BST();
  for (var i = 0; i < arr.length; i++) {
    bst.insert(arr[i]);
  }
  console.log("bst", bst);
}
function BST() {
  this.root = null;
  this.insert = insert;
}
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function insert(val) {
  var n = new TreeNode(val);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      var left = current.left;
      var right = current.right;
      if (left == null) {
        parent.left = n;
        break;
      }
      if (right == null) {
        parent.right = n;
        break;
      }
    }
  }
}

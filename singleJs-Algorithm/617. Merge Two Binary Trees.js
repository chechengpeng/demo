// 学习资料 https://segmentfault.com/a/1190000004620352

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  var arr1 = toArray(t1);
  var arr2 = toArray(t2);
  var arrA = mergeArr(arr1, arr2);
  console.log(arrA);
};
function toArray(node) {
  if (!node) {
    return null;
  } else {
    var que = [];
    que.push(node);
    var arr = [];
    while (!que.every(ele => ele == null)) {
      node = que.shift();
      if (node != null) {
        arr.push(node.val);
      } else {
        arr.push(null);
      }
      console.log("node", node);
      if (node && node.left) {
        que.push(node.left);
      } else {
        que.push(null);
      }
      if (node && node.right) {
        que.push(node.right);
      } else {
        que.push(null);
      }
    }
    return arr;
  }
}
function mergeArr(a1, a2) {
  var newArr = [];
  var l1 = a1.length;
  var l2 = a2.length;
  if (l1 > l2) {
    var oArr = a1.slice(l2 - 1);
    for (let i = 0; i < l2; i++) {
      if (a1[i] === null && a2[i] === null) {
        newArr.push(null);
      } else if (a1[i] === null && a2[i] !== null) {
        newArr.push(a2[i]);
      } else if (a1[i] !== null && a2[i] === null) {
        newArr.push(a1[i]);
      } else {
        newArr.push(a1[i] + a2[i]);
      }
    }
    return [...newArr, ...oArr];
  } else {
    var oArr = a2.slice(l1 - 1);
    for (let i = 0; i < l1; i++) {
      if (a1[i] === null && a2[i] === null) {
        newArr.push(null);
      } else if (a1[i] === null && a2[i] !== null) {
        newArr.push(a2[i]);
      } else if (a1[i] !== null && a2[i] === null) {
        newArr.push(a1[i]);
      } else {
        newArr.push(a1[i] + a2[i]);
      }
    }
    return [...newArr, ...oArr];
  }
}

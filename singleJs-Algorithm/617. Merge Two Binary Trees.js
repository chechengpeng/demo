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
  console.log("arr1", arr1);
  console.log("arr2", arr2);
  var arrA = mergeArr(arr1, arr2);
  console.log("arrA", arrA.length);
  return toTree(arrA);
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
  if (!a1 && !a2) {
    return [null];
  }
  var l1 = a1 ? a1.length : 0;
  var l2 = a2 ? a2.length : 0;

  if (l1 > l2) {
    var oArr = a1.slice(l2);
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
    var oArr = a2.slice(l1);
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
function toTree(arr) {
  let binaryTree = new BinaryTree();
  for (var i = 0; i < arr.length; i++) {
    binaryTree.insert(arr[i]);
  }
  return binaryTree.root;
}

function BinaryTree() {
  this.root = null; // 树根
  this.queue = []; // 存储会被使用的父节点
  this.insertNum = 0; // 记录插入操作的次数
  this.insert = insert;
}
function insert(value) {
  this.insertNum++; // 插入次数加1
  let node = !value && typeof value === "object" ? null : new TreeNode(value); // 判断是否为空节点
  if (!this.root) {
    // 判断根节点是否存在
    this.root = node; // 插入根节点
    node && this.queue.push(this.root); // 非空节点入列
  } else {
    // 插入非根节点
    let parent = this.queue[0]; // 被插入的父节点
    if (!(this.insertNum % 2)) {
      // 通过插入次数判断左右
      parent.left = node; // 插入左边
      node && this.queue.push(parent.left); // 非空节点入列
    } else {
      parent.right = node; // 插入右边
      node && this.queue.push(parent.right); // 非空节点入列
      this.queue.shift(); // 当前父节点parent 已经不可能再插入子节点，故出列
    }
  }
  return this;
}

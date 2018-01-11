/*用来生成一个节点*/
function Node(data, left, right) {
  this.data = data; //节点存储的数据
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

/*用来生成一个二叉树*/
function BST() {
  this.root = null;
  this.insert = insert;
}

/*将数据插入二叉树
  （1）设根节点为当前节点。
  （2）如果待插入节点保存的数据小于当前节点，则设新的当前节点为原节点的左节点；反
  之，执行第4步。
  （3）如果当前节点的左节点为null，就将新的节点插入这个位置，退出循环；反之，继续
  执行下一次循环。
  （4）设新的当前节点为原节点的右节点。
  （5）如果当前节点的右节点为null，就将新的节点插入这个位置，退出循环；反之，继续
  执行下一次循环。

* */
function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left; //待插入节点保存的数据小于当前节点，则设新的当前节点为原节点的左节点
        if (current == null) {
          //如果当前节点的左节点为null，就将新的节点插入这个位置，退出循环；反之，继续执行下一次while循环。
          parent.left = n;
          break;
        }
      } else {
        current = current.right; //待插入节点保存的数据小于当前节点，则设新的当前节点为原节点的左节点
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

console.log(nums);

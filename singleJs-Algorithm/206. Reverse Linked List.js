/** 
 * https://leetcode.com/problems/reverse-linked-list/#/description
 * Reverse a singly linked list.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *  
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 迭代和递归两种思路
 * 我的思路，引入多个变量，递归的时候不断赋值
 */
// 为了解决下面的疑惑，引入新的变量 a 解决
var b;
var a;
function ListNode(val) {
      this.val = val;
      this.next = null;
  }
var reverseList = function(head) {
  console.log(head)
  if(!head || !head.next) return head;
  goin(head)
  return a;
};

function goin(node, b){
  a = b || new ListNode(node.val)
  if(node.next){
    node = node.next;
    b = new ListNode(node.val)
    b.next = a;
    goin(node, b)
  }
}
reverseList({val: 1,next:  { val: 2, next:  { val: 3, next: null } } })

// 如下代码有疑惑
var b;
function ListNode(val) {
      this.val = val;
      this.next = null;
  }
var reverseList = function(head) {
  console.log(head)
  if(!head || !head.next) return head;
  goin(head)
  console.log('bddd--%o',b) // 此处为何 b 为 undefined
  return b;
};

function goin(node, b){
  console.log('b--%o',b) // 此处可以打出想要的反转 b
  var a = b || new ListNode(node.val)
  if(node.next){
    node = node.next;
    b = new ListNode(node.val)
    b.next = a;
    goin(node, b)
  }
  console.log('bc--%o',b)
}
console.log(reverseList({val: 1,next:  { val: 2, next:  { val: 3, next: null } } }))
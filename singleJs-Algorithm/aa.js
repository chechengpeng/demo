/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * ListNode {
    val: 1,
    next: ListNode { val: 2, next: ListNode { val: 3, next: null } } }

      {
    val: 1,
    next:  { val: 2, next:  { val: 3, next: null } } }
 * 
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var b;
function ListNode(val) {
      this.val = val;
      this.next = null;
  }
var reverseList = function(head) {
  console.log(head)
  if(!head || !head.next) return head;
  goin(head)
  console.log('bddd--%o',b)
  return b;
};

function goin(node, b){
  console.log('b--%o',b)
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
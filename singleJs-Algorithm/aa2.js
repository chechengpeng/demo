/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var deleteDuplicates = function(head) {
    if(head == null || head.next == null) return head;
    var newl = new ListNode(head.val);
    return dep(head, newl);

};

function dep(head, newl){
    if(head != null && head.next != null && head.val == head.next.val){
        head.next = head.next.next
        return dep(head.next, newl)
    }else if(head !== null){
        newl.next = head.next;
        return dep(head.next, newl)
    }else{
        return newl
    }
}
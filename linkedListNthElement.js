// NTH ELEMENT OF A LINKED LIST


 // Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }


/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var nthFromEnd = function(head, n) {
    // Counter variable for the number of nodes in the list
    if (head) {
        let listLength = 0;
        let first = new ListNode();
        first = head;
        // Traversing through the list to get the number of 
        while (first != null) {
            listLength++;
            first = first.next;
        }
        listLength -= n;
        while (listLength > 0) {
            listLength--;
            head = head.next;
        }
    }
    
    return head.val;    
   
};
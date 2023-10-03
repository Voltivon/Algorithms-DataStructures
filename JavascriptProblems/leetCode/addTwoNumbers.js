/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1Num = "";
    let l2Num = "";

    for(let i = 0; i < l1.length; i++){
        l1Num += l1[i].toReversed();
    }

    for(let j = 0; j < l2.length; j++){
        l2Num += l2.toReversed()[j];
    }

    return l1Num + l2Num;

};


console.log(addTwoNumbers([1,0,0], [1,0,0]));
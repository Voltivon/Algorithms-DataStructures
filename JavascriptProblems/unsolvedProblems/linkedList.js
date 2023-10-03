class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

 append(value){
    const newNode = new Node(value);

    if(!this.head){
         this.head = newNode;
         this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
 }

 print() {
    const values = [];
    let currentNode = this.head;
    while(currentNode){
        values.push(currentNode.value);
        currentNode = currentNode.next;
    }
    console.log(values.join(" -> "));
 }
}



const linkedList = new LinkedList();


linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.print();


class LinkedListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head;
    tail;
    length;
    constructor(value) {
        const newNode = new LinkedListNode(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new LinkedListNode(value);
        if (this.length < 1) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    pop() {
        if (this.length == 0) return undefined;
        let pre = this.head;
        let temp = this.head;
        while(temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value) {
        const node = new LinkedListNode(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    shift() {
        if (!this.head) return null;
        const temp = this.head;
        this.head = temp.next;
        this.length--;

        if (this.length === 0) this.tail = null;
        temp.next = null;
        return temp;
    }

    // printList() {
    //     let temp = this.head;
    //     while (temp !== null) {
    //         console.log(temp.value);
    //         temp = temp.next;
    //     }
    // }

    // getHead() {
    //     if (this.head === null) {
    //         console.log("Head: null");
    //     } else {
    //         console.log("Head: " + this.head.value);
    //     }
    // }

    // getTail() {
    //     if (this.tail === null) {
    //         console.log("Tail: null");
    //     } else {
    //         console.log("Tail: " + this.tail.value);
    //     }
    // }

    // getLength() {
    //     return this.length;
    // }
}


module.exports = {
    LinkedList,
    LinkedListNode
}

// function test() {
//     let myLinkedList = new LinkedList(4);
    
//     myLinkedList.push(10);
//     myLinkedList.getHead();
//     myLinkedList.getTail();
//     myLinkedList.getLength();

//     console.log("\nLinked List:");
//     myLinkedList.printList();
// }


// test();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/
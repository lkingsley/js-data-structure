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

    get(index) {
        if (index < 0 || index > this.length-1) return null;
        
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    set(index, value) {
        let node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        }
        
        return false;
    }

}


module.exports = {
    LinkedList,
    LinkedListNode
}

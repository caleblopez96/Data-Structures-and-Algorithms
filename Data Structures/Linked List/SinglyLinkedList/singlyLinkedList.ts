// class to represent a node
// - has a data property
// - has a next property
class NodeExample {
    data: any;
    next: NodeExample | null;

    constructor(data: any) {
        this.data = data;
        this.next = null;
    }
}

// class to represent linked list
// - has a head property
class LinkedListExample {
    head: NodeExample | null;

    constructor() {
        this.head = null;
    }

    // method to add node to beginning of linked list
    addToBeginning(data: any): void {
        const newNode = new NodeExample(data); // create new node using argument data
        newNode.next = this.head; // set the newNode's next property to the old head
        this.head = newNode; // set the head to the newNode
    }

    addToEnd(data: any): void {
        const newNode = new NodeExample(data);

        if (this.head == null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }
}

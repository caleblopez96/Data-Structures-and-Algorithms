# Singly Linked List

A sequence of nodes where each node references the next node in the list.

## Singly Linked List Visualized

```text
[Head] -> [Node1] -> [Node2] -> [Node3] -> null
```

```text
  Head
    |
    v
+-------+
| Data1 |
| next  | ---> Data2
+-------+
    |
    v
+-------+
| Data2 |
| next  | ---> Data3
+-------+
    |
    v
+-------+
| Data3 |
| next  | ---> null
+-------+
```

## Practical Example

A linked list is a great data structure for a music playlist:

-   Song 1: "Bohemian Rhapsody" -> points to Song 2
-   Song 2: "Stairway to Heaven" -> points to Song 3
-   Song 3: "Welcome to the Jungle" -> points to null (end of playlist)

### Benefits:

-   **Easy to add songs**: Want to insert "Hotel California" between 1 and 2? Just change song 1's pointer to "Hotel California" and "Hotel California" points to "Stairway to Heaven"

-   **Easy to remove songs**: Want to remove song 2? Just make song 1 point directly to song 3. Song 2 gets skipped.

-   **Memory efficient for changes**: You don't need to shift everything around like you would with an array

## Basic Structure

A singly linked list needs two things:

1. **Node class**: Each piece of data + a pointer to the next node
2. **LinkedList class**: Keeps track of the head (first node) and provides methods for operations

```text
Node = {
    data: some data
    next: reference to another node (null if last one)
}

LinkedList = {
    head: reference to the first node
}
```

## Key Differences: Linked List vs Array

| Operation           | Array                     | Linked List                         |
| ------------------- | ------------------------- | ----------------------------------- |
| Access by index     | O(1) - instant            | O(n) - must traverse                |
| Insert at beginning | O(n) - shift all          | O(1) - just update head             |
| Insert at end       | O(1) - if space available | O(n) - must traverse to end         |
| Insert in middle    | O(n) - shift elements     | O(n) - traverse, then O(1) insert   |
| Delete at beginning | O(n) - shift all          | O(1) - update head                  |
| Memory              | Contiguous block          | Scattered, extra space for pointers |

## EXAMPLE:

Linked list LL has three items (A → B → C), and you want to add item D at the very beginning

### Step 1: Create a Node class

#### TypeScript

```typescript
class Node {
    data: any;
    next: Node | null;

    constructor(data: any) {
        this.data = data;
        this.next = null;
    }
}
```

#### C#

```csharp
public class Node
{
    public object Data { get; set; }
    public Node? Next { get; set; }

    public Node(object data)
    {
        Data = data;
        Next = null;
    }
}
```

### Step 2: Build a LinkedList class

#### TypeScript

```typescript
class LinkedList {
    head: Node | null;

    constructor() {
        this.head = null; // start the empty list with head set to null
    }

    addToBeginning(data: any): void {
        const newNode = new Node(data); // create a new node for D
        newNode.next = this.head; // point D to the old head (A)
        this.head = newNode; // make D the new head
    }

    // add to the end of the list
    addToEnd(data: any): void {
        const newNode = new Node(data);

        // check if list is empty, new node becomes head
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        // otherwise, traverse to the last node
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        // attach new node to the last node
        current.next = newNode;
    }

    // display the list (helpful for debugging)
    display(): void {
        let current = this.head;
        let result = "";

        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }

        result += "null";
        console.log(result);
    }

    // search for value
    search(value: any): boolean {
        let current = this.head;

        while (current !== null) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    // delete a node by value
    delete(value: any): boolean {
        // If list is empty
        if (this.head === null) {
            return false;
        }

        // check if head needs to be deleted
        if (this.head.data === value) {
            this.head = this.head.next;
            return true;
        }

        // find the node before the one to delete
        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === value) {
                // skip over the node that needs to be deleted
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }

        return false; // value not found
    }

    // get the length of the list
    length(): number {
        let count = 0;
        let current = this.head;

        while (current !== null) {
            count++;
            current = current.next;
        }

        return count;
    }

    // insert at a specific position (0-indexed)
    insertAt(data: any, position: number): boolean {
        if (position < 0) {
            return false;
        }

        // check if inserting at beginning
        if (position === 0) {
            this.addToBeginning(data);
            return true;
        }

        const newNode = new Node(data);
        let current = this.head;
        let count = 0;

        // go to position - 1
        while (current !== null && count < position - 1) {
            current = current.next;
            count++;
        }

        // check if the position is out of bounds
        if (current === null) {
            return false;
        }

        // insert the new node
        newNode.next = current.next;
        current.next = newNode;
        return true;
    }
}
```

#### C#

```csharp
class LinkedList
{
    public Node? Head { get; set; }

    public LinkedList()
    {
        Head = null;
    }

    public void AddToBeginning(object data)
    {
        Node newNode = new Node(data); // create a new node
        newNode.Next = Head; // point new node to old head
        Head = newNode; // make new node the head
    }

    // add to the end of the list
    public void AddToEnd(object data)
    {
        Node newNode = new Node(data);

        // check if list is empty, new node becomes head
        if (Head == null)
        {
            Head = newNode;
            return;
        }

        // otherwise, traverse to the last node
        Node current = Head;
        while (current.Next != null)
        {
            current = current.Next;
        }

        // attach new node to the last node
        current.Next = newNode;
    }

    // display the list (helpful for debugging)
    public void Display()
    {
        Node? current = Head;
        string result = "";

        while (current != null)
        {
            result += current.Data + " -> ";
            current = current.Next;
        }

        result += "null";
        Console.WriteLine(result);
    }

    // search for a value
    public bool Search(object value)
    {
        Node? current = Head;

        while (current != null)
        {
            if (current.Data.Equals(value))
            {
                return true;
            }
            current = current.Next;
        }

        return false;
    }

    // delete a node by value
    public bool Delete(object value)
    {
        // check if list is empty
        if (Head == null)
        {
            return false;
        }

        // check if head needs to be deleted
        if (Head.Data.Equals(value))
        {
            Head = Head.Next;
            return true;
        }

        // find the node before the one to delete
        Node current = Head;
        while (current.Next != null)
        {
            if (current.Next.Data.Equals(value))
            {
                // skip over the node to delete
                current.Next = current.Next.Next;
                return true;
            }
            current = current.Next;
        }

        return false; // value not found
    }

    // get the length of the list
    public int Length()
    {
        int count = 0;
        Node? current = Head;

        while (current != null)
        {
            count++;
            current = current.Next;
        }

        return count;
    }

    // insert at a specific position (0-indexed)
    public bool InsertAt(object data, int position)
    {
        if (position < 0)
        {
            return false;
        }

        // check if inserting at beginning
        if (position == 0)
        {
            AddToBeginning(data);
            return true;
        }

        Node newNode = new Node(data);
        Node? current = Head;
        int count = 0;

        // go to position - 1
        while (current != null && count < position - 1)
        {
            current = current.Next;
            count++;
        }

        // check if position is out of bounds
        if (current == null)
        {
            return false;
        }

        // insert the new node
        newNode.Next = current.Next;
        current.Next = newNode;
        return true;
    }
}
```

## Common Mistakes

1. **Forgetting to check if head is null** when traversing or deleting
2. **Losing reference to the head** when adding to beginning (update head LAST)
3. **Infinite loops** when the last node's next isn't null
4. **Not handling edge cases** like empty lists or single-node lists
5. **Off-by-one errors** when inserting at specific positions

## When to Use a Linked List

### Good for:

-   Frequent insertions/deletions at the beginning
-   Unknown or dynamic size
-   When you don't need random access by index
-   Implementing stacks and queues
-   When memory fragmentation is acceptable

### Not ideal for:

-   Frequent access by index
-   Searching for specific values (slow without indexing)
-   When memory overhead of pointers is a concern
-   When cache locality matters for performance

## Real-World Use Cases

-   **Browser history**: Back/forward navigation
-   **Music/video playlists**: Easy insertion and removal
-   **Undo functionality**: Each state points to the previous
-   **Image viewer**: Previous/next image navigation
-   **Hash table collision handling**: Chaining with linked lists

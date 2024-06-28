/**
 * Class to represent a Node for a DoublyLinkedList.
 */
class DLLNode {
    /**
     * Executed when the new keyword is used to construct a new node instance.
     * @param {any} data The data the new node will store.
     */
    constructor(data) {
        this.data = data;
        /**
         * By default a new node instance will not be connected to any other nodes,
         * these properties will be set after instantiation to connect the node to
         * a list. However, the head prev should remain null.
         *
         * @type {DLLNode|null}
         */
        this.prev = null;
        /** @type {DLLNode|null} */
        this.next = null;
    }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        // The list is empty to start.
        /** @type {DLLNode|null} */
        this.head = null;
        /** @type {DLLNode|null} */
        this.tail = null;
    }

    /**
     * Creates a new node and adds it at the front of this list.
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtFront(data) {
        let newNode = new DLLNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.head.prev = newNode;
        this.head.prev.next = this.head;
        this.head = newNode;
        return this;
    }

    /**
     * Creates a new node and adds it at the back of this list.
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {
        let newNode = new DLLNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail.next.prev = this.tail;
        this.tail = newNode;
        return this;
    }

    // EXTRA
    /**
     * Removes the middle node in this list.
     * @returns {any} The data of the removed node.
     */
    removeMiddleNode() {
        let runner = this.head;
        let tailRunner = this.tail;
        while (runner.next != tailRunner.prev) {
            runner = runner.next;
            tailRunner = tailRunner.prev;
        }
        let middle = runner.next;
        runner.next = tailRunner;
        tailRunner.prev = runner;
        return `removed ${middle.data} from the middle of the list [${this.toArray()}]`;
    }

    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Converts this list to an array of the node's data.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    /**
     * Adds all the given items to the back of this list.
     * @param {Array<any>} items Items to be added to the back of this list.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBackMany(items = []) {
        items.forEach((item) => this.insertAtBack(item));
        return this;
    }


    // ==========================================================================
    // NEW PROBLEMS Day 2========================================================
    // ==========================================================================

    /**
     * Inserts a new node with the given newVal after the node that has the
     * given targetVal as it's data.
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertAfter(targetVal, newVal) {
        let runner = this.head;
        let newNode = new DLLNode(newVal);
        while (runner != null) {
            if (runner.data === targetVal) {
                newNode.next = runner.next;
                newNode.prev = runner;
                runner.next = newNode;
                break;
            }
            runner = runner.next;
        }
        return this;
    }

    /**
     * Inserts a new node with the given newVal before the node that has the
     * given targetVal as it's data.
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertBefore(targetVal, newVal) {
        let runner = this.head;
        let newNode = new DLLNode(newVal);
        while (runner != null) {
            if (runner.next.data === targetVal) {
                newNode.next = runner.next;
                newNode.prev = runner;
                runner.next = newNode;
                break;
            }
            runner = next.prev;
        }
        return this;
    }
}

const emptyList = new DoublyLinkedList();

/**************** Uncomment these test lists after insertAtBack is created. ****************/
const singleNodeList = new DoublyLinkedList().insertAtBack(1);
const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new DoublyLinkedList().insertAtBackMany([
    -5, -10, 4, -3, 6, 1, -7, -2,
]);

// console.log(singleNodeList.toArray());
// console.log(biNodeList.toArray());
// console.log(firstThreeList.toArray());
// console.log(secondThreeList.toArray());
// console.log(unorderedList.toArray());
// console.log(unorderedList.insertAtFront(2).toArray());
// console.log(firstThreeList.removeMiddleNode());


// For day 2

console.log(firstThreeList.insertAfter(2, 4).toArray());
console.log(secondThreeList.insertBefore(5, 7).toArray());



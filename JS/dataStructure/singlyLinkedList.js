/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class ListNode {
    /**
     * Constructs a new Node instance. Executed when the 'new' keyword is used.
     * @param {any} data The data to be added into this new instance of a Node.
     *    The data can be anything, just like an array can contain strings,
     *    numbers, objects, etc.
     * @returns {ListNode} A new Node instance is returned automatically without
     *    having to be explicitly written (implicit return).
     */
    constructor(data) {
        this.data = data;
        /**
         * This property is used to link this node to whichever node is next
         * in the list. By default, this new node is not linked to any other
         * nodes, so the setting / updating of this property will happen sometime
         * after this node is created.
         *
         * @type {ListNode|null}
         */
        this.next = null;
    }
}

/**
 * This class keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SinglyLinkedList {
    /**
     * Constructs a new instance of an empty linked list that inherits all the
     * methods.
     * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
     *    returned without having to explicitly write "return".
     */
    constructor() {
        /** @type {ListNode|null} */
        this.head = null;
    }

    /**
     * Determines if this list is empty.
     * @returns {boolean}
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBack(newNode) { // make "newNode" parameter "data" if we arent passing in a node
        // const newNode = new ListNode(data); // uncomment if node needs to be made in function
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let runner = this.head;
            while (runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
            return this;
        }
    }

    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * @param {any} data The data to be added to the new node.
     * @param {?ListNode} runner The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackRecursive(data, runner = this.head) { }

    /**
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackMany(vals) {
        for (const item of vals) {
            this.insertAtBack(item);
        }
        return this;
    }

    /**
     * Converts this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */
    toArr() {
        const arr = [];
        let runner = this.head;

        while (runner) {
            arr.push(runner.data);
            runner = runner.next;
        }
        return arr;
    }

    // ==========================================================================
    // NEW PROBLEMS DAY 2========================================================
    // ==========================================================================

    /**
     * Creates a new node with the given data and inserts that node at the front
     * of this list.
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
    */
    insertAtFront(data) {
        const newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
        this.head.data = newNode.data[0];
        return this;
    };

    /**
     * Removes the first node of this list.
     * @returns {any} The data from the removed node.
    */
    removeHead() {
        this.head = this.head.next;
        return this;
    }

    // EXTRA
    /**
     * Calculates the average of this list.
     * @returns {number|NaN} The average of the node's data.
    */
    average() {
        let runner = this.head;
        let sum = 0;
        let count = 0;
        while (runner != null) {
            sum += runner.data;
            count++;
            runner = runner.next;
        }

        return sum / count;
    }


    // ==========================================================================
    // NEW PROBLEMS DAY 3========================================================
    // ==========================================================================
    /**
     * Removes the last node of this list.
     * @returns {any} The data from the node that was removed.
     */
    removeBack() {
        let runner = this.head;
        while (runner != null) {
            if (runner.next.next === null) {
                runner.next = null;
                break;
            }
            runner = runner.next;
        }
        return this;
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains(val) {
        let runner = this.head;
        while (runner.next != null) {
            if (runner.data === val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?ListNode} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
     */
    containsRecursive(val, runner = this.head) {
        if (runner.data === val) {
            return true;
        }
        else if (runner.next === null) {
            return false;
        }
        else {
            return this.containsRecursive(val, runner = runner.next);
        }
    }

    // EXTRA
    /**
     * Recursively finds the maximum integer data of the nodes in this list.
     * @param {ListNode} runner The start or current node during traversal, or null
     *    when the end of the list is reached.
     * @param {ListNode} maxNode Keeps track of the node that contains the current
     *    max integer as it's data.
     * @returns {?number} The max int or null if none.
     */
    recursiveMax(runner = this.head, maxNode = this.head) {
        if (this.head === null) {
            return null;
        }
        if (runner === null) {
            return maxNode;
        }
        if (runner.data > maxNode.data) {
            maxNode = runner;
        }
        return this.recursiveMax(runner.next, maxNode);
    }


    // ==========================================================================
    // NEW PROBLEMS DAY 4========================================================
    // ==========================================================================
    /**
     * Retrieves the data of the second to last node in this list.
     * @returns {any} The data of the second to last node or null if there is no
     *    second to last node.
     */
    secondToLast() {
        let runner = this.head;
        while (runner != null) {
            if (runner.next.next === null) {
                return runner;
            }
            runner = runner.next;
        }
        return null;
    }

    /**
     * Removes the node that has the matching given val as it's data.
     * @param {any} val The value to compare to the node's data to find the
     *    node to be removed.
     * @returns {boolean} Indicates if a node was removed or not.
     */
    removeVal(val) {
        let runner = this.head;
        while (runner != null) {
            if (runner.next.data === val) {
                runner.next = runner.next.next;
                break;
            }
            runner = runner.next;
        }
        return this;
    }

    // EXTRA
    /**
     * Inserts a new node before a node that has the given value as its data.
     * @param {any} newVal The value to use for the new node that is being added.
     * @param {any} targetVal The value to use to find the node that the newVal
     *    should be inserted in front of.
     * @returns {boolean} To indicate whether the node was pre-pended or not.
     */
    prepend(newVal, targetVal) {
        let runner = this.head;
        let newNode = new ListNode(newVal);
        while (runner.next != null) {
            if (runner.next.data === targetVal) {
                newNode.next = runner.next;
                runner.next = newNode;
                runner = runner.next;
            }
            runner = runner.next;
        }
        return this;
    }


    // ==========================================================================
    // NEW PROBLEMS DAY 5========================================================
    // ==========================================================================
    /**
     * Concatenates the nodes of a given list onto the back of this list.
     * @param {SinglyLinkedList} addList An instance of a different list whose
     *    whose nodes will be added to the back of this list.
     * @returns {SinglyLinkedList} This list with the added nodes.
     */
    concat(addList) {
        let runner = this.head;
        const concatThis = new SinglyLinkedList().insertAtBackMany(addList);
        while (runner != null) {
            if (runner.next === null) {
                runner.next = concatThis.head;
                break;
            }
            runner = runner.next;
        }
        return this;
    }
    /**
     * Finds the node with the smallest data and moves that node to the front of
     * this list.
     * @returns {SinglyLinkedList} This list.
    */
    moveMinToFront() {
        let minHold = this.head;
        let runner = this.head;
        let beforeMin = null;
        while (runner.next != null) {
            if (runner.next.data < minHold.next.data) {
                minHold = runner.next;
                beforeMin = runner;
            }
            runner = runner.next;
        }

        if (beforeMin != null) {
            beforeMin.next = minHold.next;
            minHold.next = this.head;
            this.head = minHold;
        }
        // console.log(minHold);
        return this;
    }

    // EXTRA
    /**
     * Splits this list into two lists where the 2nd list starts with the node
     * that has the given value.
     * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3)
     * and the return value will be a new list containing (5=>2=>4)
     * @param {any} val The value in the node that the list should be split on.
     * @returns {SinglyLinkedList} The split list containing the nodes that are
     *    no longer in this list.
    */
    splitOnVal(val) {
        let runner = this.head;
        let check = false;
        const splitList = new SinglyLinkedList();
        while (runner != null) {
            if (runner.data === val || check) {
                check = true;
                splitList.insertAtBack(runner.data);
            }
            runner = runner.next;
        }
        return splitList;
    }

    reverseList() {
        let prev = null;
        let current = this.head;
        let future = null;

        while (current != null) {
            future = current.next;
            current.next = prev;
            prev = current;
            current = future;
        }
        this.head = prev;
    }

    // ==========================================================================
    // NEW PROBLEMS Day 6 =======================================================
    // ==========================================================================
    /**
     * Determines whether the list has a loop in it which would result in
     * infinitely traversing unless otherwise avoided. A loop is when a node's
     * next points to a node that is behind it.
     * @returns {boolean} Whether the list has a loop or not.
     */
    hasLoop() {
        let t = this.head;
        let h = this.head;
        while (h && h.next) {
            t = t.next;
            h = h.next.next;
            if (t === h) {
                return true;
            }
        }
        return false;
    }

    /**
     * If the list has a loop, return the value of the node at the beginning of the loop
     * @returns {any} The value of the node where the loop starts, else null if no loop
     */
    loopStart() {
        let t = this.head;
        let h = this.head;
        while (h && h.next) {
            t = t.next;
            h = h.next.next;
            if (t === h) {
                t = this.head;
                while (h) {
                    t = t.next;
                    h = h.next;
                    if (t === h) {
                        return t.data;
                    }
                }
            }
        }
    }

    // refactored for less indentation 
    loopStart1() {
        let t = this.head;
        let h = this.head;
        let isLoop = false;
        while (h && h.next) {
            t = t.next;
            h = h.next.next;
            if (t === h) {
                isLoop = true;
                break;
            }
        }
        if (isLoop) {
            t = this.head;
            while (t !== h) {
                t = t.next;
                h = h.next;
            }
            return t.data;
        }
        return null;
    }


}



/*******************************************************************
Multiple test lists already constructed to test your methods on.
Below commented code depends on insertAtBack method to be completed,
after completing it, uncomment the code.
 */



//For day 1 functions

// const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
// const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
// const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
// const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
// const unorderedList = new SinglyLinkedList().insertAtBackMany([
//     -5, -10, 4, -3, 6, 1, -7, -2,
// ]);

// Print your list like so:
// console.log(firstThreeList.toArr());

//For day 2 functions

// const insertFront = new SinglyLinkedList().insertAtBackMany([1, 2, 3]).insertAtFront([4]);
// const insertFrontThenRemove = new SinglyLinkedList().insertAtBackMany([1, 2, 3]).insertAtFront([4]).removeHead();
// const average = new SinglyLinkedList().insertAtBackMany([1, 2, 3]).average();

// //For day 3 functions

// const removeBack = new SinglyLinkedList().insertAtBackMany([1, 2, 3]).removeBack();
// const contains = new SinglyLinkedList().insertAtBackMany([1, 2, 3]).contains(1);
// const contains1 = new SinglyLinkedList().insertAtBackMany([1, 2, 3]).contains(4);
// const contains3 = new SinglyLinkedList().insertAtBackMany([1, 2, 3]).containsRecursive(1);
// const contains4 = new SinglyLinkedList().insertAtBackMany([1, 2, 3]).containsRecursive(4);
// const recursiveMax = new SinglyLinkedList().insertAtBackMany([1, 2, 3]).recursiveMax();


// //For day 4 functions
// const secondToLast = new SinglyLinkedList().insertAtBackMany([1, 2, 3]).secondToLast();
// const removeVal = new SinglyLinkedList().insertAtBackMany([1, 2, 3]).removeVal(2);
// const prepend = new SinglyLinkedList().insertAtBackMany([1, 2, 3]).prepend(4, 3).prepend(5, 4);

// //For day 5 functions

// const concat = new SinglyLinkedList().insertAtBackMany([1, 2, 3]).concat([1, 2, 3]);
// const moveMinToFront = new SinglyLinkedList().insertAtBackMany([3, 2, 1]).moveMinToFront();
// const splitOnVal = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4, 5, 6,]).splitOnVal(4);
// const testReverse = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);


// console.log(moveMinToFront.toArr());
// testReverse.reverseList();
// console.log("after " + testReverse.toArr());

//For day 6 functions

const loopList = new SinglyLinkedList();

const node1 = new ListNode(11);
const node2 = new ListNode(22);
const node3 = new ListNode(33);
const node4 = new ListNode(44);
const node5 = new ListNode(55);
const node6 = new ListNode(66);
const node7 = new ListNode(77);
const node8 = new ListNode(88);
const node9 = new ListNode(99);

loopList.insertAtBack(node1);
loopList.insertAtBack(node2);
loopList.insertAtBack(node3);
loopList.insertAtBack(node4);
loopList.insertAtBack(node5);
loopList.insertAtBack(node6);
loopList.insertAtBack(node7);
loopList.insertAtBack(node8);
loopList.insertAtBack(node9);

node9.next = node4;

console.log(loopList.hasLoop());
console.log(loopList.loopStart());
console.log(loopList.loopStart1());

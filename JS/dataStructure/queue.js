
/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.items = [];
    }
    /**
     * Adds a new given item to the back of this queue.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        this.items.push(item);
        return this;
    }

    /**
     * Removes and returns the first item of this queue.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        return this.items.shift();
    }

    /**
     * Retrieves the first item without removing it.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        return this.items[0];
    }

    /**
     * Returns whether or not this queue is empty.
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Retrieves the size of this queue.
     * @returns {number} The length.
     */
    size() {
        return this.items.length;
    }


    // ==========================================================================
    // NEW PROBLEMS Day 2========================================================
    // ==========================================================================

    /**
     * Compares this queue to another given queue to see if they are equal.
     * Avoid indexing the queue items directly via bracket notation, use the
     * queue methods instead for practice.
     * Use no extra array or objects.
     * The queues should be returned to their original order when done.
     * @param {Queue} q2 The queue to be compared against this queue.
     * @returns {boolean} Whether all the items of the two queues are equal and
     *    in the same order.
    */
    compareQueues(q2) {
        if (this.size() != q2.size()) {
            return false;
        }
        let valid = true;
        let size = this.size();
        for (let i = 0; i < size; i++) {
            let queue1 = this.dequeue();
            let queue2 = q2.dequeue();
            if (queue1 != queue2) {
                valid = false;
            }
            this.enqueue(queue1);
            q2.enqueue(queue2);
        }

        return valid;
    }

    /**
     * Determines if the queue is a palindrome (same items forward and backwards).
     * Avoid indexing queue items directly via bracket notation, instead use the
     * queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * @returns {boolean}
    */
    isPalindrome() {
        let newStack = new Stack();
        let size = this.size();
        let valid = true;
        for (let i = 0; i < size; i++) {
            let stackItem = this.dequeue();
            newStack.push(stackItem);
            this.enqueue(stackItem);
        }
        for (let j = 0; j < size; j++) {
            let queue1 = this.dequeue();
            let queue2 = newStack.pop();
            if (queue1 != queue2) {
                valid = false;
            }
            this.enqueue(queue1);
        }
        return valid;
    }

    // ==========================================================================
    // NEW PROBLEMS Day 3========================================================
    // ==========================================================================

    /**
     * Determines whether the sum of the left half of the queue items is equal to
     * the sum of the right half. Avoid indexing the queue items directly via
     * bracket notation, use the queue methods instead for practice.
     * Use no extra array or objects.
     * The queue should be returned to it's original order when done.
     * @returns {boolean} Whether the sum of the left and right halves is equal.
     */
    isSumOfHalvesEqual() {
        let left = 0;
        let right = 0;
        if (this.size() % 2 != 0) {
            return false;
        }
        for (let i = 0; i < this.size(); i++) {
            if (i < (this.size() / 2)) {
                let item = this.dequeue();
                left += item;
                this.enqueue(item);
            }
            if (i >= (this.size() / 2)) {
                let item = this.dequeue();
                right += item;
                this.enqueue(item);
            }
        }
        return `${left === right}, left: ${left} right: ${right}`;
    }
}

// For use in isPalindrome
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
        return this.size();
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}

// use this class for your nodes in the linked list version of Queue
class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Adds a new given item to the back of this queue.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        let newNode = new QueueNode(item);
        if (this.head === null) {
            this.head = newNode;
            this.size += 1;
            return this;
        } else if (this.tail === null) {
            this.head.next = newNode;
            this.tail = newNode;
            this.size += 1;
            return this;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.size += 1;
            return this;
        }
    }

    /**
     * Removes and returns the first item of this queue.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        let output;
        if (this.size === 1) {
            output = this.head;
            this.head = null;
            this.size -= 1;
            return output;
        } else {
            output = this.head;
            this.head = this.head.next;
            this.size -= 1;
            return output;
        }
    }

    /**
     * Retrieves the first item without removing it.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        if (this.head === null) {
            return null;
        } else {
            return this.head;
        }
    }

    /**
     * Returns whether or not this queue is empty.
     * @returns {boolean}
     */
    isEmpty() {
        if (this.head === null) {
            return true;
        }
        return false;
    }

    /**
     * Retrieves the size of this queue.
     * @returns {number} The length.
     */
    size() {
        return this.size;
    }
}



// let testQueue = new LinkedListQueue().enqueue(1).enqueue(2).enqueue(3).enqueue(4);

// console.log(testQueue.dequeue());
// console.log(testQueue);

// For day 2

// let testQueue1 = new Queue().enqueue(1).enqueue(2).enqueue(1);
// let testQueue2 = new Queue().enqueue(1).enqueue(2).enqueue(1);
// let testQueue3 = new Queue().enqueue(1).enqueue(3).enqueue(2);
// console.log(testQueue1.compareQueues(testQueue2)); // True
// console.log(testQueue1.compareQueues(testQueue3)); // False

// console.log(testQueue1.isPalindrome()); // True
// console.log(testQueue3.isPalindrome());// False


// For day 3

let testqueue4 = new Queue().enqueue(1).enqueue(2).enqueue(3).enqueue(1).enqueue(2).enqueue(3);
let testqueue5 = new Queue().enqueue(1).enqueue(2).enqueue(3).enqueue(1).enqueue(2).enqueue(4);

console.log(testqueue4.isSumOfHalvesEqual());
console.log(testqueue5.isSumOfHalvesEqual());

;;;

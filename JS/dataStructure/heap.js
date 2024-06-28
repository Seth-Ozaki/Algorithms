/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
    constructor() {
        /**
         * 0th index not used, so null is a placeholder. Not using 0th index makes
         * calculating the left and right children's index cleaner.
         * This also effectively makes our array start at index 1.
         */
        this.heap = [null];
    }

    /**
 * @param {number} i
 */
    idxOfParent(i) {
        return Math.floor(i / 2);
    }

    /**
     * @param {number} i
     */
    idxOfLeftChild(i) {
        return i * 2;
    }

    /**
     * @param {number} i
     */
    idxOfRightChild(i) {
        return i * 2 + 1;
    }

    /**
     * Swaps two nodes.
     * @param {number} i
     * @param {number} j
     */
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    /**
     * Retrieves the size of the heap, ignoring the null placeholder.
     * @returns {number}
     */
    size() {
        // - 1 since 0 index is unused
        return this.heap.length - 1;
    }

    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * @returns {?number} Null if empty.
     */
    top() {
        if (!this.heap[1]) {
            return null;
        }
        return `The smallest value in the heap: ${this.heap[1]}`;
    }

    /**
     * Inserts a new number into the heap and maintains the heaps order.
     * 1. Push new num to back then.
     * 2. Iteratively swap the new num with it's parent while it is smaller than
     *    it's parent.
     * @param {number} num The num to add.
     */
    insert(num) {
        let hold = num;
        this.heap.push(num);
        let i = this.heap.length - 1;
        while (i > 1) {
            if (hold < this.heap[Math.floor(i / 2)]) {
                this.heap[i] = this.heap[Math.floor(i / 2)];
                this.heap[Math.floor(i / 2)] = hold;
                i = Math.floor(i / 2);
            }
            if (hold > this.heap[Math.floor(i / 2)]) {
                break;
            }
        }
        return this;
    }

    /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
        if (parentIdx > this.heap.length - 1) {
            return;
        }

        spaceCnt += spaceIncr;
        this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${this.heap[parentIdx]} (${parentIdx})`,
        );

        this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }

    // =============================================================================
    // NEW PROBLEMS Day 2===========================================================
    // =============================================================================

    /**
     * Extracts the min num from the heap and then re-orders the heap to
     * maintain order so the next min is ready to be extracted.
     * 1. Save the first node to a temp var.
     * 2. Pop last node off and set idx1 equal to the popped value.
     * 3. Iteratively swap the old last node that is now at idx1 with it's
     *    smallest child IF the smallest child is smaller than it.
     * @returns {?number} The min number or null if empty.
     */
    extract() {
        let output = this.heap[1];
        this.heap[1] = this.heap.pop();
        let i = 1;
        while (i < this.heap.length) {
            let test = this.heap[i];
            let smallerChildIdx;
            if (this.heap[this.idxOfLeftChild(i)] < this.heap[this.idxOfRightChild(i)] || this.heap[this.idxOfRightChild(i)] === undefined) {
                smallerChildIdx = this.idxOfLeftChild(i);
            } else {
                smallerChildIdx = this.idxOfRightChild(i);
            }
            if (test > this.heap[smallerChildIdx]) {
                this.swap(i, smallerChildIdx);
                i = smallerChildIdx;
            } else {
                break;
            }
        }
        return `Extracted ${output}`;
    }
}

var heap = new MinHeap();
heap.insert(1);
heap.insert(11);
heap.insert(10);
heap.insert(19);
heap.insert(4);
heap.insert(3);
heap.insert(21);

console.log(heap.extract());
console.log(heap.extract());
heap.printHorizontalTree();

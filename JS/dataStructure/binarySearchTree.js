/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         *
         * @type {BSTNode|null}
         */
        this.left = null;
        /** @type {BSTNode|null} */
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
        /**
         * Just like the head of a linked list, this is the start of our tree which
         * branches downward from here.
         *
         * @type {BSTNode|null}
         */
        this.root = null;
    }

    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
        if (this.root === null) {
            return true;
        }
        return false;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min(current = this.root) {
        if (current === null) {
            return null;
        }
        while (current.left != null) {
            current = current.left;
        }
        return current;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive(current = this.root) {
        if (current === null) {
            return null;
        }
        if (current.left != null) {
            return this.minRecursive(current = current.left);
        }
        return current;
    }

    /**
     * Retrieves the largest integer data from this tree.
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {
        if (current === null) {
            return null;
        }
        while (current.right != null) {
            current = current.right;
        }
        return current;
    }
    /**
     * Retrieves the largest integer data from this tree.
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive(current = this.root) {
        if (current === null) {
            return null;
        }
        if (current.right !== null) {
            return this.maxRecursive(current = current.right);
        }
        return current;
    }

    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`,
        );

        this.print(node.left, spaceCnt);
    }

    // ==========================================================================
    // NEW PROBLEMS Day 2========================================================
    // ==========================================================================

    /**
     * Determines if this tree contains the given searchVal.
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    contains(searchVal) {
        let current = this.root;
        while (current != null) {
            if (current.data === searchVal) {
                return true;
            }
            else if (current.data > searchVal) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    /**
     * Determines if this tree contains the given searchVal.
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {
        if (current === null) {
            return `❌ ${searchVal} was not found!`;
        } else if (current.data === searchVal) {
            return `✔ ${searchVal} was found!`;
        } else if (current.data > searchVal) {
            return this.containsRecursive(searchVal, current.left);
        } else {
            return this.containsRecursive(searchVal, current.right);
        }
    }

    /**
     * Calculates the range (max - min) from the given startNode.
     * @param {Node} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    range(startNode = this.root) {
        let min = startNode;
        let max = startNode;
        while (min.left !== null || max.right !== null) {
            if (min.left) {
                min = min.left;
            }
            if (max.right) {
                max = max.right;
            }
        }
        return `The range is ${max.data - min.data}`;
    }

    // ==========================================================================
    // NEW PROBLEMS Day 3========================================================
    // ==========================================================================

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * @param {number} newVal The data to be added to a new node.
     * @returns {BinarySearchTree} This tree.
     */
    insert(newVal) {
        if (this.root === null) {
            this.root = new BSTNode(newVal);
            return this;
        }
        //catches duplicates
        if (this.contains(newVal)) {
            return this;
        }
        let newNode = new BSTNode(newVal);
        let current = this.root;
        while (current != null) {
            if (current.data > newVal) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * @param {number} newVal The data to be added to a new node.
     * @param {Node} curr The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {BinarySearchTree} This tree.
     */
    insertRecursive(newVal, current = this.root) {
        if (this.root === null) {
            this.root = new BSTNode(newVal);
            return this;
        }
        //catches duplicates
        if (this.contains(newVal)) {
            return this;
        }
        let newNode = new BSTNode(newVal);
        if (current.data > newVal) {
            if (current.left === null) {
                current.left = newNode;
                return this;
            }
            return this.insertRecursive(newVal, current.left);
        } else {
            if (current.right === null) {
                current.right = newNode;
                return this;
            }
            return this.insertRecursive(newVal, current.right);
        }
    }

    // ==========================================================================
    // NEW PROBLEMS Day 4========================================================
    // ==========================================================================

    /**
     * DFS Preorder: (CurrNode, Left, Right)
     * Converts this BST into an array following Depth First Search preorder.
     * Example on the fullTree var:
     * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrPreorder(current = this.root, vals = []) {
        if (current) {
            vals.push(current.data);
            this.toArrPreorder(current.left, vals);
            this.toArrPreorder(current.right, vals);
        }
        return vals;
    }

    /**
     * DFS Inorder: (Left, CurrNode, Right)
     * Converts this BST into an array following Depth First Search inorder.
     * See debugger call stack to help understand the recursion.
     * Example on the fullTree var:
     * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrInorder(current = this.root, vals = []) {
        if (current) {
            this.toArrInorder(current.left, vals);
            vals.push(current.data);
            this.toArrInorder(current.right, vals);
        }
        return vals;
    }
    /**
     * DFS Postorder (Left, Right, CurrNode)
     * Converts this BST into an array following Depth First Search postorder.
     * Example on the fullTree var:
     * [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrPostorder(current = this.root, vals = []) {
        if (current) {
            this.toArrPostorder(current.left, vals);
            this.toArrPostorder(current.right, vals);
            vals.push(current.data);
        }
        return vals;
    }


    // ==========================================================================
    // NEW PROBLEMS Day 5========================================================
    // ==========================================================================

    /**
     * BFS order: horizontal rows top-down left-to-right.
     * Converts this BST into an array following Breadth First Search order.
     * Example on the fullTree var:
     * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
     * @param {Node} current The current node during the traversal of this tree.
     * @returns {Array<number>} The data of all nodes in BFS order.
     */
    toArrLevelorder(current = this.root) { }

    /**
     * Recursively counts the total number of nodes in this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during the traversal of this tree.
     * @returns {number} The total number of nodes.
     */
    size(current = this.root) {
        if (current == null) {
            return 0;
        } else {
            return this.size(current.left) + this.size(current.right) + 1;
        }
    }

    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree.
     */
    height(current = this.root) { }

    /**
     * Determines if this tree is a full tree. A full tree is a tree where every
     * node has both a left and a right except for the leaf nodes (last nodes)
     * @param {Node} node The current node during traversal of this tree.
     * @returns {boolean} Indicates if this tree is full.
     */
    isFull(node = this.root) { }
}



const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree
        root
        10
      /   \
    5     15
  / \    / \
2   6  13
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

// console.log(oneNodeTree.min());
// console.log(twoLevelTree.min());
// console.log(threeLevelTree.min());

// console.log(oneNodeTree.minRecursive());
// console.log(twoLevelTree.minRecursive());
// console.log(threeLevelTree.minRecursive());

// console.log(oneNodeTree.max());
// console.log(twoLevelTree.max());
// console.log(threeLevelTree.max());


// console.log(oneNodeTree.maxRecursive());
// console.log(twoLevelTree.maxRecursive());
// console.log(threeLevelTree.maxRecursive());

// For day 2 functions
// console.log(threeLevelTree.contains(2));
// console.log(threeLevelTree.contains(3));

// console.log(threeLevelTree.containsRecursive(6));
// console.log(threeLevelTree.containsRecursive(3));

// console.log(threeLevelTree.range());
// console.log(threeLevelTree.range(threeLevelTree.root.left));

//For day 3 functions
// console.log(emptyTree.insert(1).insert(10).print());
// console.log(threeLevelTree.insert(1).insert(14).print());
// console.log(threeLevelTree.insertRecursive(1).insertRecursive(14).print());


/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
/***************** Uncomment after insert method is created. ****************/
const fullTree = new BinarySearchTree();
fullTree.insert(25).insert(15).insert(10).insert(22).insert(4).insert(12).insert(18).insert(24).insert(50).insert(35).insert(70).insert(31).insert(44).insert(66).insert(90);

//For day 4 functions
// console.log(fullTree.toArrPreorder());
// console.log(fullTree.toArrInorder());
// console.log(fullTree.toArrPostorder());


//For day 5 functions
console.log(fullTree.size());
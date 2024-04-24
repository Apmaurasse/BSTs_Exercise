class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
        this.root = newNode;
        return this;
    }

    let current = this.root;
    while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
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


  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    const newNode = new Node(val);
    if (!node) {
        this.root = newNode;
        return this;
    }

    if (val === node.val) return undefined; 

    if (val < node.val) {
        if (node.left === null) {
            node.left = newNode;
            return this;
        }
        return this.insertRecursively(val, node.left);
    } else {
        if (node.right === null) {
            node.right = newNode;
            return this;
        }
        return this.insertRecursively(val, node.right);
    }
}


  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current) {
        if (val === current.val) return current;
        if (val < current.val) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return undefined;
}


  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (!node) return undefined;

    if (val === node.val) return node;
    if (val < node.val) {
        return this.findRecursively(val, node.left);
    } else {
        return this.findRecursively(val, node.right);
    }
}


  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, visited = []) {
    if (node) {
        visited.push(node.val); 
        this.dfsPreOrder(node.left, visited); 
        this.dfsPreOrder(node.right, visited); 
    }
    return visited;
}


  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, visited = []) {
    if (node) {
        this.dfsInOrder(node.left, visited); 
        visited.push(node.val);
        this.dfsInOrder(node.right, visited);
    }
    return visited;
}

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, visited = []) {
    if (node) {
        this.dfsPostOrder(node.left, visited); 
        this.dfsPostOrder(node.right, visited);
        visited.push(node.val); 
    }
    return visited;
}


  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) return [];

    const visited = [];
    const queue = [this.root];

    while (queue.length > 0) {
        const current = queue.shift();
        visited.push(current.val);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return visited;
}


  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;

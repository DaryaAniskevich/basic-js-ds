const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootEl = null;
  }
  root() {
    return this.rootEl;
  }

  add(data) {
    const addCheck = (node, data) => {
      if (!node) {
        return new Node(data);
      }
      if (node === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addCheck(node.left, data);
      } else {
        node.right = addCheck(node.right, data);
      }

      return node;
    };

    this.rootEl = addCheck(this.rootEl, data);
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data, elem = this.rootEl) {
    if (elem === null) {
      return null;
    }

    if (elem.data === data) {
      return elem;
    } else if (data < elem.data) {
      return this.find(data, elem.left);
    } else {
      return this.find(data, elem.right);
    }
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min(elem = this.rootEl) {
    if (elem === null) {
      return null;
    }

    if (elem.left === null) {
      return elem.data;
    } else {
      return this.min(elem.left);
    }
  }

  max(elem = this.rootEl) {
    if (elem === null) {
      return null;
    }

    if (elem.right === null) {
      return elem.data;
    } else {
      return this.max(elem.right);
    }
  }
}

module.exports = {
  BinarySearchTree,
};

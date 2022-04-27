// const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data
    this.left = this.right = null
  }
}

class BinarySearchTree {
  rootElement

  constructor() {
    this.rootElement = null
  }

  root() {
    return this.rootElement
  }

  addNodeHelper(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode
      } else {
        this.addNodeHelper(node.left, newNode)
      }
    } else if (newNode.data > node.data) {
      if (!node.right) {
        node.right = newNode
      } else {
        this.addNodeHelper(node.right, newNode)
      }
    }
  }

  add(data) {
    let newNode = new Node(data)
    if (!this.rootElement) {
      this.rootElement = newNode
    } else if (this.rootElement.data !== newNode.data) {
      this.addNodeHelper(this.rootElement, newNode)
    }
  }

  has(data) {
    return !!this.find(data)
  }

  find(data) {
    if (!this.rootElement) {
      return false
    }

    let current = this.rootElement

    while (current) {
      if (current.data === data) {
        return current
      }
      if (current.left && data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }

    return null
  }

  remove(data) {}

  min() {
    if (!this.rootElement) {
      return null
    }
    let current = this.rootElement
    while (current.left) {
      current = current.left
    }
    return current.data
  }

  max() {
    if (!this.rootElement) {
      return null
    }
    let current = this.rootElement
    while (current.right) {
      current = current.right
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};
import { TreeNode } from "./TreeNode";

/**
 * A basic binary tree.
 *
 * @typeParam T - The data type of the data nodes.
 *
 * @author Ethan Kletschke
 * @since v0.5.0
 */
export class BinaryTree<T> {
  /**
   * The _root of the binary tree.
   *
   * @defaultValue `null`
   */
  private _root: TreeNode<T> | null = null;

  get root() {
    return this._root;
  }

  /**
   * Inserts a new value to the binary tree.
   *
   * @param value - The value to insert.
   */
  insert(value: T): void {
    const newNode = new TreeNode<T>(value);

    if (!this._root) {
      this._root = newNode;
      return;
    }

    // Level-order insertion (keeps tree roughly balanced)
    const q: TreeNode<T>[] = [this._root];

    while (q.length > 0) {
      const current = q.shift()!;

      if (!current.leftNode) {
        current.leftNode = newNode;
        return;
      } else {
        q.push(current.leftNode);
      }

      if (!current.rightNode) {
        current.rightNode = newNode;
        return;
      } else {
        q.push(current.rightNode);
      }
    }
  }

  /**
   * Performs in-order traversal on the Binary Tree,
   * and returns the result as an array of the nodes'
   * values.
   *
   * @param node - The _root node to traverse from.
   * @returns An array of the binary tree nodes' values
   */
  inOrder(node: TreeNode<T> | null = this._root): T[] {
    // This is the base test for the recursion.
    // If the node doesn't exist, return an empty array.
    if (!node) return [];

    return [
      // Recursively traverse the left tree
      ...this.inOrder(node.leftNode),
      // Current node data
      node.data,
      // Recursively traverse the right tree
      ...this.inOrder(node.rightNode)
    ];
  }
}

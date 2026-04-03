import { TreeNode } from "./TreeNode";

/**
 * A basic binary tree.
 *
 * @experimental
 */
export class BinaryTree<T> {
  root: TreeNode<T> | null = null;

  insert(value: T): void {
    const newNode = new TreeNode<T>(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    // Level-order insertion (keeps tree roughly balanced)
    const q: TreeNode<T>[] = [this.root];

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
}

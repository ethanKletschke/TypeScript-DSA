/**
 * A node for a tree data structure.
 *
 * @typeParam T - the data type of the node's data
 * @experimental
 */
export class TreeNode<T> {
  /** The node's data */
  private _data: T | undefined;
  /** The node to the left of the current node */
  private _left: TreeNode<T> | null = null;
  /** The node to the right of the current node */
  private _right: TreeNode<T> | null = null;


  /**
   * The `constructor` method creates an instance of the `TreeNode` class.
   *
   * @param {?T} [data] - The data for the current node
   */
  constructor(data?: T) {
    this._data = data;
  }

  /**
   * The node to the left of the current node.
   */
  get leftNode(): TreeNode<T> | null {
    return this._left;
  }

  set leftNode(node: TreeNode<T>) {
    this._left = node;
  }

  /**
   * The node to the right of the current node.
   */
  get rightNode(): TreeNode<T> | null {
    return this._right;
  }

  set rightNode(node: TreeNode<T>) {
    this._right = node;
  }

  /**
   * The data for the current tree node.
   */
  get data(): T | undefined {
    return this._data;
  }

  set data(data: T) {
    this._data = data;
  }
}

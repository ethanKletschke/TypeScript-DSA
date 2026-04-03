export class TreeNode<T> {
  private data: T | undefined;
  private left: TreeNode<T>;
  private right: TreeNode<T>;

  constructor(data?: T) {
    this.data = data;
    this.left = new TreeNode<T>();
    this.right = new TreeNode<T>();
  }
}

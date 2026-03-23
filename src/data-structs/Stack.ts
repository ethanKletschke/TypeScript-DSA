import Collection from "./Collection";

/**
 * A last in first out (LIFO) data stucture where
 * items are both added and removed from the top.
 *
 * @remarks
 * The `Stack` class
 */
export default class Stack<T> extends Collection<T> {
  private items: T[];

  constructor() {
    super();
    this.items = [];
  }

  get length() {
    return this.items.length;
  }

  override remove(): T | undefined {
    return this.items.pop();
  }

  override add(item: T): void {
    this.items.push(item);
  }

  override clear(): void {
    this.items = [];
  }

  override peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  override toString(): string {
    return ""; // TODO -> Implement toString()
  }
}

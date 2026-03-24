import Collection from "./Collection";

/**
 * A FIFO (First In First Out) data structure
 * where items are added to the back and removed from
 * the front.
 */
export default class Queue<T> extends Collection<T> {
  private items: T[];

  get length() {
    return this.items.length;
  }

  constructor() {
    super();
    this.items = [];
  }

  override add(item: T): void {
    this.items.push(item);
  }

  override remove(): T | undefined {
    return this.items.shift(); // Dequeue from front
  }

  override peek(): T | undefined {
    return this.items[0];
  }

  override clear(): void {
    this.items = [];
  }

  override toString(): string {
    return ""; // TODO -> Implement toString()
  }
}

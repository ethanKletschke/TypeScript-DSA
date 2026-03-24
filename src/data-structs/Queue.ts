import Collection from "./Collection";

/**
 * A FIFO (First In First Out) data structure
 * where items are added to the back and removed from
 * the front.
 */
export default class Queue<T> extends Collection<T> {
  private items: T[];

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

}

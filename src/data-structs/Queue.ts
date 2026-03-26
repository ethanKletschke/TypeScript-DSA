import { Collection } from "./Collection";

/**
 * A FIFO (First In First Out) data structure
 * where items are added to the back and removed from
 * the front.
 */
export class Queue<T> extends Collection<T> {
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

  override addItems(...items: T[]): void {
    // De-spread the item params and push them to the queue
    this.items.push(...items);
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
    let str: string = "[ ";

    for (const item of this.items) {
      // If the loop reached the last item
      if (item === this.items[this.items.length - 1]) {
        // Do not append a comma and a space
        str += `${item}`;
        // End the loop
        break;
      }

      str += `${item}, `;
    }

    // Close square bracket
    str += " ]";

    // Return the string representation
    return str;
  }
}

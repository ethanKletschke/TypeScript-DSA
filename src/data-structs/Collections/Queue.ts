import { Collection } from "./Collection";

/**
 * A FIFO (First In First Out) data structure
 * where items are added to the back and removed from
 * the front.
 *
 * @typeParam T - The data type of the Queue's items
 *
 * @since 0.1.0
 * @author Ethan Kletschke
 */
export class Queue<T> extends Collection<T> {
  private items: T[];

  /**
   * The length of the Queue.
   */
  override get length() {
    return this.items.length;
  }

  constructor() {
    super();
    this.items = [];
  }

  /**
   * Enqueue a single item at the end of the Queue.
   *
   * @param item - The item to push to the Queue.
   */
  override add(item: T): void {
    this.items.push(item);
  }

  /**
   * Enqueue multiple items at the end of the queue
   * in one function call.
   *
   * @param items - A comma-separated list of values
   * to enqueue.
   */
  override addItems(...items: T[]): void {
    // De-spread the item params and enqueue them
    this.items.push(...items);
  }

  /**
   * Dequeue the front element of the Queue.
   *
   * @returns The Queue's dequeued item
   */
  override remove(): T | undefined {
    return this.items.shift(); // Dequeue from front
  }


  /**
   * View the first element of the queue.
   *
   * @returns The queue's first element.
   */
  override peek(): T | undefined {
    return this.items[0];
  }

  /**
   * Removes all items from the queue.
   */
  override clear(): void {
    this.items = [];
  }

  /**
   * Provides a string representation of the
   * Queue.
   *
   * @returns A formatted string representing the Queue and its
   * elements.
   */
  override toString(): string {
    let str: string = "[ ";

    for (const item of this.items) {
      // If the loop reached the last item
      if (item === this.items[this.items.length - 1]) {
        // Do not append a comma and a space
        str += typeof item === "number" ? `${item}` : `"${item}"`;
        // End the loop
        break;
      }

      str += typeof item === "number" ? `${item}, ` : `"${item}", `;
    }

    // Close square bracket
    str += " ]";

    // Return the string representation
    return str;
  }
}

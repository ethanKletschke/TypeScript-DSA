import { Collection } from "./Collection";

/**
 * A last in first out (LIFO) data stucture where
 * items are both added and removed from the top.
 */
export class Stack<T> extends Collection<T> {
  private items: T[];

  constructor() {
    // Run the "Collection" constructor
    super();
    // Initialise the stack's items
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

  override addItems(...items: T[]): void {
    // De-spread the item params and push them to the stack
    this.items.push(...items);
  }

  override clear(): void {
    this.items = [];
  }

  override peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  override toString(): string {
    let str: string = "[ ";

    for (const item of this.items) {
      // If the loop reached the last item
      if (item === this.items[this.items.length - 1]) {
        // Do not append a comma and a space
        str += typeof item == "number" ? `${item}` : `"${item}"`;
        // End the loop
        break;
      }

      str += typeof item == "number" ? `${item}, ` : `"${item}", `;
    }

    // Close square bracket
    str += " ]";

    // Return the string representation
    return str;
  }
}

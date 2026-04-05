import { Collection } from "./Collection";

/**
 * A last in first out (LIFO) data stucture where
 * items are both added and removed from the top.
 *
 * @author Ethan Kletschke
 * @since 0.1.0
 */
export class Stack<T> extends Collection<T> {
  /** The items in the stack. */
  private items: T[];

  constructor() {
    // Run the "Collection" constructor
    super();
    // Initialise the stack's items
    this.items = [];
  }

  /**
   * The length of the stack.
   */
  override get length() {
    return this.items.length;
  }

  /**
   * Removes item at the top (the end)
   * of the stack, and returns it.
   *
   * @returns The removed top item of the stack,
   * or `undefined` if the stack is empty.
   */
  override remove(): T | undefined {
    return this.items.pop();
  }

  /**
   * Pushes a new item to the top (the end)
   * of the stack.
   *
   * @param item - The item to push to the stack
   */
  override add(item: T): void {
    // Push the new item to the stack
    this.items.push(item);
  }

  override addItems(...items: T[]): void {
    // De-spread the item params and push them to the stack
    this.items.push(...items);
  }

  /**
   * Removes every item from the stack.
   */
  override clear(): void {
    this.items = [];
  }

  /**
   * View the top (the end) of the stack.
   *
   * @returns The stack's top item.
   */
  override peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  /**
   * Returns a string representation of the
   * stack.
   *
   * @returns A formatted string representing the
   * stack and the items held within.
   */
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

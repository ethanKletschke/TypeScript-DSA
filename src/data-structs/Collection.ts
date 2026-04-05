/**
 * This abstract class defines the simple structure
 * for a collection, like a queue or a stack.
 *
 * @typeParam T - The data type of the collection
 *
 * @author Ethan Kletschke
 * @since 0.1.0
 */
export abstract class Collection<T> {
  /** The length of the collection. */
  abstract get length(): number;
  /** Removes an item from the collection. */
  abstract remove(): T | undefined;
  /** Adds an item to the collection. */
  abstract add(item: T): void;
  /** Adds multiple items to the collection. */
  abstract addItems(...items: T[]): void;
  /** Removes every item from the collection. */
  abstract clear(): void;
  /** View one item from the collection. */
  abstract peek(): T | undefined;
  /** Represent the collection with a string literal. */
  abstract toString(): string;

  /**
   * Checks if the collection is empty.
   *
   * @returns `true` if the length of the `Collection` is
   * stricly equal to 0.
   */
  isEmpty(): boolean {
    return this.length === 0;
  }
}

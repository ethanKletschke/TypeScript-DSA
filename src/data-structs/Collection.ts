/**
 * This abstract class defines the simple structure
 * for a collection, like a queue or a stack.
 */
export default abstract class Collection<T> {
  abstract get length(): number;
  abstract remove(): T | undefined;
  abstract add(item: T): void;
  // TODO -> multiple add() with spread operator
  abstract clear(): void;
  abstract peek(): T | undefined;
  abstract toString(): string;

  isEmpty(): boolean {
    return this.length === 0;
  }
}

/**
 * An abstract class for a collection
 *
 * @remarks
 * This abstract class defines the simple structure
 * for a collection, like a queue or a stack.
 */
export default abstract class Collection<T> {
  abstract get length(): number;
  abstract remove(): T | undefined;
  abstract add(item: T): void;
  abstract clear(): void;
  abstract peek(): T | undefined;
  abstract toString(): string;

  isEmpty(): boolean {
    return this.length === 0;
  }
}

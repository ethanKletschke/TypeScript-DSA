/**
 *
 */
export default abstract class Collection<T> {
  abstract length: number;
  abstract pop(): T;
  abstract clear(): void;
  abstract peek(): T | undefined;

  isEmpty(): boolean {
    return this.length === 0;
  }
}

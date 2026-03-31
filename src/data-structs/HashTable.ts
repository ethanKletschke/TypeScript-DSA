export type Entry<V> = { key: string; value: V };

/**
 * A data structure that stores key-value pairs in
 * an array of buckets.
 *
 * @remarks
 * The key type is limited to `string`, but the
 * value is generic (typed as `V`).
 */
export class HashTable<V> {
  private buckets: Entry<V>[][] = [];
  private _count: number = 0;

  constructor(len: number = 101) {
    for (let i = 0; i < len; i++) {
      this.buckets.push([]);
    }
  }

  private get loadFactor(): number {
    return this.count / this.buckets.length;
  }

  // The number of items in all the buckets
  get count(): number {
    return this._count;
  }

  // The number of buckets
  get size(): number {
    return this.buckets.length;
  }

  /**
   * Defines which key to put a value under
   *
   * @remarks
   * Implemented using the DJB2 algorithm
   */
  public hashFunc(key: string): number {
    // Define a seed for the hash
    let hash = 5381;

    // For each character in the key
    for (let i = 0; i < key.length; i++) {
      // Add to the hash
      hash = (hash * 33) ^ key.charCodeAt(i);
    }

    return Math.abs(hash) % this.size;
  }

  public get(key: string): Entry<V> | undefined {
    // Find the hash of the key provided.
    const index = this.hashFunc(key);

    // Return the item in the specified bucket or undefined
    // if it's not found.
    return this.buckets[index].find(item => item.key === key);
  }

  /**
   * Sets or adds a new item.
   *
   * @remarks
   * This method either adds a new item or sets
   * the value of an existing item.
   */
  public set(key: string, newValue: V): void {
    const index = this.hashFunc(key);
    const bucket = this.buckets[index];

    const existingItem = bucket.find(item => item.key === key);

    if (existingItem) {
      existingItem.value = newValue;
      return;
    }

    bucket.push({ key: key, value: newValue });
    this._count++;

    if (this.loadFactor > 0.7) {
      this.resize();
    }
  }

  /**
   * Resizes and rehashes the Hash Table.
   *
   * @remarks
   * Called automatically in the `set()` method if the
   * `loadFactor` is above 0.7.
   */
  private resize(): void {
    // Store the current buckets.
    const oldBuckets = this.buckets;

    // Double the capacity.
    const newCapacity = oldBuckets.length * 2;

    // Reinitialise the buckets.
    this.buckets = Array.from({ length: newCapacity }, () => []);

    // Reset size
    this._count = 0;

    // Rehash all entries
    for (const oldBucket of oldBuckets) {
      for (const entry of oldBucket) {
        this.set(entry.key, entry.value);
      }
    }
  }
}

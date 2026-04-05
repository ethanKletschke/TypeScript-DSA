/**
 * A single entry in the hash table.
 *
 * @author Ethan Kletschke
 * @since v0.4.0
 */
export type Entry<V> = { key: string; value: V };

/**
 * A data structure that stores key-value pairs in
 * an array of buckets. The key type is limited to
 * `string`, but the data type of the value is generic.
 *
 * @typeParam V - The value type for the Hash Table
 *
 * @author Ethan Kletschke
 * @since v0.4.0
 */
export class HashTable<V> {
  /** The buckets that hold each data item. */
  private buckets: Entry<V>[][] = [];
  /** The count of every item in the buckets. */
  private _count: number = 0;

  constructor(len: number = 101) {
    for (let i = 0; i < len; i++) {
      this.buckets.push([]);
    }
  }

  /**
   * The load factor of the hash table.
   * Used to determine if the Hash Table should
   * be resized.
   */
  private get loadFactor(): number {
    return this.count / this.buckets.length;
  }

  /**
   * The number of items in all the buckets
   */
  get count(): number {
    return this._count;
  }

  /**
   * The number of buckets
   */
  get size(): number {
    return this.buckets.length;
  }

  /**
   * Defines which bucket to put a value under.
   * Implemented using the DJB2 algorithm
   *
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

  /**
   * Find the value associated with a specific key utilising
   * the `HashTable`'s hash function.
   *
   * @param key - The key to find the value for
   * @returns The value associated with the provided
   * key
   */
  public get(key: string): V | undefined {
    // Find the hash of the key provided.
    const index = this.hashFunc(key);

    // Return the item in the specified bucket or undefined
    // if it's not found.
    return this.buckets[index].find(item => item.key === key)?.value;
  }

  /**
   * Adds a new item to the hash table, or
   * sets the value of an existing item.
   */
  public set(key: string, newValue: V): void {
    // Get the bucket index
    const index = this.hashFunc(key);
    // Get the bucket with that index
    const bucket = this.buckets[index];

    // Attempt to find the item with the provided key.
    const existingItem = bucket.find(item => item.key === key);

    if (existingItem) {
      // If the item exists, update its value.
      existingItem.value = newValue;
      return;
    }

    // Push the new item to the current bucket
    bucket.push({ key: key, value: newValue });
    this._count++;

    // Resize if the load factor is above 0.7
    if (this.loadFactor > 0.7) {
      this.resize();
    }
  }

  /**
   * Resizes and rehashes the Hash Table. This method is
   * called automatically in the `set()` method if the
   * `loadFactor` is above 0.7.
   */
  private resize(): void {
    // Store the current buckets.
    const oldBuckets = this.buckets;

    // Double the capacity.
    const newCapacity = oldBuckets.length * 2;

    // Reinitialise the buckets.
    this.buckets = Array.from({ length: newCapacity }, () => []);

    // Reset the stored size
    this._count = 0;

    // Rehash all entries
    for (const oldBucket of oldBuckets) {
      for (const entry of oldBucket) {
        this.set(entry.key, entry.value);
      }
    }
  }
}

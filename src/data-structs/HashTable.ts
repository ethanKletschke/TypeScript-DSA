export type Entry<V> = { key: string; value: V };

export class HashTable<V> {
  private buckets: Entry<V>[][] = [];

  constructor(len: number = 101) {
    for (let i = 0; i < len; i++) {
      this.buckets.push([]);
    }
  }

  get size() {
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

  public add(newKey: string, newValue: V): void {
    // Find the index for the bucket via the hash function.
    const index = this.hashFunc(newKey);

    // Create a new Entry item to push to the bucket
    const newItem: Entry<V> = { key: newKey, value: newValue };

    // Push the new item to the bucket.
    this.buckets[index].push(newItem);
  }

  public get(key: string): Entry<V> | undefined {
    // Find the hash of the key provided.
    const index = this.hashFunc(key);

    // Return the item in the specified bucket or undefined
    // if it's not found.
    return this.buckets[index].find(item => item.key === key);
  }
}

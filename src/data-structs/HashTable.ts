export type Entry<V> = { key: string; value: V };

export class HashTable<V> {
  private buckets: Entry<V>[][] = [];
  private _count: number = 0;

  private get loadFactor() {
    return this.count / this.buckets.length;
  }

  constructor(len: number = 101) {
    for (let i = 0; i < len; i++) {
      this.buckets.push([]);
    }

    this._count = 0;
  }

  get count() {
    return this._count;
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

    return Math.abs(hash) % this.buckets.length;
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
    } else {
      bucket.push({ key: key, value: newValue });
      this._count++;
    }
  }
}

export type Entry<K, V> = { key: K; value: V };

export class HashTable<V> {
  private items: Entry<string, V>[][] = [];

  constructor(len: number = 101) {
    for (let i = 0; i < len; i++) {
      this.items.push([]);
    }
  }

  get size() {
    return this.items.length;
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
}

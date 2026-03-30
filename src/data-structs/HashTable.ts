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
}

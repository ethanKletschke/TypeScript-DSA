import { HashTable } from "@/data-structs";
import { expect } from "chai";

describe("HashTable", function () {
  describe("constructor()", function () {
    it("Instantiates a HashTable object", function () {
      const ht = new HashTable();

      expect(ht).to.be.an.instanceOf(HashTable);
    });
  });

  describe("get count()", function () {
    it("Returns the total number of items in the Hash Table", function () {
      const ht_HTTP_Codes = new HashTable<number>();

      ht_HTTP_Codes.set("NOT_FOUND", 404);
      ht_HTTP_Codes.set("OK", 200);

      expect(ht_HTTP_Codes.count).to.equal(2);
    });

    it("Updates after each addition to the Hash Table", function () {
      const ages = new HashTable<number>();

      ages.set("Ethan", 19);
      expect(ages.count).to.equal(1);

      ages.set("Sabrina", 20);
      expect(ages.count).to.equal(2);

      ages.set("Zara", 18);
      expect(ages.count).to.equal(3);
    });
  });

  describe("get size()", function () {
    it("Returns the number of buckets in the hash table", function () {
      const ht1 = new HashTable<number>(100);
      const ht2 = new HashTable<string>();

      expect(ht1.size).to.equal(100);
      expect(ht2.size).to.equal(101);
    });
  });
});

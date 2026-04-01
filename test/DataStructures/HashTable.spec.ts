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

  describe("hashFunc()", function () {
    it("Generates the same hash for the same input", function () {
      const key = "Hello";

      const hash1 = new HashTable().hashFunc(key);
      const hash2 = new HashTable().hashFunc(key);

      expect(hash1).to.equal(hash2);
    });

    it("Generates different hashes for similar keys", function () {
      const h1 = new HashTable().hashFunc("abc");
      const h2 = new HashTable().hashFunc("abd");

      expect(h1).to.not.equal(h2);
    });

    it("Is sensitive to character order", function () {
      const h1 = new HashTable().hashFunc("abc");
      const h2 = new HashTable().hashFunc("cba");

      expect(h1).to.not.equal(h2);
    });

    it("Doesn't give a negative hash", function () {
      const hash = new HashTable().hashFunc("test");

      expect(hash).to.be.at.least(0);
    });
  });

  describe("get()", function () {
    it("Returns an existing member", function () {
      const ht = new HashTable<number>();

      ht.set("I Exist", 123);

      expect(ht.get("I Exist")).to.not.be.undefined;
      expect(ht.get("I Exist")).to.equal(123);
    });

    it("Returns undefined for a non-existant member", function () {
      const presidents = new HashTable<number>();
      expect(presidents.get("Franklin D. Roosevelt")).to.be.undefined;
    });
  });

  describe("set()", function () {
    it("Creates a new member", function () {
      const ht = new HashTable<number>(101);
      expect(ht.get("Ethan")).to.be.undefined;

      ht.set("Ethan", 100);
      expect(ht.get("Ethan")).to.not.be.undefined;
      expect(ht.get("Ethan")).to.equal(100);
    });

    it("Sets the value of an existing member", function () {
      const ht = new HashTable<number>();
      ht.set("Ethan", 100);
      expect(ht.get("Ethan")).to.equal(100);

      ht.set("Ethan", 2);
      expect(ht.get("Ethan")).to.equal(2);
    });

    it("Retains all entries after resizing", function () {
      const ht = new HashTable<number>(2); // Really small size triggers resize quickly

      ht.set("a", 1);
      ht.set("b", 2);
      ht.set("c", 3); // Triggers resize

      expect(ht.get("a")).to.equal(1);
      expect(ht.get("b")).to.equal(2);
      expect(ht.get("c")).to.equal(3);
    });

    it("Doubles the size of the Hash Table on resize", function () {
      const ht = new HashTable<number>(2);

      ht.set("a", 1);
      ht.set("b", 2);
      ht.set("c", 3); // Triggers resize

      expect(ht.size).to.be.greaterThan(2);
    });

    it("Maintains the correct count after resizing", function () {
      const ht = new HashTable<number>(2);

      ht.set("a", 1);
      ht.set("b", 2);
      ht.set("c", 3); // Triggers resize

      expect(ht.count).to.equal(3);
    });
  });
});

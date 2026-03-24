import { Collection, Queue } from "@/data-structs";
import { expect } from "chai";

describe("Queue", function () {
  describe("constructor()", function () {
    it("Creates an instance of the Queue class", function () {
      const q = new Queue();

      expect(q).to.be.an.instanceOf(Queue, "Did not create a queue.");
    });

    it("Properly inherits from the Collection abstract class", function () {
      const q = new Queue();

      expect(q).to.be.an.instanceOf(Collection, "Did not inherit from Collection.");
    });
  });

  describe("length() getter", function() {
    it("Returns the length of the queue", function () {
      const q = new Queue<string>();

      q.add("Item 1");
      q.add("Item 2");

      expect(q.length).to.equal(2, "Length not returned correctly.");
    });
  });

  describe("add()", function () {
    it("Adds individual items to the queue", function () {
      const q = new Queue<number>();

      q.add(1);
      q.add(2);
      q.add(3);
      q.add(4);

      expect(q.length).to.not.equals(0, "Items not added.");
    });
  });

  describe("isEmpty()", function() {
    it("Correctly determines if the queue is empty", function () {
      const fullQ = new Queue<string>();
      const emptyQ = new Queue();

      fullQ.add("Not Empty :)");

      expect(fullQ.isEmpty(), "fullQ incorrectly determined to be empty").to.be.false;
      expect(emptyQ.isEmpty(), "emptyQ incorrectly determined to be not empty.").to.be.true;
    });
  });
});

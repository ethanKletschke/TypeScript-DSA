import { Collection, Queue } from "@/index";
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

  describe("get length()", function() {
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

  describe("peek()", function() {
    it("Returns the first item added.", function () {
      const q = new Queue<number>();

      q.add(42);

      expect(q.peek()).to.equal(42, "peek() did not return the 1st item");
    });
  });

  describe("remove()", function() {
    it("Removes from the front of the queue", function () {
      const q = new Queue<number>();

      q.add(1);
      q.add(2);
      q.add(3);

      const removed = q.remove();

      expect(q.peek()).to.equal(2, "Queue did not remove from the front (index 0).");
      expect(removed).to.equal(1, "Queue did not properly return the removed item.");
    });
  });

  describe("clear()", function() {
    it("Fully clears the queue", function () {
      const q = new Queue<number>();

      q.add(0);
      q.add(0);
      q.add(0);
      q.add(0);
      q.add(0);

      q.clear();

      expect(q.peek(), "Peeked an existing element after clearing queue.").to.be.undefined;
      expect(q.length).to.equal(0, "Queue not empty.");
    });
  });

  describe("toString()", function() {
    it("Returns a correctly formatted string representation of a number Queue", function () {
      const q = new Queue<number>();

      q.add(1);
      q.add(2);
      q.add(3);
      q.add(4);

      expect(q.toString()).to.equal("[ 1, 2, 3, 4 ]", "toString() output not correctly formatted");
    });
  });
});

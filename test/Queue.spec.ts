import { Collection, Queue } from "@/data-structs";
import { expect } from "chai";

describe("Queue", function () {
  describe("constructor()", function () {
    it("Creates an instance of the Queue class", function () {
      const q = new Queue();

      expect(q).to.be.an.instanceOf(Queue, "Did not create a queue");
    });

    it("Properly inherits from the Collection abstract class", function () {
      const q = new Queue();

      expect(q).to.be.an.instanceOf(Collection, "Did not inherit from Collection");
    });
  });

  describe("add()", function () {
    it("Adds items to the queue", function () {
      const q = new Queue<number>();

      q.add(1);
      q.add(2);
      q.add(3);
      q.add(4);

      expect(q.length).to.not.equals(0, "Items not added.");
    });
  });
});

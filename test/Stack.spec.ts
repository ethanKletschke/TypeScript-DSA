import { Collection, Stack } from "@/data-structs";
import { expect } from "chai";

describe("Stack", function() {
  describe("constructor()", function() {
    it("Creates an instance of the Stack class", function () {
      const s = new Stack();
      expect(s).to.be.an.instanceOf(Stack, "Did not instantiate a Stack.");
    });

    it("Inherits from the Collection abstract class", function () {
      const s = new Stack();
      expect(s).to.be.an.instanceOf(Collection, "Did not inherit from Collection.");
    });
  });

  describe("get length()", function() {
    it("Returns the correct length of the stack", function () {
      // Initialise a stack object
      const s = new Stack<number>();

      // Push items to the stack
      s.add(10);
      s.add(20);
      s.add(30);

      // Assert that the length is equal to 3.
      expect(s.length).to.equal(3, "Incorrect length returned");
    });
  });
});

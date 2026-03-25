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
});

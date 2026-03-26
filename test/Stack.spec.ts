import { Collection, Stack } from "@/index";
import { expect } from "chai";

describe("Stack", function () {
  describe("constructor()", function () {
    it("Creates an instance of the Stack class", function () {
      const s = new Stack();
      expect(s).to.be.an.instanceOf(Stack, "Did not instantiate a Stack.");
    });

    it("Inherits from the Collection abstract class", function () {
      const s = new Stack();
      expect(s).to.be.an.instanceOf(Collection, "Did not inherit from Collection.");
    });
  });

  describe("add()", function () {
    it("Pushes items to the top (end) of the stack", function () {
      const s = new Stack<number>();

      s.add(10);
      s.add(20);
      s.add(30);

      expect(s.peek()).to.equal(30, "Top of stack isn't equal to the last item added.");
      expect(s.length).to.equal(3, "Not all items were added.");
    });
  });

  describe("addItems()", function () {
    it("Adds multiple items to a stack", function () {
      const s = new Stack<number>();

      s.addItems(1, 2, 3, 4);

      expect(s.length).to.equal(4, "Did not add all items.");
      expect(s.peek()).to.equal(4, "Did not add the last item");
    });
  });

  describe("get length()", function () {
    it("Returns the correct length of the stack", function () {
      // Initialise a stack object
      const s = new Stack<number>();

      // Push items to the stack
      s.add(10);
      s.add(20);
      s.add(30);

      // Assert that the length is equal to 3.
      expect(s.length).to.equal(3, "Incorrect length returned.");
    });

  });

  describe("remove()", function () {
    it("Removes the last item from the stack", function () {
      const s = new Stack<number>();

      s.addItems(1, 2, 3, 4);

      s.remove();

      expect(s.peek()).to.equal(3, "Last item in the stack wasn't removed.");
    });

    it("Returns the removed item", function () {
      const s = new Stack<number>();

      s.addItems(1, 2, 3, 4);

      const res = s.remove();
      expect(res).to.equal(4, "Wrong item was removed from the stack.");
    });
  });
});

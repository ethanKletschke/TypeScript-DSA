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

  describe("peek()", function () {
    it("Returns the topmost element of the stack", function () {
      const s = new Stack<string>();

      s.add("Hi");

      expect(s.peek()).to.equal("Hi", "Peek() failed");
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

  describe("clear()", function () {
    it("Fully clears the stack", function () {
      const s = new Stack<number>();

      s.addItems(1, 2, 3, 4, 5);
      s.clear();

      expect(s.length).to.equal(0, "Length must be zero after clearing.");
      expect(s.peek(), "Stack should be empty.").to.be.undefined;
    });
  });

  describe("toString()", function () {
    it("Returns a formatted string representation of a number Stack", function () {
      const s = new Stack<number>();

      s.addItems(1, 2, 3, 4);

      expect(s.toString()).to.equal("[ 1, 2, 3, 4 ]", "String not formatted correctly.");
    });
  });
});

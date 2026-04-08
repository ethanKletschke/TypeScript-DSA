import { BinaryTree } from "@/data-structs";
import { expect } from "chai";

describe("BinaryTree", function () {
  describe("insert()", function () {

    it("Inserts a single node to the binary tree as its root", function () {
      const bt = new BinaryTree<number>();
      bt.insert(20);
      expect(bt.root!.data).to.equal(20);
    });

    it("Inserts multiple nodes", function () {
      const bt = new BinaryTree<number>();

      bt.insert(10);
      bt.insert(20);
      bt.insert(30);

      const res = bt.inOrder();

      expect(res).to.deep.equal([20, 10, 30]);
    });
  });
});

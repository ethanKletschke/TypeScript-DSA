import { bubbleSort } from "@/algorithms";
import { expect } from "chai";

describe("bubbleSort()", function () {
  it("Sorts a numeric array in ascending order", function () {
    const arr = [3, 1, 78, 12, 6, 9, 10, 98];

    expect(bubbleSort([...arr])).to.deep.equal([1, 3, 6, 9, 10, 12, 78, 98]);
  });

  it("Sorts a string array", function () {
    const arr1 = ["D", "S", "A"];
    const arr2 = ["B", "A", "D"];
    const arr3 = ["N", "F", "V"];

    expect(bubbleSort([...arr1])).to.deep.equal(["A", "D", "S"]);
    expect(bubbleSort([...arr2])).to.deep.equal(["A", "B", "D"]);
    expect(bubbleSort([...arr3])).to.deep.equal(["F", "N", "V"]);
  });
});

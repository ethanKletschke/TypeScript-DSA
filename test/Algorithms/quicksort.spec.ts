import { quicksort } from "@/algorithms";
import { expect } from "chai";

describe("quicksort()", function () {
  it("Sorts numeric arrays", function () {
    const arr1 = [1, -75, -6, 1, 20, 100, 892, 755, 928, 673, 88];
    const arr2 = [5, 4, 3, 2, 1, 0, -1, -2, -3];

    expect(quicksort([...arr1])).to.deep.equal([-75, -6, 1, 1, 20, 88, 100, 673, 755, 892, 928]);
    expect(quicksort([...arr2])).to.deep.equal([-3, -2, -1, 0, 1, 2, 3, 4, 5]);
  });

  it("Sorts string arrays", function () {
    const arr1 = ["K", "C", "B", "X"];
    const arr2 = ["B", "D", "A", "C", "E", "Z", "X"];

    expect(quicksort([...arr1])).to.deep.equal(["B", "C", "K", "X"]);
    expect(quicksort([...arr2])).to.deep.equal(["A", "B", "C", "D", "E", "X", "Z"]);
  });

  it("Sorts numeric strings lexographically", function () {
    const arr = ["100", "10", "300", "200", "20", "90"];

    expect(quicksort([...arr])).to.deep.equal(["10", "100", "20", "200", "300", "90"]);
  });
});

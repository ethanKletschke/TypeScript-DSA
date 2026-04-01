import { linearSearch } from "@/algorithms";
import { expect } from "chai";

describe("linearSearch()", function () {
  it("Returns the index of the value to find", function () {
    const arrToSearch = [1, 43, 12, 10, 7, 100, 12];

    expect(linearSearch(arrToSearch, 7)).to.equal(4);
    expect(linearSearch(arrToSearch, 1)).to.equal(0);
  });

  it("Returns -1 if the value is not found", function () {
    const arrToSearch = [1, 43, 12, 10, 7, 100, 12];

    expect(linearSearch(arrToSearch, 100000)).to.equal(-1);
  });
});

import { describe, it, expect } from "vitest";
import { countSheeps } from "./app";

describe("countSheeps", () => {
  it("should count the number of sheep correctly for list 1", () => {
    const list1 = [
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
    ];
    const result = countSheeps(list1);
    expect(result).toBe("There are 17 sheep in total");
  });

  it("should handle the case when there are no sheep", () => {
    const list2 = [false, false, false];
    const result = countSheeps(list2);
    expect(result).toBe("UPS!!! Wolfs eaten Sheeps");
  });
});

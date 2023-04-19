const reverseString = require("./tasktwo");

describe("reverseString", () => {
  test("reverses a string correctly", () => {
    expect(reverseString("Melanie")).toBe("einaleM");
    expect(reverseString("12345")).toBe("54321");
    expect(reverseString("")).toBe("");
  });
});
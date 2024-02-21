// validateDollarAmount.test.js
import ValidateDollarAmount from "./ValidateDollarAmount";
import { describe, expect, it } from "vitest";

describe("ValidateDollarAmount", () => {
  it("validates correct dollar amounts with two decimal places", () => {
    expect(ValidateDollarAmount("100.00")).toBe(true);
    expect(ValidateDollarAmount("999")).toBe(true);
    expect(ValidateDollarAmount("0.99")).toBe(true);
  });

  it("rejects invalid dollar amounts", () => {
    expect(ValidateDollarAmount("100.999")).toBe(false);
    expect(ValidateDollarAmount("-100.00")).toBe(false);
    expect(ValidateDollarAmount("abc")).toBe(false);
    expect(ValidateDollarAmount("100.0a")).toBe(false);
    expect(ValidateDollarAmount("")).toBe(false);
    expect(ValidateDollarAmount(" ")).toBe(false);
    expect(ValidateDollarAmount("100.001")).toBe(false);
  });
});

function isValidHex(hex) {
  return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex);
}

function formatColorName(name) {
  if (!name || typeof name !== "string") 
    return "";
  return name.trim().toLowerCase().replace(/\s+/g, "-");
}

// Tests

test("valid 6-digit hex color passes", () => {
  expect(isValidHex("#FF5733")).toBe(true);
});

test("valid 3-digit hex color passes", () => {
  expect(isValidHex("#F53")).toBe(true);
});

test("hex without # fails", () => {
  expect(isValidHex("FF5733")).toBe(false);
});

test("invalid hex string fails", () => {
  expect(isValidHex("#ZZZZZZ")).toBe(false);
});

test("formatColorName lowercases and hyphenates", () => {
  expect(formatColorName("Sky Blue")).toBe("sky-blue");
});

test("formatColorName handles extra whitespace", () => {
  expect(formatColorName("  Coral Red  ")).toBe("coral-red");
});

test("formatColorName returns empty string for invalid input", () => {
  expect(formatColorName(null)).toBe("");
});

const { execSync } = require("child_process");

test("Login.php file exists and has valid PHP syntax", () => {
  const result = execSync("php -l api/Login.php").toString();
  expect(result).toMatch(/No syntax errors/);
});

test("AddColor.php file exists and has valid PHP syntax", () => {
  const result = execSync("php -l api/AddColor.php").toString();
  expect(result).toMatch(/No syntax errors/);
});

test("SearchColors.php file exists and has valid PHP syntax", () => {
  const result = execSync("php -l api/SearchColors.php").toString();
  expect(result).toMatch(/No syntax errors/);
});

test("Login.php contains expected JSON error response structure", () => {
  const content = require("fs").readFileSync("api/Login.php", "utf8");
  expect(content).toMatch(/"error"/);
  expect(content).toMatch(/"id"/);
});

test("SearchColors.php contains expected JSON results structure", () => {
  const content = require("fs").readFileSync("api/SearchColors.php", "utf8");
  expect(content).toMatch(/"results"/);
  expect(content).toMatch(/"error"/);
});

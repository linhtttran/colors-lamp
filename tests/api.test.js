const BASE_URL = process.env.APP_URL || "http://localhost:8080";

test("GET /api/SearchColors.php returns 200", async () => {
  const res = await fetch(`${BASE_URL}/api/SearchColors.php`);
  expect(res.status).toBe(200);
});

test("GET /api/SearchColors.php returns JSON", async () => {
  const res = await fetch(`${BASE_URL}/api/SearchColors.php`);
  const contentType = res.headers.get("content-type");
  expect(contentType).toMatch(/application\/json/);
});

test("GET /api/SearchColors.php returns an array", async () => {
  const res = await fetch(`${BASE_URL}/api/SearchColors.php`);
  const data = await res.json();
  expect(Array.isArray(data)).toBe(true);
});

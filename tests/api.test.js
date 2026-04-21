const BASE_URL = process.env.APP_URL || "http://localhost:8080";

test("GET /api/colors.php returns 200", async () => {
  const res = await fetch(`${BASE_URL}/api/colors.php`);
  expect(res.status).toBe(200);
});

test("GET /api/colors.php returns JSON", async () => {
  const res = await fetch(`${BASE_URL}/api/colors.php`);
  const contentType = res.headers.get("content-type");
  expect(contentType).toMatch(/application\/json/);
});

test("GET /api/colors.php returns array with expected fields", async () => {
  const res = await fetch(`${BASE_URL}/api/colors.php`);
  const data = await res.json();

  expect(Array.isArray(data)).toBe(true);

  if (data.length > 0) {
    const color = data[0];
    expect(color).toHaveProperty("id");
    expect(color).toHaveProperty("name");
    expect(color).toHaveProperty("hex");
  }
});

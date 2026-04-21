const BASE_URL = process.env.APP_URL || "http://localhost:8080";

test("POST /api/Login.php responds with JSON", async () => {
  const res = await fetch(`${BASE_URL}/api/Login.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ login: "test", password: "test" })
  });
  const contentType = res.headers.get("content-type");
  expect(contentType).toMatch(/application\/json/);
});

test("POST /api/Login.php returns expected error fields on bad credentials", async () => {
  const res = await fetch(`${BASE_URL}/api/Login.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ login: "test", password: "test" })
  });
  const data = await res.json();
  expect(data).toHaveProperty("error");
  expect(data).toHaveProperty("id");
});

test("POST /api/SearchColors.php responds with JSON", async () => {
  const res = await fetch(`${BASE_URL}/api/SearchColors.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ search: "red", userId: "1" })
  });
  const contentType = res.headers.get("content-type");
  expect(contentType).toMatch(/application\/json/);
});

test("POST /api/SearchColors.php returns expected JSON structure", async () => {
  const res = await fetch(`${BASE_URL}/api/SearchColors.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ search: "red", userId: "1" })
  });
  const data = await res.json();
  expect(data).toHaveProperty("error");
});

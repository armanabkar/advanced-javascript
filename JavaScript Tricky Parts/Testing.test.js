// These are just dummy tests and can't be executed

const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

// Unit Tests
test("should output name and age", () => {
  const text = generateText("Max", 29);
  expect(text).toBe("Max (29 years old)");
});

// Integration Tests
test("should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 29);
  expect(text).toBe("Max (29 years old)");
});

// E2E Tests
test("should create an element with text and correct class", async () => {
  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 80,
    // args: ['--window-size=1920,1080']
  });
  const page = await browser.newPage();
  await page.goto(
    "file:///Users/mschwarzmueller/development/teaching/youtube/js-testing/index.html"
  );
  await page.click("input#name");
  await page.type("input#name", "Anna");
  await page.click("input#age");
  await page.type("input#age", "28");
  await page.click("#btnAddUser");
  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("Anna (28 years old)");
}, 10000);

// Testing Async code
const { loadTitle } = require("./util");
test("should print an uppercase text", () => {
  loadTitle().then((title) => {
    expect(title).toBe("DELECTUS AUT AUTEM");
  });
});

// Mocks; we want to test our own code not the API, put these mock functions in __mocks__ folder and then use jest.mock(...)
jest.mock("./http");
const fetchData = () => {
  return Promise.resolve({ title: "delectus aut autem" });
};
const get = (url) => {
  return Promise.resolve({ data: { title: "delectus aut autem" } });
};

// It's impossible to write good tests for bad code!

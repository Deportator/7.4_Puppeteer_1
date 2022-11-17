let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  }, 3000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 3000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(
      btnSelector,
      {
        visible: true,
      },
      3000
    );
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  });
});

test("The page Inclusion", async () => {
  await page.goto("https://github.com/about/diversity");
  await page.waitForSelector("h1");
  const title3 = await page.title();
  expect(title3).toEqual(
    "Global diversity, inclusion, and belonging at GitHub · GitHub"
  );
}, 3000);

test("The page Electron", async () => {
  await page.goto("https://www.electronjs.org/");
  await page.waitForSelector("h1");
  const title3 = await page.title();
  expect(title3).toEqual(
    "Build cross-platform desktop apps with JavaScript, HTML, and CSS | Electron"
  );
});

test("The page Pricing", async () => {
  await page.goto("https://github.com/pricing");
  await page.waitForSelector("h1");
  const title3 = await page.title();
  expect(title3).toEqual("Pricing · Plans for every developer · GitHub");
}, 3000);

import { chromium } from "/Users/liqing/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";

const baseUrl = "http://127.0.0.1:4173";
const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});

const errors = [];
const desktop = await browser.newPage({ viewport: { width: 1677, height: 909 }, deviceScaleFactor: 1 });
desktop.on("console", (message) => {
  if (message.type() === "error") errors.push(message.text());
});
desktop.on("pageerror", (error) => errors.push(error.message));

await desktop.goto(`${baseUrl}/zh/`, { waitUntil: "networkidle" });
await desktop.waitForTimeout(1600);
await desktop.screenshot({ path: "previews/preview-zh-desktop.png", fullPage: false });

await desktop.getByRole("button", { name: "查看全部产品", exact: true }).click();
await desktop.getByRole("heading", { name: "产品目录", exact: true }).waitFor();
await desktop.getByPlaceholder("搜索产品名称").fill("菊粉");
await desktop.locator(".catalog-row").filter({ hasText: "菊粉" }).click();
await desktop.getByRole("heading", { name: "菊粉", exact: true }).waitFor();
await desktop.locator(".dialog-close").click();
await desktop.locator(".catalog-header .icon-button").click();

await desktop.goto(`${baseUrl}/en/`, { waitUntil: "networkidle" });
await desktop.getByRole("heading", { name: "The right ingredient for every application", exact: true }).waitFor();

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
mobile.on("console", (message) => {
  if (message.type() === "error") errors.push(message.text());
});
mobile.on("pageerror", (error) => errors.push(error.message));
await mobile.goto(`${baseUrl}/zh/`, { waitUntil: "networkidle" });
await mobile.waitForTimeout(1600);
await mobile.screenshot({ path: "previews/preview-zh-mobile.png", fullPage: false });
await mobile.getByRole("button", { name: "打开导航" }).click();
await mobile.locator("#mainNav").getByRole("link", { name: "产品中心", exact: true }).waitFor();
await mobile.screenshot({ path: "previews/preview-zh-mobile-menu.png", fullPage: false });

const desktopMetrics = await desktop.evaluate(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  clientWidth: document.documentElement.clientWidth,
}));
const mobileMetrics = await mobile.evaluate(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  clientWidth: document.documentElement.clientWidth,
}));

await browser.close();

if (desktopMetrics.scrollWidth > desktopMetrics.clientWidth || mobileMetrics.scrollWidth > mobileMetrics.clientWidth) {
  throw new Error(`Horizontal overflow detected: ${JSON.stringify({ desktopMetrics, mobileMetrics })}`);
}
if (errors.length) throw new Error(`Browser errors: ${errors.join(" | ")}`);

console.log(JSON.stringify({
  desktop: "previews/preview-zh-desktop.png",
  mobile: "previews/preview-zh-mobile.png",
  interactions: ["catalog", "search", "product dialog", "English page", "mobile menu"],
  desktopMetrics,
  mobileMetrics,
}));

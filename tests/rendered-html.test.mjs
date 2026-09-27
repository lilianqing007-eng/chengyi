import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function page(path) {
  return readFile(new URL(`../out/${path}/index.html`, import.meta.url), "utf8");
}

test("Chinese page includes the approved hero and company identity", async () => {
  const html = await page("zh");
  assert.match(html, /让每一种原料，找到合适的应用/);
  assert.match(html, /上海橙益食品贸易有限公司/);
  assert.match(html, /沪ICP备2026048541号-1/);
  assert.match(html, /18354099878/);
});

test("English page includes localized core content", async () => {
  const html = await page("en");
  assert.match(html, /The right ingredient for every application/);
  assert.match(html, /Shanghai Chengyi Food Trading Co\., Ltd\./);
  assert.match(html, /Product Catalog/);
});

test("static export exposes discovery files", async () => {
  const robots = await readFile(new URL("../out/robots.txt", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8");
  assert.match(robots, /Sitemap: https:\/\/www\.shcyfoods\.com\/sitemap\.xml/);
  assert.match(sitemap, /https:\/\/www\.shcyfoods\.com\/zh\//);
  assert.match(sitemap, /https:\/\/www\.shcyfoods\.com\/en\//);
});

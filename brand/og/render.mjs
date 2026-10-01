// Renders brand/og/og-image.html to images/og-image-v2.png.
// Run from the repo root: node brand/og/render.mjs
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';
import puppeteer from 'puppeteer';

const root = resolve('.');
const types = { '.html': 'text/html', '.css': 'text/css', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };
const server = createServer(async (req, res) => {
  try {
    const body = await readFile(join(root, decodeURIComponent(req.url.split('?')[0])));
    res.writeHead(200, { 'Content-Type': types[extname(req.url)] || 'application/octet-stream' });
    res.end(body);
  } catch { res.writeHead(404); res.end(); }
}).listen(0);

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH,
  args: process.env.CHROME_NO_SANDBOX ? ['--no-sandbox'] : [],
});
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.goto(`http://localhost:${server.address().port}/brand/og/og-image.html`, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'images/og-image-v2.png', type: 'png' });
await browser.close();
server.close();

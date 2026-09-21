import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUTPUT_DIR = path.resolve(__dirname, '../pdf_exports');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const PAGES_TO_CAPTURE = [
  {
    name: '01_kaensan_home.pdf',
    title: 'Home (Landing Screen)',
    url: 'http://localhost:5173/?page=home',
    landscape: true,
  },
  {
    name: '02_kaensan_works.pdf',
    title: 'Works (Catalogue Overview)',
    url: 'http://localhost:5173/?page=works',
    landscape: false,
  },
  {
    name: '03_kaensan_about.pdf',
    title: 'About (Biography & Timeline)',
    url: 'http://localhost:5173/?page=about',
    landscape: false,
  },
  {
    name: '04_kaensan_contact.pdf',
    title: 'Contact (Studio & Enquiry)',
    url: 'http://localhost:5173/?page=contact',
    landscape: false,
  },
  {
    name: '05_kaensan_work_falling_rain.pdf',
    title: 'Work Detail: Falling Rain (2011)',
    url: 'http://localhost:5173/?page=detail&work=falling-rain-2011',
    landscape: false,
  },
];

async function run() {
  console.log('Launching Chrome from:', CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
    ],
  });

  for (const item of PAGES_TO_CAPTURE) {
    console.log(`\nCapturing [${item.title}] -> ${item.name}...`);
    const page = await browser.newPage();
    await page.setViewport({
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
    });

    await page.goto(item.url, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.emulateMediaType('screen');

    // Wait extra 1.5s for any async fonts, images, and live tickers to stabilize
    await new Promise((r) => setTimeout(r, 1500));

    // Hide screen-toolbar and modal container
    await page.evaluate(() => {
      const tb = document.getElementById('screen-toolbar');
      if (tb) tb.style.display = 'none';
      const mc = document.getElementById('modal-container');
      if (mc) mc.style.display = 'none';
    });

    const outputPath = path.join(OUTPUT_DIR, item.name);
    await page.pdf({
      path: outputPath,
      format: 'A4',
      landscape: item.landscape,
      printBackground: true,
      margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
    });

    const stats = fs.statSync(outputPath);
    console.log(`Saved: ${outputPath} (${(stats.size / 1024).toFixed(1)} KB)`);
    await page.close();
  }

  await browser.close();
  console.log('\nAll PDFs generated successfully in:', OUTPUT_DIR);
}

run().catch((err) => {
  console.error('Error during PDF generation:', err);
  process.exit(1);
});

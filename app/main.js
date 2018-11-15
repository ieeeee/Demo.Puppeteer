
const puppeteer = require('puppeteer');
const fs = require('fs');
const chokidar = require('chokidar');
//const fileName = '/Users/charles/Library/Mobile Documents/iCloud~is~workflow~my~workflows/Documents/token.txt';
const fileName = '/Users/charles/Nutstore Files/我的坚果云/tss.txt';

chokidar.watch(fileName).on('change', function () {
    fs.readFile(fileName, 'utf8', function (err, data) {
        /*(async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto('https://example.com');
            await page.screenshot({ path: 'example.png' });
            await browser.close();
        })();*/
        console.log(data);
    });
});
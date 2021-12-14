'use strict';

const chromium = require('chrome-aws-lambda');
const EXECUTE_HEADLESS = process.env.EXECUTE_HEADLESS === 'true';

module.exports.sampleHandler = async (_event, _context, callback) => {
    let browser = null;
    let page = null;
    try {
        browser = await chromium.puppeteer.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath,
            headless: EXECUTE_HEADLESS,
        });
        page = await browser.newPage();
        return callback(null, JSON.stringify({ result: 'OK' }));
    } catch (err) {
        console.error(err);
        return callback(null, JSON.stringify({ result: 'NG' }));
    } finally {
        if (page) {
            await page.close();
        }
        if (browser) {
            await browser.disconnect();
            await browser.close();
        }
    }
};

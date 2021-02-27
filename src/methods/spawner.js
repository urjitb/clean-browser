const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome')


var opts = new chrome.Options();
opts.excludeSwitches('enable-automation')
opts.addArguments(['user-agent="YOUR_USER_AGENT"']);


async function startBrowser() {
    let driver = await new Builder().withCapabilities(opts).forBrowser('chrome').build();
    try {
        await driver.get('http://www.google.com/ncr');

    } catch {

    }
}

module.exports = { startBrowser }
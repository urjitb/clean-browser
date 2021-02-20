const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome')
const uAgent = require('./L1/ua-gen')
    var opts = new chrome.Options();
opts.addArguments(['user-agent="YOUR_USER_AGENT"']);
async function startBrowser(location) {
    let driver = await new Builder().withCapabilities(opts).forBrowser('chrome').build();
    try {
        await driver.get('http://www.google.com/ncr');

    } catch {

    }
}

module.exports = {startBrowser}
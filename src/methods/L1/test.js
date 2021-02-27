const puppeteer = require ("puppeteer");

async function start()  {
  options = {
        
    }
const browser = await puppeteer.launch({ headless: false, ignoreDefaultArgs: ["--enable-automation","--enable-blink-features=IdleDetection",], defaultViewport: null,args:["--disable-infobars"]});


};
start()
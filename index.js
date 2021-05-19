const puppeteer = require('puppeteer');

const url = 'file:///Users/sam.gajjar/SG/Projects/headless-chrome/simulation/login.html';
// const url = 'https://online-qa.arivanow.ca/b2b_merchants/b2b/init.do';
const username = 'C#USER';
const password = 'password';

const log = (() => {
    let logId = 0;
    return (...args) => console.log(logId++, ...args);
})();
let browser;

(async () => {
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
    });

    const [page] = await browser.pages();
    await page.goto(url);
    log(page.url()); // 0 init.do

    const loginBtn = '[name="login"]';
    await page.type('#userid', username);
    await page.type('#password', password);

    //await page.click('[name="login"]');
    await page.click(loginBtn);
    console.log("Logged in with user " + username);
    log(page.url()); // 1 logged in

    // Select Shop
    const shopId = '[title="ISA_2120_EN: Press Enter to choose the shop"]';
    await page.click(shopId);
    console.log("Shop ID " + shopId + " selected...");
    log(page.url()); // 2 shop Id selected - Dashboard

    // Click Show Basket
    await Promise.all([
        page.waitForNavigation(),
        // page.evaluate(() => replaceLocation()), // doesn't push history
        page.evaluate(() => create_order('','orderDealer',1)) // Show Basket
      ]);
      log(page.url()); // 5 example.com

})()
.catch(err => console.error(err))
.finally(console.log("Flow Completed... Please logout manually..."))
// .finally(async () => await browser.close())
;

import fs from "fs";

import puppeteer from "puppeteer";

const iPhone = puppeteer.devices["Galaxy Tab S4"];

// async function vote() {

// const browser = await puppeteer.launch();

// const page = await browser.newPage();

// await page.goto("https://www.google.com");

// await new Promise(resolve => setTimeout(resolve,1000));

// await page.screenshot({ path: `${Date.now()}.jpeg`, quality:40 });

// const page2 = await browser.newPage();

// await page2.goto("https://www.mail.tm/en/");

// await new Promise(resolve => setTimeout(resolve,2000));

// const textContent = await page2.evaluate(() => {

// return document.querySelector("#address")._value;

// });

// await new Promise(resolve => setTimeout(resolve,1000));

// console.log(textContent);

// // await page2.click("#address");

// await page2.screenshot({ path: `${Date.now()}.jpeg`, quality:40 });

// await page.type("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input", "elon musk");

// await new Promise(resolve => setTimeout(resolve,1000));

// await page.screenshot({ path: `${Date.now()}.jpeg`, quality:40 });

// await browser.close();

// }

// vote();

// let interval = setInterval (function() {

// vote();

// console.log("called vote");

// }, 4000);

async function votealt() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto("https://www.altbalaji.com");

  // page.waitForNetworkIdle();

  console.log(Date.now());

  // await page.emulate(iPhone);

  await new Promise((resolve) => setTimeout(resolve, 5000));

  console.log(Date.now());

  const page2 = await browser.newPage();

  await page2.goto("https://www.mail.tm/en/");

  await new Promise((resolve) => setTimeout(resolve, 2000));
let email = "abc@xyz.com";
  try {
      email = await page2.evaluate(() => {
        return document.querySelector("#address")._value;
      });
  } catch (error) {
      console.log("address not found");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log(email);

  try {
      await page.click(
        "body > app-root > main > app-dashboard > div.age-consent-modal.modal-layout-custom.modal.ng-star-inserted > div > div > div > div > div:nth-child(3) > div:nth-child(2) > button"
      );
  } catch (error) {
      console.log("email not able to input.")
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));
try {
    await page.click(
      "#navbarSupportedContent > ul.navbar-nav.navbar-right > li.subscribe-section.cursor-pointer.d-none.d-md-block.ng-star-inserted > a > span"
    );    
} catch (error) {
    console.log("unable to click submit")
}

await new Promise((resolve) => setTimeout(resolve, 2000));

try {
    await page.click(
        "body > app-root > main > app-subscription > div > div.subscription-pack-section > table > tr.promocode-offers-section > td > div > div > div > h4 > span"
        );
        
    } catch (error) {
        console.log("unable to click submit")
    }
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    try {
        await page.type(
            "body > app-root > main > app-user-detail > div > div.row.pt-3 > div > app-login > div > div > section > div > form > div.form-group.country-form-group > input",
            email
            );
            
        } catch (error) {
        console.log("unable to type email")
}

  await new Promise((resolve) => setTimeout(resolve, 2500));

  try {
      await page.click(
        "body > app-root > main > app-user-detail > div > div.row.pt-3 > div > app-login > div > div > section > div > form > div.form-group.ng-star-inserted > button"
      );
  } catch (error) {
      console.log("unable to click ");
  }


  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    await page.type("#password", "R0yalC0d3r");  
  } catch (error) {
      console.log("password input failed");
  }

  await new Promise((resolve) => setTimeout(resolve, 3500));

  let submitdiv = 0;

  try {
    await page.click(
      "body > app-root > main > app-user-detail > div > div.row.pt-3 > div > app-login > div > div > section > div > form > div:nth-child(3) > button"
    );

    await new Promise((resolve) => setTimeout(resolve, 3500));

    await page.click(
      "body > app-root > main > app-user-detail > div > div.row.pt-3 > div > app-login > div > div > section > div > form > div:nth-child(3) > button"
    );

    await new Promise((resolve) => setTimeout(resolve, 3500));

    submitdiv = 1;
  } catch (error) {
    submitdiv = 0;

    console.log("not div selector");
  }

  if (submitdiv === 0) {
    try {
      await page.click("#signupSubmitProcess");

      await new Promise((resolve) => setTimeout(resolve, 3500));

      await page.click("#signupSubmitProcess");

      await new Promise((resolve) => setTimeout(resolve, 3500));

      console.log("submit id called");
    } catch (error) {
      console.log("submit id also not exists");
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 5500));

  try {
    await page2.click(
      "#__layout > div > div.flex.flex-1.flex-col.w-0.overflow-hidden > main > div > div.mt-6.dark\\:bg-gray-800.bg-white.shadow.overflow-hidden.sm\\:rounded-md > ul > li > a > div"
    );
  } catch (error) {
    console.log("email not received");
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  // await page2.screenshot({ path: `${Date.now()}.jpeg`, quality:40 });

  await new Promise((resolve) => setTimeout(resolve, 3500));

  const emailtext = await page2.content();

  const startUrlIndex = emailtext.indexOf("/activate");

  // console.log(emailtext);

  let activateUrl = emailtext.slice(startUrlIndex - 21, startUrlIndex + 50);

  activateUrl = activateUrl.slice(0, activateUrl.indexOf("&"));

  console.log(activateUrl, activateUrl.length);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const context = await browser.createIncognitoBrowserContext();

  const page3 = await context.newPage();

  if (activateUrl.length > 50) {
    await page3.goto(activateUrl);

    console.log("reach url");

    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  await page3.screenshot({ path: `./images/${Date.now()}.jpeg`, quality: 20 });

  await new Promise((resolve) => setTimeout(resolve, 2000));

  await page3.close();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  // await page2.click("#body-style > table > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(6) > td > table > tbody > tr > td.table-90 > table > tbody > tr:nth-child(8) > td > a");

  // await new Promise(resolve => setTimeout(resolve,1500));

  // await page2.screenshot({ path: `./images/${Date.now()}.jpeg`, quality:20 });

  await new Promise((resolve) => setTimeout(resolve, 1500));

  try {
    await page.click(
      "body > app-root > main > app-dashboard > div:nth-child(2) > div > div > div:nth-child(1) > a > div"
    );
  } catch (error) {
    console.log("vote btn not loaded");
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  try {
    await page.click(
      "body > app-root > ng-component > app-poll-list > div > app-livestream-modal > div > div > div > div.modal-body.modalugc-body > div > div > div > div > div > ul > li:nth-child(2)"
    );
  } catch (error) {
    console.log("vote not loaded");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    await page.click(
      "body > app-root > ng-component > app-poll-list > div > app-livestream-modal > div > div > div > div.modal-body.modalugc-body > div > div > div > div > div > app-save-contestant > div > div:nth-child(3) > div > div:nth-child(4) > div > div > img"
    );
  } catch (error) {
    console.log("vote img not loaded");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  await page.screenshot({ path: `./images/${Date.now()}.jpeg`, quality: 20 });

  try {
    await page.click("#agree");
  } catch (error) {
    console.log("agree not loaded");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  // await page.click("");

  try {
    await page.click(
      "body > app-root > ng-component > app-poll-list > div > app-livestream-modal > div > div > div > div.modal-body.modalugc-body > div > div > div > div > div > app-save-contestant > div > div.btn-save > button"
    );
  } catch (error) {
    console.log("vote btn not loaded");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  await page.screenshot({ path: `./images/${Date.now()}.jpeg`, quality: 20 });

  // const html = await page.content();

  // console.log(html.slice(0,150));

  fs.appendFile("votedata.txt", `${email}\n`, function (err) {
    if (err) throw err;

    console.log("Saved!");
  });

  fs.appendFile("votedata.txt", `${activateUrl}\n`, function (err) {
    if (err) throw err;

    console.log("Saved!");
  });

  await browser.close();
}

votealt();

let interval = setInterval(function () {
  try {
    votealt();
  } catch (error) {
    console.log("failed vote");
  }

  console.log("called vote");
}, 50000);

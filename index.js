const fs = require('fs');

const { Builder } = require('selenium-webdriver');
const safari = require('selenium-webdriver/safari');

async function main() {
  let options = new safari.Options();
  let driver = await new Builder()
    .forBrowser('safari')
    .setSafariOptions(options)
    .build();

  await driver.get('https://www.google.com');

  let encodedString = await driver.takeScreenshot();
  await fs.writeFileSync('./image.png', encodedString, 'base64');

  await driver.quit();
}
main();

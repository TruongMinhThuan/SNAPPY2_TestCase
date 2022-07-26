import {
    CustomInstanceCommands,
    Request,
    remote,
    RemoteOptions,
    BrowserCommandsType,
} from 'webdriverio'
import LoginTestCase from './testcase/functions/login';
const IOS: RemoteOptions = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        platformName: 'iOS',
        platformVersion: '15.5',
        deviceName: 'iPhone 12 Pro Max',
        app: 'com.flydino.nftsnapppy2',
        appActivity: '.view.TextFields',
        automationName: 'XCUITest',
    },
}

async function main() {

    const client: BrowserCommandsType = await remote(IOS)
    const field = await client.$("~welcome/showLoginScreenPress");
    await field.click()
    const loginTest = new LoginTestCase(client)
    // await loginTest.testInvalidPassword()
    // await login.testInvalidPhonenumber()
    // await field.setValue("Hello World!");
    // const value = await field.getText();
    // assert.strictEqual(value, "Hello World!");
    // await field.click()
    // await client.deleteSession();
}

// main();

export { main, IOS }
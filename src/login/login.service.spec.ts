import { Test, TestingModule } from '@nestjs/testing';
import { IOS } from '../../test/main';
import { BrowserCommandsType, remote } from 'webdriverio';
import LoginTestCase from '../../test/testcase/functions/login';

describe('LoginService', () => {
  // let service: LoginService;
  let client: BrowserCommandsType;
  jest.setTimeout(100000)

  beforeEach(async () => {
    client = await remote(IOS)
  });

  it('should be login successfully', async () => {
    const field = await client.$("~welcome/showLoginScreenPress");
    await field.click()
    const loginTest = new LoginTestCase(client)
    loginTest.phonenumber = '099887766'
    loginTest.password = '1234567'
    await loginTest.success()
    await loginTest.logout()
  });

  it('should be login failed', async () => {
    const field = await client.$("~welcome/showLoginScreenPress");
    await field.click()
    const loginTest = new LoginTestCase(client)
    await loginTest.testInvalidPassword()
    await loginTest.logout()
  });

});

import { Injectable } from '@nestjs/common';
import LoginFlow from '../../test/feature/login';
import { BrowserCommandsType } from 'webdriverio';

@Injectable()
export class LoginService {
    private loginFlow: LoginFlow
    phonenumber: string
    password: string
    constructor(client: BrowserCommandsType) {
        this.loginFlow = new LoginFlow(client)
        this.phonenumber = '0987987987'
        this.password = '1234567'
    }

    async login() {
        await this.loginFlow.handleLoginPass(this.phonenumber, this.password)

    }

    async testInvalidPhonenumber() {
        this.phonenumber = '0123'
        await this.login()
    }

    async testInvalidPassword() {
        this.phonenumber = '0123456789'
        this.password = '0123'
        await this.login()
    }

    async testPass() {
        await this.login()
    }
}

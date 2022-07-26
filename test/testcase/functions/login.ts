import LoginFlow from "../../feature/login"
import { BrowserCommandsType, RemoteOptions } from "webdriverio"
export default class LoginTestCase {

    private loginFlow: LoginFlow
    phonenumber: string
    password: string
    constructor(client: BrowserCommandsType) {
        this.loginFlow = new LoginFlow(client)
        this.phonenumber = '0987987987'
        this.password = '1234567'
    }

    async login() {
        const res = await this.loginFlow.handleLoginPass(this.phonenumber, this.password)
        return res
    }

    async fail() {
        const res = await this.loginFlow.handleLoginfail(this.phonenumber, this.password)
        return res
    }

    async testInvalidPhonenumber() {
        await this.login()
    }

    async testInvalidPassword() {
        this.phonenumber = '0123456789'
        this.password = '0123'
        await this.login()

    }

    async success() {
        await this.login()
    }

    async logout() {
        await this.loginFlow.handleLogout()
    }
}
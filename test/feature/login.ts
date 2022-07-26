import { BrowserCommandsType, ElementCommandsType, } from 'webdriverio'

export default class LoginFlow {

    private client: BrowserCommandsType
    private phoneField: ElementCommandsType
    private passwordField: ElementCommandsType
    private viewContainer: ElementCommandsType
    private loginButton: ElementCommandsType
    private homeField: ElementCommandsType
    private profileTab: ElementCommandsType
    private logoutButton: ElementCommandsType
    constructor(client: BrowserCommandsType) {
        this.client = client
    }

    private async setData(phone: string, password: string) {
        this.phoneField = await this.client.$('~login/phonenumberInput')
        this.passwordField = await this.client.$('~login/passwordInput')

        await this.phoneField.setValue(phone)
        await this.passwordField.setValue(password)
    }

    private async hideKeyboard() {
        this.viewContainer = await this.client.$('~login/container')
        await this.viewContainer.click()
    }

    private async pressLogin() {
        this.loginButton = await this.client.$('~login/loginPress')
        await this.loginButton.click()
    }

    private async pressLogout() {
        this.logoutButton = await this.client.$('~profile/logoutButton')
        await this.logoutButton.click()
    }

    private async showProfileTab() {
        this.profileTab = await this.client.$('~tabbar/profile')
        await this.profileTab.click()
    }

    async handleLoginPass(phone: string, password: string) {

        await this.setData(phone, password)
        await this.hideKeyboard()
        await this.pressLogin()
        this.homeField = await this.client.$('~tabbar/home')
        const display = await this.homeField.waitForDisplayed()
        return display

    }

    async handleLoginfail(phone: string, password: string) {

        await this.setData(phone, password)
        await this.hideKeyboard()
        await this.pressLogin()
        this.viewContainer = await this.client.$('~login/container')
        const display = await this.viewContainer.waitForDisplayed()
        return display

    }

    async handleLogout() {
        await this.showProfileTab()
        await this.pressLogout()
    }
}
import { test_id } from "../../utils/select.js";
import{APP_TEST_ID} from "../../constants/test-ids/purchase.js"
import {config} from "dotenv"

config();

class LoginPage {
    get inputUsername() { return $(test_id(APP_TEST_ID.LOGIN)); }
    get inputPassword() { return $(test_id(APP_TEST_ID.PASSWORD)); }
    get buttonLogin() { return $(test_id(APP_TEST_ID.SUBMIT_BUTTON)); }

    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    async login() {
        await this.inputUsername.setValue(process.env.USERNAME || "deafult_username");
        await this.inputPassword.setValue(process.env.USERNAME || "deafult_password");
        await this.buttonLogin.click();
    }
}
export default new LoginPage();
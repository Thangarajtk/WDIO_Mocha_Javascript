import LoginPage from '../pageobjects/orangeHrmDemo/login.page.js';
import Topbar from '../pageobjects/orangeHrmDemo/topbar.page.js';
import { waitAndSetValue } from '../../utils/helper.js';
import { username, password } from '../../resources/config.js';

describe('OrangeHRM Login Test', () => {

    it('should open the application and display the login form', async () => {
        await LoginPage.open();
        
        await expect(LoginPage.loginForm).toBeExisting();
    });

    it('should allow access with correct credential', async () => {
        await waitAndSetValue(LoginPage.username, username, 1000);
        await waitAndSetValue(LoginPage.password, password, 500);
        await LoginPage.loginBtn.click();

        await expect(Topbar.usernameDropdownMenu).toBeExisting();
    });
});
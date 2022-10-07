import LoginPage from '../pageobjects/orangeHrmDemo/login.page';
import Topbar from '../pageobjects/orangeHrmDemo/topbar.page';
import { waitAndSetValue } from '../../utils/helper';
import { username, password } from '../../resources/config';

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
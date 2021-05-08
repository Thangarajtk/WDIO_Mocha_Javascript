import LoginPage from '../pageobjects/orangeHrmDemo/login.page';
import DashboardPage from '../pageobjects/orangeHrmDemo/dashboard.page';
import { waitAndSetValue } from '../../utils/helper';
import { username, password } from '../../resources/config';

describe('OrangeHRM Login Test', () => {

    it('should open the application and display the login form', () => {
        LoginPage.open();
        
        expect(LoginPage.loginForm).to.exist;
    });

    it('should allow access with correct credential', () => {
        waitAndSetValue(LoginPage.username, username, 1000);
        waitAndSetValue(LoginPage.password, password, 500);
        LoginPage.loginBtn.click();

        expect(DashboardPage.welcomeUser).to.exist;
    });
});
import LoginPage from '../pageobjects/orangeHrmDemo/login.page';
import DashboardPage from '../pageobjects/orangeHrmDemo/dashboard.page';

describe('OrangeHRM Login Test', () => {

    it('should open the application and display the login form', () => {
        LoginPage.open();
        expect(LoginPage.loginForm).to.exist;
    });

    it('should allow access with correct credential', () => {
        LoginPage.username.setValue('Admin');
        LoginPage.password.setValue('admin123');
        LoginPage.loginBtn.click();

        expect(DashboardPage.welcomeUser).to.exist;
    });
});
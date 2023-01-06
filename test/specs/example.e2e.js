import LoginPage from '../pageobjects/herokuApp/login.page.js';
import SecurePage from '../pageobjects/herokuApp/secure.page.js';

describe('Login:', () => {
    before('Open application', async () => {
        await LoginPage.open();
    });

    it('should login with valid credentials', async () => {

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');

        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});



const LoginPage = require('../pageobjects/herokuApp/login.page');
const SecurePage = require('../pageobjects/herokuApp/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();
        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        
        expect(SecurePage.flashAlert).to.exist;
        expect(SecurePage.loginSuccessMessage()).to.be.a('string').and.include('You logged into a secure area!');
    });
});




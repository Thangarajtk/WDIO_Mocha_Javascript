const elementUtil = require('../utils/elementUtils')

class LoginAndRegisterPage {
    //page locators
    get loginAndRegisterPopUp() { return $("div[class*='LoginAndRegisterPopUp']") }
    get emailTextField() { return $("input[name='email']") }
    get passwordTextField() { return $("input[name='password']") }
    get submitBtn() { return $("button[type='submit']") }
    get newsLetterSubscribeCheckbox() { return $("input[name='isNewsletterSubscribed']") }
    get termsCheckbox() { return $("input[name='isTermsAccepted']") }

    //Methods
     /**
     * Method to check if the login and register overlay pop up is displayed
     */
    isLoginAndRegisterPopUpDisplayed() {
        return elementUtil.isElementDisplayed(this.loginAndRegisterPopUp);
    }

    /**
     * Method to login with correct credentials
     * @param {*} emailId 
     * @param {*} password 
     */
    doLogin(emailId, password) {
        elementUtil.doSetValue(this.emailTextField, emailId);
        elementUtil.doSetValue(this.passwordTextField, password);
        elementUtil.doClick(this.newsLetterSubscribeCheckbox);
        elementUtil.doClick(this.termsCheckbox);
        elementUtil.doClick(this.submitBtn);

        return elementUtil.waitForElementToBeDisplayed(this.loginAndRegisterPopUp, true, 3000);
    }

}
module.exports = new LoginAndRegisterPage();
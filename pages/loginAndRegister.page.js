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
    isLoginAndRegisterPopUpDisplayed() {
        return elementUtil.isElementDisplayed(this.loginAndRegisterPopUp);
    }

    enterEmailId(emailId) {
        return elementUtil.doSetValue(this.emailTextField, emailId);
    }

    enterPassword(password) {
        return elementUtil.doSetValue(this.passwordTextField, password);
    }

    clickOnNewsLetterSubscribeCheckbox() {
        return elementUtil.doClick(this.newsLetterSubscribeCheckbox);
    }

    clickOnAcceptTermsCheckbox() {
        return elementUtil.doClick(this.termsCheckbox);
    }

    clickOnSubmit() {
        return elementUtil.doClick(this.submitBtn);
    }
}
module.exports = new LoginAndRegisterPage();
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
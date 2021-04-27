import Page from '../orangeHrmDemo/page';

class LoginPage extends Page {

    get loginForm() { return $('#divLoginForm') }
    get username() { return $('#txtUsername') } 
    get password() { return $('#txtPassword') } 
    get loginBtn() { return $('#btnLogin') }

    open() {
        super.open('login');
    }
}

export default new LoginPage();
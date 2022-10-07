import Page from '../orangeHrmDemo/page';

class LoginPage extends Page {

    get loginForm() { return $('.orangehrm-login-form') }
    get username() { return $("//input[@name='username']") } 
    get password() { return $("//input[@name='password']") } 
    get loginBtn() { return $("//button[@type='submit']") }

    open() {
        return super.open('web/index.php/auth/login');
    }
}

export default new LoginPage();
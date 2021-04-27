import Page from '../orangeHrmDemo/page';

class LoginPage extends Page {

    get welcomeUser() { return $('#welcome') } 

}

export default new LoginPage();
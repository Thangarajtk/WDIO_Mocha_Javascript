import Page from './page';

class TopBar extends Page {

    get usernameDropdownMenu() { return $('.oxd-userdropdown-name') } 

}

export default new TopBar();
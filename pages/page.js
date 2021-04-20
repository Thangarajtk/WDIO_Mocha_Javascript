// Page.js
class Page {

    constructor() {
        this.title = 'My Page'
    }

    open(path) {
        if (path) {
            browser.url(path);
        }
        else {
            browser.url(browser.options.baseUrl);
        } 
        browser.maximizeWindow();
    }
}
module.exports = new Page();
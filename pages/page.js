// Page.js
class Page {

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
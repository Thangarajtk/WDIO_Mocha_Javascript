class ElementUtils {

    goBack() {
        try {
            browser.back();
            return true;
        }
        catch (ex) {
            return false;
        }
    }

    doRefresh() {
        try {
            browser.refresh();
            return true;
        }
        catch (ex) {
            return false;
        }
    }

    doKeyStrokes(key) {
        try {
            browser.keys(key);
            return true;
        }
        catch (ex) {
            return false;
        }
    }


    doClick(element) {
        try {
            element.waitForDisplayed();
            element.click();
            return true;
        }
        catch (ex) {
            return false;
        }
    }

    doSetValue(element, value) {
        try {
            element.waitForDisplayed();
            element.setValue(value);
            return true;
        }
        catch (ex) {
            return false;
        }
    }

    doGetText(element) {
        let getElementText;
        try {
            element.waitForDisplayed();
            getElementText = element.getText();
            return getElementText;
        }
        catch (ex) {
            return getElementText;
        }
    }

    isElementDisplayed(element) {
        try {
            element.waitForDisplayed();
            return element.isDisplayed(); // Return true if the selected DOM-element is displayed.
        }
        catch (ex) {
            return false;
        }
    }

    doGetPageTitle(pageTitle) {
        browser.waitUntil(function () {
            return (browser.getTitle() === pageTitle)
        }, 10000, 'Title is not displayed after the given time')
        return browser.getTitle()
    }
}
module.exports = new ElementUtils();

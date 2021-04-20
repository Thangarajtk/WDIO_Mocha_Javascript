class ElementUtils {

    /**
     * Method to navigate back to the previous page
     */
    goBack() {
        try {
            browser.back();
            return true;
        }
        catch (ex) {
            return false;
        }
    }

    /**
     * Method to refresh the current page
     */
    doRefresh() {
        try {
            browser.refresh();
            return true;
        }
        catch (ex) {
            return false;
        }
    }

    /**
     * Method to perform key strokes for the given key
     * @param {*} key - Provide Key such as 'Enter', 'Escape'
     */
    doKeyStrokes(key) {
        try {
            browser.keys(key);
            return true;
        }
        catch (ex) {
            return false;
        }
    }

    /**
     * Method to perform click operation in the given element
     * @param {*} element 
     */
    doClick(element) {
        element.waitForDisplayed(); // Wait for an element for the provided amount of milliseconds to be displayed or not displayed (default: 500ms)
        element.click();
    }

    /**
     * Method to set value in the given element
     * @param {*} element 
     * @param {*} value 
     */
    doSetValue(element, value) {
        element.waitForDisplayed();
        element.setValue(value);
    }

    /**
     * Method to Wait for an element for the provided amount of milliseconds to be displayed or not displayed.
     * @param {*} element 
     * @param {*} doReverse 
     */
    waitForElementToBeDisplayed(element, doReverse = false, timeOutInMs) {
        return element.waitForDisplayed({ timeout: timeOutInMs, reverse: doReverse });
    }

    /**
     * Method to get the text content from a DOM-element
     * @param {*} element 
     */
    doGetText(element) {
        let getElementText;
        try {
            element.waitForDisplayed(2000);
            getElementText = element.getText();
            return getElementText;
        }
        catch (ex) {
            return getElementText;
        }
    }

    /**
     * Method to return true if the selected DOM-element is displayed
     * @param {*} element 
     */
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

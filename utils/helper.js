export const waitForTextChange = (element, text, timeout) => {
    browser.waitUntil(
        function () {
            return element.getText() === text;
        },
        { timeout }
    );
}

export const waitAndClick = (element, timeout) => {
    element.waitForDisplayed({ timeout });
    element.click();
}
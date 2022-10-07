export const waitForTextChange = (element, text, timeout) => {
    browser.waitUntil(
        function () {
            return element.getText() === text;
        },
        { timeout }
    );
}

export const waitAndClick = async (element, timeout) => {
    await element.waitForDisplayed({ timeout });
    await element.click();
}

export const waitAndSetValue = async (element, value, timeout) => {
    await element.waitForDisplayed({ timeout });
    await element.setValue(value);
}
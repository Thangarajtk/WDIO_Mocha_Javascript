class DynamicSelector {

    /**
     * Method to generate dynamic selector for the test
     * @param {*} selectorStr - Get the selector as string
     * @param {*} valueToBeReplaced - Provide the string to be replaced in the selector
     * @param {*} replaceValue - Provide the replacement value
     */
    getDynamicSelector(selectorStr, valueToBeReplaced, replaceValue) {
        return selectorStr.replace(valueToBeReplaced, replaceValue);
    }
}
export default new DynamicSelector();
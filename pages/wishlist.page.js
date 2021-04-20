const elementUtil = require('../utils/elementUtils');
const dynamicSelectorUtil = require('../utils/dynamicSelectorUtils');
class AppHomePage {

    // Locators
    get wishlistPageElement() { return $("div[class='wishlistPage']") }
    
    get wishlistProductTitle() { return $("//div[contains(@class,'wishlistContainer_detail')]/descendant::p[@class='blockListProduct__name']") }

    get removeWatchlistedProductElement() { return "//p[text()='%s']/preceding::button[@class='blockListProduct__delete qaBlockListProduct__delete']" }

    // Methods
    isWishlistPageDisplayed() {
        return elementUtil.isElementDisplayed(this.wishlistPageElement);
    }

    verifyProductAddedToWatchlistIsDisplayed() {
        return elementUtil.doGetText(this.wishlistProductTitle);
    }

    removeGivenProductFromWatchlist(productTitle) {
        
        elementUtil.doClick($(dynamicSelectorUtil.getDynamicSelector(this.removeWatchlistedProductElement, "%s", productTitle)));

        return elementUtil.waitForElementToBeDisplayed($(this.removeWatchlistedProductElement), true, 3000);
    }

}
module.exports = new AppHomePage();
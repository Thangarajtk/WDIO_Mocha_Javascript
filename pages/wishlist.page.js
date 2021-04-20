const elementUtil = require('../utils/elementUtils');

class AppHomePage {

    // Locators
    get wishlistPageElement() { return $("div[class='wishlistPage']") }
    get wishlistProductTitle() { return $("//div[contains(@class,'wishlistContainer_detail')]/descendant::p[@class='blockListProduct__name']") }

    // Methods
    isWishlistPageDisplayed() {
        return elementUtil.isElementDisplayed(this.wishlistPageElement);
    }

    verifyProductAddedToWatchlistIsDisplayed() {
        return elementUtil.doGetText(this.wishlistProductTitle);
    }

    removeGivenProductFromWatchlist(productTitle) {
        let removeWatchlistedProduct = "//p[text()='XXX']/preceding::button[@class='blockListProduct__delete qaBlockListProduct__delete']";
        let removeWatchlistedProductElement = removeWatchlistedProduct.replace("XXX", productTitle);
        return elementUtil.doClick($(removeWatchlistedProductElement));
    }

}
module.exports = new AppHomePage();
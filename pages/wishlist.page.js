const elementUtil = require('../utils/elementUtils');
const dynamicSelectorUtil = require('../utils/dynamicSelectorUtils');
class WishlistPage {

    // Locators
    get wishlistPageElement() { return $("div[class='wishlistPage']") }
    
    get wishlistProductTitle() { return $("//div[contains(@class,'wishlistContainer_detail')]/descendant::p[@class='blockListProduct__name']") }

    get removeWatchlistedProductElement() { return "//p[text()='%s']/preceding::button[@class='blockListProduct__delete qaBlockListProduct__delete']" }

    // Methods
     /**
     * Method to check if the Wishlist page is displayed
     */
    isWishlistPageDisplayed() {
        return elementUtil.isElementDisplayed(this.wishlistPageElement);
    }

    /**
     * Method to verify the product added to watchlist is displayed on the Watchlist page
     */
    verifyProductAddedToWatchlistIsDisplayed() {
        return elementUtil.doGetText(this.wishlistProductTitle);
    }

    /**
     * Method to remove the given product from the Watchlist page
     * @param {*} productTitle 
     */
    removeGivenProductFromWatchlist(productTitle) {
        
        elementUtil.doClick($(dynamicSelectorUtil.getDynamicSelector(this.removeWatchlistedProductElement, "%s", productTitle)));

        return elementUtil.waitForElementToBeDisplayed($(this.removeWatchlistedProductElement), true, 3000);
    }

}
module.exports = new WishlistPage();
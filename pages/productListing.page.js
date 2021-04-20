const elementUtil = require('../utils/elementUtils');

class AppHomePage {

    // Locators
    get productListingPageElement() {
        return $("main[class*='ListingPageElements']")
    }

    get productListingPageTitle() {
        return $("h1[class*='RegularTitle__StyledPageTitle']")
     }

    get productTitleToWatchlist() {
        return $("//*[local-name()='svg' and @data-is-selected='false']/ancestor::div[contains(@class,'BadgesGrid__BadgesGridLayout')]/following-sibling::div[contains(@class,'ProductInfoBox')]/div[@data-testid='product-title']")
    }
    
    // Methods
    isProductListingPageDisplayed() {
        return elementUtil.isElementDisplayed(this.productListingPageElement);
    }

    verifyProductListingPageTitle() {
        return elementUtil.doGetText(this.productListingPageTitle);
    }

    getTitleOfProductToWatchlist() {
        return elementUtil.doGetText(this.productTitleToWatchlist);
    }

    clickOnWishlistIconToAddProductToWatchlist(productTitle) {
        let wishlistIcon = "//div[text()='XXX']/parent::div/preceding-sibling::div//*[local-name()='svg' and @data-is-selected='false']";
        let watchlistElement = wishlistIcon.replace("XXX", productTitle);
        return elementUtil.doClick($(watchlistElement));
    }
}
module.exports = new AppHomePage();
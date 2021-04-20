const elementUtil = require('../utils/elementUtils');
const dynamicSelectorUtil = require('../utils/dynamicSelectorUtils');

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

    get emptyWishlistIconOnTheProduct() {
        return "//div[text()='%s']/parent::div/preceding-sibling::div//*[local-name()='svg' and @data-is-selected='false']"
    }

    get filledInWishlistIconOnTheProduct() {
        return "//div[text()='%s']/parent::div/preceding-sibling::div//*[local-name()='svg' and @data-is-selected='true']"
    }
    
    // Methods
    isProductListingPageDisplayed() {
        return elementUtil.isElementDisplayed(this.productListingPageElement);
    }

    verifyTitleOnProductListingSection() {
        return elementUtil.doGetText(this.productListingPageTitle);
    }

    getTitleOfProductToWatchlist() {
        return elementUtil.doGetText(this.productTitleToWatchlist);
    }

    clickOnWishlistIconToAddProductToWatchlist(productTitle) {
        elementUtil.doClick($(dynamicSelectorUtil.getDynamicSelector(this.emptyWishlistIconOnTheProduct, "%s", productTitle)));
        
        return elementUtil.waitForElementToBeDisplayed($(dynamicSelectorUtil.getDynamicSelector(this.filledInWishlistIconOnTheProduct, "%s", productTitle)), 5000);
    }
}
module.exports = new AppHomePage();
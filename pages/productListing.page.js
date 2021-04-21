const elementUtil = require('../utils/elementUtils');
const dynamicSelectorUtil = require('../utils/dynamicSelectorUtils');

class ProductListingPage {

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
     /**
     * Method to check if the product listing page is displayed
     */
    isProductListingPageDisplayed() {
        return elementUtil.isElementDisplayed(this.productListingPageElement);
    }

    /**
     * Method to get title displayed on the product listing section
     */
    verifyTitleOnProductListingSection() {
        return elementUtil.doGetText(this.productListingPageTitle);
    }

    /**
     * Method to get the title of the product to be added to Watchlist
     */
    getTitleOfProductToWatchlist() {
        return elementUtil.doGetText(this.productTitleToWatchlist);
    }

    /**
     * Method to click on the Watchlist icon present in the given product
     * @param {*} productTitle 
     */
    clickOnWishlistIconToAddProductToWatchlist(productTitle) {
        elementUtil.doClick($(dynamicSelectorUtil.getDynamicSelector(this.emptyWishlistIconOnTheProduct, "%s", productTitle)));
        
        return elementUtil.waitForElementToBeDisplayed($(dynamicSelectorUtil.getDynamicSelector(this.filledInWishlistIconOnTheProduct, "%s", productTitle)), 5000);
    }
}
module.exports = new ProductListingPage();
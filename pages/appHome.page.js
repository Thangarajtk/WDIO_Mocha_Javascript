const elementUtil = require('../utils/elementUtils');
const constants = require('../lib/constants');
class AppHomePage {

    // Locators
    get appHomePage() { return $(".page")}
    
    get acceptCookiesBtn() { return $("#onetrust-accept-btn-handler")  }
   
    get otSdkContainerPopUp() { return $("//div[@class='ot-sdk-container']")  }
    
    get shopToClubOverlayPopUp() { return $("//div[@data-testid='shop_to_club_registration_single_step_overlay']")  }
    
    get navItemsList() { return $("ul[class*='Navigation__StyledNavItemsList']") }

    get searchInputTextField() { return $("input[type='search']") }

    get searchIcon() { return $("svg[data-testid='header-search-icon']") }

    get wishlistIcon() { return $(".icon-wishlist") }

    // Methods
    /**
     * Method to check if the application home page is displayed
     */
    isAppHomePageDisplayed() {
        if (elementUtil.isElementDisplayed(this.otSdkContainerPopUp)) {
            console.log('--------ACCEPT COOKIES--------');
            elementUtil.doClick(this.acceptCookiesBtn);
        }
        if (elementUtil.isElementDisplayed(this.shopToClubOverlayPopUp)) {
            console.log('--------PAGE REFRESH TO DISMISS OVERLAY POP UP--------');
            elementUtil.doRefresh();
        }
        return elementUtil.isElementDisplayed(this.appHomePage);
    }

    /**
     * Method to search with the given product name
     * @param {*} searchValue - Provide the search keyword
     */
    searchForProduct(searchValue) {
        elementUtil.doSetValue(this.searchInputTextField, searchValue);
        return elementUtil.doKeyStrokes(constants.keys.ENTER);
    }

    /**
     * Method to click on Search icon
     */
    clickOnSearchIcon() {
        return elementUtil.doClick(this.searchIcon);
    }

    /**
     * Method to click on the Wishlist Icon displayed in the Home page header
     */
    clickOnWishlistIcon() {
        return elementUtil.doClick(this.wishlistIcon);
    }
}
module.exports = new AppHomePage();
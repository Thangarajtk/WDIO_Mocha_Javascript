const AppHomePage = require('../pages/appHome.page')
const page = require('../pages/page')
const productListingPage = require('../pages/productListing.page')
const loginAndRegisterPage = require('../pages/loginAndRegister.page')
const watchlistPage = require('../pages/wishlist.page')

const constants = require('../lib/constants')
const configData = require('../lib/config')

let productTitle;

describe('Add and Remove product from Wishlist Test:', function () {

    it('Should access the App Home page', function () {
        page.open();
        expect(AppHomePage.isAppHomePageDisplayed()).to.equal(true);
    })

    it('Should search for the product with keyword - \"' + constants.search.SEARCH_KEYWORD + '\"', function () {

        expect(AppHomePage.searchForProduct(constants.search.SEARCH_KEYWORD)).to.equal(true);
    })

    it('Should display product listing page for the searched product', function () {

        expect(productListingPage.isProductListingPageDisplayed()).to.equal(true);
    })

    it('Should verify the title on the product listing page matches the searched product keyword - \"' + constants.search.SEARCH_KEYWORD + '\"', function () {
        const title = productListingPage.verifyTitleOnProductListingSection();

        expect(title).to.equal(constants.search.SEARCH_KEYWORD);
    })

    it('Should get the name of the product and click on Watchlist icon in the product to add it to Watchlist', function () {
        productTitle = productListingPage.getTitleOfProductToWatchlist();

        expect(productListingPage.clickOnWishlistIconToAddProductToWatchlist(productTitle)).to.equal(true);
    })

    it('Should open the login and register overlay', function () {

        expect(loginAndRegisterPage.isLoginAndRegisterPopUpDisplayed()).to.equal(true);
    })

    it('Should allow access with correct credentials', function () {

        expect(loginAndRegisterPage.doLogin(configData.emailId, configData.password)).to.equal(true);
    })

    it('Should navigate to Wishlist page by clicking on Watchlist icon in the Header', function () {
        AppHomePage.clickOnWishlistIcon();

        expect(watchlistPage.isWishlistPageDisplayed()).to.equal(true);
    })

    it('Should verify the watchlisted product is displayed on the Watchlist page with correct product title', function () {
        
        expect(watchlistPage.verifyProductAddedToWatchlistIsDisplayed()).to.equal(productTitle);
    })

    it('Should remove the given product from Watchlist', function () {
        
        expect(watchlistPage.removeGivenProductFromWatchlist(productTitle)).to.equal(true);
    })

})

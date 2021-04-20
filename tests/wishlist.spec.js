const AppHomePage = require('../pages/appHome.page')
const page = require('../pages/page')
const productListingPage = require('../pages/productListing.page')
const loginAndRegisterPage = require('../pages/loginAndRegister.page')
const watchlistPage = require('../pages/wishlist.page')

const constants = require('../lib/constants')
const configData = require('../lib/config')

let productTitle;

describe('Add and Remove product from Wishlist Test', function () {

    it('Should access the App Home page', function () {
        page.open('/');
        expect(AppHomePage.isAppHomePageDisplayed()).to.equal(true);
    })

    it('Should search for the product with keyword - ' + constants.SEARCH_KEYWORD, function () {
        AppHomePage.enterSearchItem(constants.SEARCH_KEYWORD);
        browser.keys('Enter');
    })

    it('Should display product listing page/section for the searched product', function () {
        expect(productListingPage.isProductListingPageDisplayed()).to.equal(true);
    })

    it('Should verify the product title on the product listing page', function () {
        const title = productListingPage.verifyProductListingPageTitle();
        console.log(title);
    })

    it('Should fetch the title of the product and add the product to Watchlist', function () {
        productTitle = productListingPage.getTitleOfProductToWatchlist();
        console.log(productTitle);
        expect(productListingPage.clickOnWishlistIconToAddProductToWatchlist(productTitle)).to.equal(true);
    })

    it('Should open the login and register overlay pop up', function () {
        expect(loginAndRegisterPage.isLoginAndRegisterPopUpDisplayed()).to.equal(true);
    })

    it('Should enter the correct test account data', function () {
        expect(loginAndRegisterPage.enterEmailId(configData.emailId)).to.equal(true);
        expect(loginAndRegisterPage.enterPassword(configData.password)).to.equal(true);
    })

    it('Should check the Accept terms and subscribe Newsletter checkbox', function () {
        expect(loginAndRegisterPage.clickOnAcceptTermsCheckbox()).to.equal(true);
        expect(loginAndRegisterPage.clickOnNewsLetterSubscribeCheckbox()).to.equal(true);
    })

    it('Should click on the Submit button', function () {
        expect(loginAndRegisterPage.clickOnSubmit()).to.equal(true);
    })

    it('Should navigate to Wishlist page by clicking on Watchlist icon in the Header', function () {
        expect(AppHomePage.clickOnWishlistIcon()).to.equal(true);
        expect(watchlistPage.isWishlistPageDisplayed()).to.equal(true);
    })

    it('Should verify the product added to Wishlist is displayed on the Watchlist page', function () {
        watchlistPage.verifyProductAddedToWatchlistIsDisplayed();
    })

    it('Should remove the given product from Watchlist', function () {
        expect(watchlistPage.removeGivenProductFromWatchlist(productTitle)).to.equal(true);
    })
    
})

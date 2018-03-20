import { SearchPage } from '../pages/search.po';
import { SharedPage } from '../pages/shared.po';
import { browser } from 'protractor';

describe('Acceptance Test Search Page', () => {
  let page: SearchPage;
  let sharedPage: SharedPage;
  let numOfAdsBefore: number;

  beforeEach(() => {
    page = new SearchPage();
    sharedPage = new SharedPage();
    
    //adds an ad to the database before each test
    sharedPage.createAd(page.constructAd());
    
    sharedPage.navigateToHomePage();
    sharedPage.clickLoginButtonOnNavbar(function callback(url){
      expect(url).toContain("https://team6.auth0.com");
    });
    sharedPage.fillInLoginForm();
    sharedPage.submitLoginForm();

    browser.sleep(4000);
  });

  afterEach(() =>{
    //go back to home page so we can delete ad
    sharedPage.navigateToHomePage();

    //get id of ad we added so we can remove it after each test
    sharedPage.clickLastAdOnHomePage(function callback(url){
      expect(url).toContain("http://localhost:4200/view/ads/");
    });
    
    sharedPage.getCurrentUrl(function callback(url){ 
      sharedPage.deleteAd(sharedPage.getAdvertisementId(url));
      sharedPage.clickLogoutButtonOnNavbar();
    });
  });

  it('should contain the test ad when you search for a title that exist', () => {
    //should be displayed
    page.searchAdIsDisplayed(function(isDisplayed){
      expect(isDisplayed).toBeTruthy();
    })
    //put in search field title that will match the ad we created
    page.fillInSearchField(true);
    //the ad that was entered before should be shown since the title match the one entered in the search bar
    page.searchAdIsDisplayed(function(isDisplayed){
      expect(isDisplayed).toBeTruthy();
    })
  });

  it('shouldnt contain the test ad when you search for a title that doesnt exist', () => {
    this.numOfAdsBefore = sharedPage.getNumberOfAds();
    //should be displayed
    page.searchAdIsDisplayed(function(isDisplayed){
      expect(isDisplayed).toBeTruthy();
    })
    //put in search field title that won't match and so no ads will show up
    page.fillInSearchField(false);
    //the ad that was entered before should not be shown since the title does not match the one in the search bar
    //Therefore, there should be at least 1 less ad that is displayed
    expect(sharedPage.getNumberOfAds()).toBeLessThan(this.numOfAdsBefore);
  });

});

import { SearchPage } from '../pages/search.po';
import { SharedPage } from '../pages/shared.po';
import { browser } from 'protractor';

describe('Acceptance Test Search Page', () => {
  let page: SearchPage;
  let sharedPage: SharedPage;

  beforeEach(() => {
    page = new SearchPage();
    sharedPage = new SharedPage();
    
    //adds an ad to the database before each test
    sharedPage.createAd(sharedPage.constructAd());
    
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
    expect(page.getCreateAdButtonText()).toEqual('Create an Advertisement');
  });

  it('shouldnt contain the test ad when you search for a title that doesnt exist', () => {
    expect(page.getCreateAdButtonText()).toEqual('Create an Advertisement');
  });

});

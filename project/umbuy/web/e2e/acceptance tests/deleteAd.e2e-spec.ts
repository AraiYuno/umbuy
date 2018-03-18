import { DeleteAdPage } from '../pages/deleteAd.po';
import { SharedPage } from '../pages/shared.po';
import { browser } from 'protractor';

describe('Acceptance Test Delete Ad Page', () => {
  let page: DeleteAdPage;
  let sharedPage: SharedPage;
  let numOfAdsBeforeDel: number;

  beforeEach(() => {
    page = new DeleteAdPage();
    sharedPage = new SharedPage();
    
    //adds an ad to the database before each test
    sharedPage.createAd(sharedPage.constructAd());
    
    sharedPage.navigateToHomePage();
    sharedPage.clickLoginButtonOnNavbar(function callback(url){
      expect(url).toContain("https://team6.auth0.com");
    });
     sharedPage.fillInLoginForm();
     sharedPage.submitLoginForm();

     //get number of ads before delete
     this.numOfAdsBeforeDel = sharedPage.getNumberOfAds();
     
    //click the last ad on page (the one we just added)
    sharedPage.clickLastAdOnHomePage(function callback(url){
      expect(url).toContain("http://localhost:4200/view/ads/");
    });
  
    sharedPage.clickDeleteBtn(function callback(url){
      expect(sharedPage.isDeleteModalVisible()).toBeTruthy();
    })

    browser.sleep(4000);
  });

    afterEach(() =>{
        sharedPage.clickLogoutButtonOnNavbar();
    });

  it('should delete the ad and no longer see the ad', () => {
    var numOfAdsAfterDel;
    page.clickDeleteButton();
    numOfAdsAfterDel = sharedPage.getNumberOfAds();
    expect(this.numOfAdsBeforeDel).toBeGreaterThan(numOfAdsAfterDel);
  });

});

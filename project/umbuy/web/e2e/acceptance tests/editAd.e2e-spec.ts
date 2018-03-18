import { EditAdPage } from '../pages/editAd.po';
import { SharedPage } from '../pages/shared.po';
import { browser } from 'protractor';

describe('Acceptance Test Edit Ad Page', () => {
  let page: EditAdPage;
  let sharedPage: SharedPage;

  beforeEach(() => {
    page = new EditAdPage();
    sharedPage = new SharedPage();
    
    //adds an ad to the database before each test
    sharedPage.createAd(sharedPage.constructAd());
    
    sharedPage.navigateToHomePage();
    sharedPage.clickLoginButtonOnNavbar(function callback(url){
      console.log(url);
    });
     sharedPage.fillInLoginForm();
     sharedPage.submitLoginForm();

    //click the last ad on page (the one we just added)
    sharedPage.clickLastAdOnHomePage(function callback(url){
      expect(url).toContain("http://localhost:4200/view/ads/");
    });
  
    sharedPage.clickEditBtn(function callback(url){
      expect(url).toContain("http://localhost:4200/edit/ads/");
    })

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

  it('should edit the ad and the information should be updated', () => {
    page.fillInEditFields();
    page.clickValidateAdButton();
    page.clickPostNowButton();
  
    //get current url and see if it matches what we expect
    sharedPage.getCurrentUrl(function callback(url){ 
      expect(url).toContain("http://localhost:4200/view/ads");
    });

    //check fields for a match
    expect(sharedPage.getAdTitle()).toEqual('editedByE2ETest');
    expect(sharedPage.getAdPrice()).toEqual('123456789$');
    expect(sharedPage.getAdDescription()).toEqual('This has been updated in the e2e edit test');
    expect(sharedPage.getAdImageUrl()).toEqual('https://s3.amazonaws.com/kyleteam6best/default.jpg');
  });

});

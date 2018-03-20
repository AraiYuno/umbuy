import { ViewAdInfoPage } from '../pages/viewAdInfo.po';
import { SharedPage } from '../pages/shared.po';
import { browser } from 'protractor';

describe('Acceptance Test ViewAdInfo Page', () => {
  let page: ViewAdInfoPage;
  let sharedPage: SharedPage;

  beforeEach(() => {
    page = new ViewAdInfoPage();
    sharedPage = new SharedPage();
    
    //adds an ad to the database before each test
    sharedPage.createAd(sharedPage.constructAd());
    
    sharedPage.navigateToHomePage();
    sharedPage.clickLoginButtonOnNavbar(function callback(url){
      expect(url).toContain("https://team6.auth0.com");
    });
     sharedPage.fillInLoginForm();
     sharedPage.submitLoginForm();

    //click the last ad on page (the one we just added)
    sharedPage.clickLastAdOnHomePage(function callback(url){
      expect(url).toContain("http://localhost:4200/view/ads/");
    });
  
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

  it('should display the user info for the ad', () => {
    expect(page.getUserFullName()).toEqual('Name: Stefan Couture');
    expect(page.getUserEmailAddress()).toEqual('Email: stefc2013@gmail.com');
  });

  it('should display the ad info for the ad', () => {
    expect(sharedPage.getAdTitle()).toEqual('e2e_test_newAd');
    expect(sharedPage.getAdPrice()).toEqual('250$');
    expect(sharedPage.getAdDescription()).toEqual('testAd Description');
    expect(sharedPage.getAdImageUrl()).toEqual('https://s3.amazonaws.com/kyleteam6best/default.jpg');
  });

  it('should display edit button for the ad', () => {
    expect(page.isEditButtonOnPage()).toBeTruthy();
  });

  it('should be on edit page after clicking edit advertisement button', () => {
    sharedPage.clickEditBtn(function callback(url){
      expect(url).toContain("http://localhost:4200/edit/ads/");
    })
  });

  it('should display delete button for the ad', () => {
    expect(page.isDeleteButtonOnPage()).toBeTruthy();
  });

  it('should display delete modal after clicking on delete advertisement button', () => {
    sharedPage.clickDeleteBtn(function callback(url){
      expect(sharedPage.isDeleteModalVisible()).toBeTruthy();
    })
  });

});

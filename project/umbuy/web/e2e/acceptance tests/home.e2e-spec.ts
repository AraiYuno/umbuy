import { HomePage } from '../pages/home.po';
import { SharedPage } from '../pages/shared.po';
import { browser } from 'protractor';

describe('Acceptance Test Home Page', () => {
  let page: HomePage;
  let sharedPage: SharedPage;

  beforeEach(() => {
    page = new HomePage();
    sharedPage = new SharedPage();
    
    //adds an ad to the database before each test
    sharedPage.createAd(sharedPage.constructAd());
    
    sharedPage.navigateToHomePage();
    sharedPage.clickLoginButtonOnNavbar(function callback(url){
      expect(url).toContain("https://team6.auth0.com");
    });
    sharedPage.fillInLoginForm();
    sharedPage.submitLoginForm();
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
  
  it('should see the create ad button on the page', () => {
    expect(page.getCreateAdButtonText()).toEqual('Create an Advertisement');
  });

  it('should click the create ad button on the page and end up on the create ad page', () => {
    sharedPage.clickCreateAdButton(function callback(url){
      expect(url).toContain("http://localhost:4200/createAd");      
    });
    expect(page.getCreateAdHeaderText()).toEqual('Create a New Advertisement');
  });

  it('should see the User Account button on the navbar', () => {
    expect(sharedPage.getUserAccountButtonText()).toEqual('User Account');
  });

  it('should click the User Account button on the navbar and be on the user profile page', () => {
    sharedPage.clickUserAccountBtnOnNavbar(function callback(url){
      expect(url).toContain("http://localhost:4200/profile");
    });
  });

  it('should click on an ad and be brought to its ad information page', () => {
    sharedPage.clickLastAdOnHomePage(function callback(url){
      expect(url).toContain("http://localhost:4200/view/ads/");
    });
  });

});

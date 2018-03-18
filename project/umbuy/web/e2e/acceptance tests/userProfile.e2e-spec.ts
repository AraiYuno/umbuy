import { UserPage } from '../pages/userProfile.po';
import { SharedPage } from '../pages/shared.po';
import { browser } from 'protractor';

describe('Acceptance Test User Page', () => {
  let page: UserPage;
  let sharedPage: SharedPage;

  beforeEach(() => {
    page = new UserPage();
    sharedPage = new SharedPage();
    
    sharedPage.navigateToHomePage();
    sharedPage.clickLoginButtonOnNavbar(function callback(url){
      expect(url).toContain("https://team6.auth0.com");
    });
    sharedPage.fillInLoginForm();
    sharedPage.submitLoginForm();

    sharedPage.clickUserAccountBtnOnNavbar(function callback(url){
      expect(url).toContain("http://localhost:4200/profile");
    })

    browser.sleep(4000);
  });

  afterEach(() =>{
    sharedPage.clickLogoutButtonOnNavbar();
  });
  
  it('should see the email address match the email that was used to login', () => {
    /*You can change the toEqual if you change the user that logs in. Make it match
     *the email that was entered to login.
     */
    browser.sleep(300);
    expect(page.getEmailAddressOnPage()).toEqual('stefc2013@gmail.com');
  });

  it('should see the my ads button', () => {
    expect(page.isMyAdsButtonOnPage()).toBeTruthy();
  });

  it('should see the my ads button and then click it', () => {
    expect(page.isMyAdsButtonOnPage()).toBeTruthy();

    page.clickMyAdsButton(function callback(url){
      expect(url).toContain("http://localhost:4200/view/ads/user/");
    })
  });

});

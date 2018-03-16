import { SharedPage } from '../pages/shared.po';

describe('Acceptance Test Login Page', () => {
  let sharedPage: SharedPage;

  beforeEach(() => {
    sharedPage = new SharedPage();
    sharedPage.navigateToHomePage();
  });

  it('should fill in login form and click save and end up on home page', () => {
    sharedPage.clickLoginButtonOnNavbar(function callback(url){
        expect(url).toContain("https://team6.auth0.com");
      });
    sharedPage.fillInLoginForm();
    sharedPage.submitLoginForm();
    expect(sharedPage.getHomeTabText()).toBe("Home");

    //to make sure that we log out after test to ensure that no other test fails if 
    //we are already logged in
    sharedPage.clickLogoutButtonOnNavbar();
  });

  it('should log user out when pressing log out', () => {
    //log in so we can test log out
    sharedPage.clickLoginButtonOnNavbar(function callback(url){
        expect(url).toContain("https://team6.auth0.com");
      });
    sharedPage.fillInLoginForm();
    sharedPage.submitLoginForm();

    //test log out
    sharedPage.clickLogoutButtonOnNavbar();
    expect(sharedPage.getHomeTabText()).toBe('');
  });

});

import { LoginPage } from '../pages/login.po';

describe('Acceptance Test Login Page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
    page.navigateToHomePage();
  });

  it('should fill in login form and click save and end up on home page', () => {
    page.clickLoginButtonOnNavbar();
    page.fillInLoginForm();
    page.submitLoginForm();
    expect(page.getHomeTabText()).toBe("Home");

    //to make sure that we log out after test to ensure that no other test fails if 
    //we are already logged in
    page.clickLogoutButtonOnNavbar();
  });

  it('should log user out when pressing log out', () => {
    //log in so we can test log out
    page.clickLoginButtonOnNavbar();
    page.fillInLoginForm();
    page.submitLoginForm();

    //test log out
    page.clickLogoutButtonOnNavbar();
    expect(page.getHomeTabText()).toBe('');
  });

});

import { RegisterPage } from '../pages/register.po';
import { SharedPage } from '../pages/shared.po';

describe('Acceptance Test Register Page', () => {
  let page: RegisterPage;
  let sharedPage: SharedPage;

  beforeEach(() => {
    page = new RegisterPage();
    sharedPage = new SharedPage();

    sharedPage.navigateToHomePage();
    sharedPage.clickLoginButtonOnNavbar(function callback(url){
        expect(url).toContain("https://team6.auth0.com");
      });
  });

  it('should display Please Log in to Continue', () => {
    expect(page.getHeader3Text()).toEqual('Please Log in to Continue');
  });

  it('should click Sign UP and be on sign up page', () => {
    page.clickSignUpButton(function callback(){
        expect(page.getSignUpHeaderText()).toEqual('Sign UP');
    }); 
  });

  it('should fill sign up information and see authorize modal after clicking sign up', () => {
    page.clickSignUpButton(function callback(){
        expect(page.getSignUpHeaderText()).toEqual('Sign UP');
    });

    page.fillInSignUpForm();
    //after filling in the form, click the button to sign up
    page.clickToSignUp(function callback(){
        expect(page.getAuthorizeModalText()).toEqual('Authorize App');
    });
    page.clickAuthorizeButton();
    expect(sharedPage.getHomeTabText()).toBe("Home");

    //to make sure that we log out after test to ensure that no other test fails if 
    //we are already logged in
    sharedPage.clickLogoutButtonOnNavbar();
    expect(sharedPage.getHomeTabText()).toBe('');
  });

});

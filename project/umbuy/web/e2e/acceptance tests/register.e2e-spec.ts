import { RegisterPage } from '../pages/register.po';

describe('Acceptance Test Register Page', () => {
  let page: RegisterPage;

  beforeEach(() => {
    page = new RegisterPage();
    page.navigateToHomePage();
    page.clickLoginButtonOnNavbar();
  });

  it('should display Please Log in to Continue', () => {
    expect(page.getHeader3Text()).toEqual('Please Log in to Continue');
  });

  it('should click Sign UP and be on sign up page', () => {
    page.clickSignUpButton(); 
  });

  it('should fill sign up information and see authorize modal after clicking sign up', () => {
    page.clickSignUpButton();
    page.fillInSignUpForm();
    //after filling in the form, click the button to sign up
    page.clickToSignUp();
    page.clickAuthorizeButton();
    expect(page.getHomeTabText()).toBe("Home");

    //to make sure that we log out after test to ensure that no other test fails if 
    //we are already logged in
    page.clickLogoutButtonOnNavbar();
    expect(page.getHomeTabText()).toBe('');
  });

});

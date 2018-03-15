import { AppPage } from '../pages/app.po';

describe('Acceptance Test App Page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateToHomePage();
  });

  it('should display UMBUY at the top of the page', () => {
    expect(page.getHeader1Text()).toEqual('UMBUY');
  });

  it('should display Classified Ads... on the page', () => {
    expect(page.getParagraphText()).toEqual('Classified Ads for University of Manitoba');
  });

  it('should see the Log in button on the page', () => {
    expect(page.getLoginButtonText()).toEqual('Log In');
  });

  it('should click the Log In button and end up on the login page', () => {
    page.clickLoginButton(); 
  });

});

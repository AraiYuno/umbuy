import { browser, by, element } from 'protractor';

describe('Acceptance Test Home Page', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should display UMBUY at the top of the page', () => {
    expect(element(by.css('app-root h1')).getText()).toEqual('UMBUY');
  });

  it('should display Classified Ads... on the page', () => {
    expect(element(by.css('app-root p')).getText()).toEqual('Classified Ads for University of Manitoba');
  });

  it('should see the Log in button on the page', () => {
    expect(element(by.css('app-root nav div #myNavbar #myNavbarRight li #qsLogoutBtn')).getText()).toEqual('Log In');
  });

  it('should click the Log In button and end up on the login page', () => {
    browser.ignoreSynchronization = true;
    browser.sleep(500);

    element(by.linkText('Log In')).click().then(function () {
      browser.getCurrentUrl().then(function (url){
        expect(url).toContain("https://team6.auth0.com");
      });
    });  
  });

});

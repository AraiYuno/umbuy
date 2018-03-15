import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToHomePage() {
    return browser.get('/');
  }

  getHeader1Text() {
    return element(by.css('app-root div div h1')).getText();
  }

  getParagraphText(){
    return element(by.css('app-root div div p')).getText();
  }

  getLoginButtonText(){
    return element(by.css('app-root nav div #myNavbar #myNavbarRight li #qsLogoutBtn')).getText();
  }

  clickLoginButton(){
    browser.ignoreSynchronization = true;
    browser.sleep(100);

    element(by.linkText('Log In')).click().then(function () {
      browser.getCurrentUrl().then(function (url){
        expect(url).toContain("https://team6.auth0.com");
      });
    }); 
  }
}
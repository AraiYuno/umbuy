import { browser, by, element } from 'protractor';

export class LoginPage {

  navigateToHomePage() {
    return browser.get('/');
  }

  clickLoginButtonOnNavbar(){
    browser.ignoreSynchronization = true;
    browser.sleep(100);

    element(by.linkText('Log In')).click().then(function () {
      browser.getCurrentUrl().then(function (url){
        expect(url).toContain("https://team6.auth0.com");
      });
    }); 
  }

  clickLogoutButtonOnNavbar(){
    browser.ignoreSynchronization = true;
    browser.sleep(100);

    element(by.linkText('Log Out')).click().then(function () {
        browser.sleep(100);
    }); 
  }

  fillInLoginForm(){
    //fill email
    element(by.css('#email')).sendKeys("stefc2013@gmail.com");
    //fill password
    element(by.css('#password')).sendKeys("password");
  }

  submitLoginForm(){
    element(by.buttonText('Log In')).click().then(function () {
      browser.sleep(3000);
    }); 
  }

  getHomeTabText(){
    return element(by.css('#homeTab')).getText();
  }
}
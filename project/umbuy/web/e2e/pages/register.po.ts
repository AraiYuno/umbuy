import { browser, by, element } from 'protractor';

export class RegisterPage {
  navigateToHomePage() {
    return browser.get('/');
  }

  getHeader3Text() {
    return element(by.css('div div #signin h3')).getText();
  }

  getParagraphText(){
    return element(by.css('app-root div div p')).getText();
  }

  getLoginButtonText(){
    return element(by.css('app-root nav div #myNavbar #myNavbarRight li #qsLogoutBtn')).getText();
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

  clickSignUpButton(){
    element(by.buttonText('SignUP')).click().then(function () {
      expect(element(by.css('#signup h1')).getText()).toEqual('Sign UP');
    }); 
  }

  fillInSignUpForm(){
    //generate a random email so there is no duplicates and the test will always pass.
    var email ="e2e" + this.getRandomNumber(0,600) + "test" + this.getRandomNumber(0,600) +
                  "fakeEmail" + this.getRandomNumber(0,600) + "softEng" +
                  this.getRandomNumber(0,600) + "@gmail.com";
    //fill email
    element(by.css('#email1')).sendKeys(email);
    //fill password
    element(by.css('#password1')).sendKeys("acceptancetest");
    //fill first name
    element(by.css('#FirstName')).sendKeys("Team6");
    //fill last name
    element(by.css('#LastName')).sendKeys("UMBUY");
    //fill phone number
    element(by.css('#phone')).sendKeys("2049999999");
  }

  clickToSignUp(){
    //click sign up button
    element(by.css('div div #signup form #btn-signup')).click().then(function () {
      browser.sleep(4000);
      expect(element(by.css('.first-line')).getText()).toEqual('Authorize App');
    });
  }

  clickAuthorizeButton(){
    //click authorize button
    element(by.css('#allow')).click().then(function () {
      browser.sleep(2000);
    });
  }

  getHomeTabText(){
    return element(by.css('#homeTab')).getText();
  }

  getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
}
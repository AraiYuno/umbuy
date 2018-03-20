import { browser, by, element, protractor } from 'protractor';

export class RegisterPage {
  EC = protractor.ExpectedConditions;
  
  getHeader3Text() {
    return element(by.css('div div #signin h3')).getText();
  }

  getParagraphText(){
    return element(by.css('app-root div div p')).getText();
  }

  getSignUpHeaderText(){
    return element(by.css('#signup h1')).getText();
  }

  clickSignUpButton(callback){
    var signUpBtn = element(by.buttonText('SignUP'));
    browser.wait(this.EC.elementToBeClickable(signUpBtn), 9000);
    signUpBtn.click().then(function () {
      callback();
    }); 
  }

  fillInSignUpForm(){
    var emailElement = element(by.css('#email1'));
    var passwordElement = element(by.css('#password1'));
    var firstNameElement = element(by.css('#FirstName'));
    var lastNameElement = element(by.css('#LastName'));
    var phoneElement = element(by.css('#phone'));

    browser.wait(this.EC.elementToBeClickable(emailElement), 9000);
    browser.wait(this.EC.elementToBeClickable(passwordElement), 9000);
    browser.wait(this.EC.elementToBeClickable(firstNameElement), 9000);
    browser.wait(this.EC.elementToBeClickable(lastNameElement), 9000);
    browser.wait(this.EC.elementToBeClickable(phoneElement), 9000);

    //generate a random email so there is no duplicates and the test will always pass.
    var email ="e2e" + this.getRandomNumber(0,600) + "test" + this.getRandomNumber(0,600) +
                  "fakeEmail" + this.getRandomNumber(0,600) + "softEng" +
                  this.getRandomNumber(0,600) + "@gmail.com";
    //fill email
    emailElement.sendKeys(email);
    //fill password
    passwordElement.sendKeys("acceptancetest");
    //fill first name
    firstNameElement.sendKeys("Team6");
    //fill last name
    lastNameElement.sendKeys("UMBUY");
    //fill phone number
    phoneElement.sendKeys("2049999999");
  }

  clickToSignUp(callback){
    //click sign up button
    var signUpBtn = element(by.css('div div #signup form #btn-signup'));
    browser.wait(this.EC.elementToBeClickable(signUpBtn), 9000);
    signUpBtn.click().then(function () {
      browser.sleep(5000);
      callback();
    });
  }

  getAuthorizeModalText(){
    var firstLineElement = element(by.css('.first-line'));
    browser.wait(this.EC.presenceOf(firstLineElement), 9000);
    return firstLineElement.getText();
  }

  clickAuthorizeButton(){
    var authorizeElement = element(by.css('#allow'));
    browser.wait(this.EC.elementToBeClickable(authorizeElement), 9000);
    //click authorize button
    authorizeElement.click().then(function () {
      browser.sleep(5000);
    });
  }

  getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
}
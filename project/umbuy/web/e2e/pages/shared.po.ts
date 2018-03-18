import { browser, by, element, protractor } from 'protractor';
import { Advertisement } from '../../src/app/data_model/advertisement';
var rest = require('restler');

export class SharedPage {
  EC = protractor.ExpectedConditions;

  navigateToHomePage() {
    return browser.get('/');
  }

  getLoginButtonText(){
    return element(by.css('app-root nav div #myNavbar #myNavbarRight li #qsLogoutBtn')).getText();
  }

  clickLoginButtonOnNavbar(callback){
    browser.ignoreSynchronization = true;
    var loginBtn = element(by.css('a#qsLogoutBtn'));
    browser.wait(this.EC.elementToBeClickable(loginBtn), 9000);

    loginBtn.click().then(function () {
      browser.getCurrentUrl().then(function (url){
        callback(url);
      });
    }); 
  }

  clickLogoutButtonOnNavbar(){
    var logoutBtn = element(by.css('a#qsLogoutBtn'));
    browser.wait(this.EC.elementToBeClickable(logoutBtn), 9000);
    logoutBtn.click().then(function () {
        browser.sleep(6000);
    }); 
  }

  submitLoginForm(){
    var submitBtn = element(by.css('button#btn-login.btn.btn-primary.btn-block'));
    browser.wait(this.EC.elementToBeClickable(submitBtn), 9000);
    submitBtn.click().then(function () {
      browser.sleep(6000);
    }); 
  }

  fillInLoginForm(){
    var emailField = element(by.css('input#email.form-control'));
    var passwordField = element(by.css('input#password.form-control'));
    browser.wait(this.EC.elementToBeClickable(emailField), 9000);
    browser.wait(this.EC.elementToBeClickable(passwordField), 9000);

    //fill email
    emailField.sendKeys("stefc2013@gmail.com");
    //fill password
    passwordField.sendKeys("password");
  }

  getHomeTabText(){
    return element(by.css('#homeTab')).getText();
  }

  clickCreateAdButton(callback){
    element(by.linkText('Create an Advertisement')).click().then(function () {
      browser.getCurrentUrl().then(function (url){
        callback(url);
      });
    }); 
  }

  getUserAccountButtonText(){
    return element(by.linkText('User Account')).getText();
  }

  clickUserAccountBtnOnNavbar(callback){
    element(by.linkText('User Account')).click().then(function () {
      browser.getCurrentUrl().then(function (url){
        callback(url);
      });
    }); 
  }

  clickLastAdOnHomePage(callback){
    var lastAd = element.all(by.css('a#ad')).last();
    browser.wait(this.EC.elementToBeClickable(lastAd), 9000);
    lastAd.click().then(function () {
      browser.getCurrentUrl().then(function (url){
        callback(url);
      });
    }); 
  }

  constructAd(){
    var newAd: Advertisement = new Advertisement;
    newAd.userId = "auth0|5a8cfd24f5c8213cb27d5ec2"; //userId of stefc2013@gmail.com
    newAd.title = "e2e_test_newAd";
    newAd.description = "testAd Description";
    newAd.price = 250.00;
    newAd.imageUrl = 'https://s3.amazonaws.com/kyleteam6best/default.jpg';
    newAd.category = "testAd Category";

    return newAd;
  }

  createAd(ad){
    rest.postJson('http://localhost:3000/api/createAd', ad).on('complete', function(data, response) {
      console.log("Ad with id " + data.insertId + " has been created");
    });
  }

  deleteAd(id){
    rest.del('http://localhost:3000/api/ads/' +id).on('complete', function(data, response) {
      console.log("Deleted rows: " + data.affectedRows);
    });
  }

  getCurrentUrl(callback){
    browser.getCurrentUrl().then( function( url ){
      callback(url);
    });
  }

  getAdvertisementId(pathnameUrl: string){
    var splittedParts;
    var splittedParts_length: number;
    var adId: string;

    splittedParts = pathnameUrl.split("/");
    splittedParts_length = splittedParts.length;
    
    adId = splittedParts[splittedParts_length-1];
    
    return adId;
  }

  clickEditBtn(callback){
    var editBtn = element(by.css('button#editButton'));
    browser.wait(this.EC.elementToBeClickable(editBtn), 9000);

    editBtn.click().then(function () {
      browser.getCurrentUrl().then(function (url){
        callback(url);
      });
    }); 
  }

  clickDeleteBtn(callback){
    var deleteBtn = element(by.css('button#deleteButton'));
    browser.wait(this.EC.elementToBeClickable(deleteBtn), 9000);
    deleteBtn.click().then(function () {
        browser.sleep(6000);
        callback();
    }); 
  }

  isDeleteModalVisible(){
    return element(by.css('#deleteModal')).isDisplayed();
  }

  getAdTitle(){ return element(by.css('h1#title')).getText(); }

  getAdPrice(){ return element(by.css('h3#price')).getText(); }

  getAdDescription(){ return element(by.css('h3#description')).getText(); }

  getAdImageUrl(){ return element(by.css('img#image')).getAttribute('src'); }

  getNumberOfAds(){
    return element.all(by.css('a#ad')).count();
  }
}
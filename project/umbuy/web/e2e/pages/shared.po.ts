import { browser, by, element } from 'protractor';
import { Advertisement } from '../../src/app/data_model/advertisement';
var rest = require('restler');

export class SharedPage {

  navigateToHomePage() {
    return browser.get('/');
  }

  getLoginButtonText(){
    return element(by.css('app-root nav div #myNavbar #myNavbarRight li #qsLogoutBtn')).getText();
  }

  clickLoginButtonOnNavbar(callback){
    browser.ignoreSynchronization = true;
    browser.sleep(100);

    element(by.linkText('Log In')).click().then(function () {
      browser.getCurrentUrl().then(function (url){
        callback(url);
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

  submitLoginForm(){
    element(by.buttonText('Log In')).click().then(function () {
      browser.sleep(3000);
    }); 
  }

  fillInLoginForm(){
    //fill email
    element(by.css('#email')).sendKeys("stefc2013@gmail.com");
    //fill password
    element(by.css('#password')).sendKeys("password");
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
    element.all(by.css('#ad')).last().click().then(function () {
      browser.getCurrentUrl().then(function (url){
        callback(url);
      });
    }); 
  }

  constructAd(){
    var newAd: Advertisement = new Advertisement;
    newAd.userId = "auth0|5a8cfd24f5c8213cb27d5ec2"; //userId of stefc2013@gmail.com
    newAd.title = "e2e_test_auth0|5a8cfd24f5c8213cb27d5ec2_newAd";
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
    browser.getCurrentUrl().then( function( url ) {
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
}
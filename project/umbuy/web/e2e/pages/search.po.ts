import { browser, by, element, protractor } from 'protractor';
import { Advertisement } from '../../src/app/data_model/advertisement';

export class SearchPage {
  EC = protractor.ExpectedConditions;

  fillInSearchField(valid){
    var searchField = element(by.css('input#inputBox.form-control.ng-untouched.ng-pristine.ng-valid'));
    browser.wait(this.EC.elementToBeClickable(searchField), 9000);

    //fill search Field
    if(valid){
      searchField.sendKeys("e2e_test_searchAd"); 
    }
    else{
      searchField.sendKeys("iamnotavalidtitlefortheadthatwasentered"); 
    }
  }

  constructAd(){
    var newAd: Advertisement = new Advertisement;
    newAd.userId = "auth0|5a8cfd24f5c8213cb27d5ec2"; //userId of stefc2013@gmail.com
    newAd.title = "e2e_test_searchAd";
    newAd.description = "testAd Search Description";
    newAd.price = 500.00;
    newAd.imageUrl = 'https://s3.amazonaws.com/kyleteam6best/default.jpg';
    newAd.category = "testAd Search Category";

    return newAd;
  }

  searchAdIsDisplayed(callback){
    browser.sleep(7000);
    this.getAdTitle().then(function(title){
      if(title === "e2e_test_searchAd"){
        callback(true);
      }
      else{
        callback(false);
      }
    })
  };

  getAdTitle(){
    var lastAd = element.all(by.css('h3#title')).last();
    browser.wait(this.EC.presenceOf(lastAd), 9000);
    return lastAd.getText();
  }

}
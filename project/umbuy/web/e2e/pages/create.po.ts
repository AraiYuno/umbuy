import { browser, by, element, protractor } from 'protractor';

export class CreatePage {
  EC = protractor.ExpectedConditions;
  
  getCreateAdHeaderText(){
    return element(by.css('#createAdHeader')).getText();
  }

  fillInCreateAdForm(){
    var titleField = element(by.css('input#title.txt.form-control.ng-untouched.ng-pristine.ng-valid'));
    var priceField = element(by.css('input#price.double.form-control.ng-untouched.ng-pristine.ng-valid'));
    var categoryField = element(by.css('input#category.txt.form-control.ng-untouched.ng-pristine.ng-valid'));
    var descriptionField = element(by.css('textarea#description.txt.form-control.ng-untouched.ng-pristine.ng-valid'));

    //fill title
    browser.wait(this.EC.elementToBeClickable(titleField), 9000);
    titleField.sendKeys("testAd Title_Create");

    //fill price
    browser.wait(this.EC.elementToBeClickable(priceField), 9000);
    priceField.sendKeys("250.00");

    //fill category
    browser.wait(this.EC.elementToBeClickable(categoryField), 9000);
    categoryField.sendKeys("testAd Category");

    //fill description
    browser.wait(this.EC.elementToBeClickable(descriptionField), 9000);
    descriptionField.sendKeys("testAd Description");
  }

  getLastAdTitleOnPage(){
    var lastTitle = element.all(by.css('#title')).last();
    browser.wait(this.EC.elementToBeClickable(lastTitle), 9000);
    return lastTitle;
  }

  clickValidateAdButton(){
    var button = element(by.css('button#postBtn'));
    browser.wait(this.EC.elementToBeClickable(button), 9000);
    button.click();
  }

  clickPostNowButton(){
    var postNow = element(by.css('input#postNow'));
    browser.wait(this.EC.elementToBeClickable(postNow), 9000);
    postNow.click();
    browser.sleep(4000);
  }

}
import { browser, by, element } from 'protractor';

export class CreatePage {
  
  getCreateAdHeaderText(){
    return element(by.css('#createAdHeader')).getText();
  }

  fillInCreateAdForm(){
    //fill title
    element(by.css('#title')).sendKeys("testAd Title_Create");
    //fill price
    element(by.css('#price')).sendKeys("250.00");
    //fill category
    element(by.css('#category')).sendKeys("testAd Category");
    //fill description
    element(by.css('#description')).sendKeys("testAd Description");
  }

  getLastAdTitleOnPage(){
    return element.all(by.css('#title')).last();
  }

  clickValidateAdButton(){
    element(by.css('button#postBtn')).click();
  }

  clickPostNowButton(){
    element(by.css('input#postNow')).click();
    browser.sleep(4000);
  }

}
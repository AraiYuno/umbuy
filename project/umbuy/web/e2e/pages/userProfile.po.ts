import { browser, by, element } from 'protractor';

export class UserPage {
  
  getHeader1Text() {
    return element(by.css('app-root div div h1')).getText();
  }

  getParagraphText(){
    return element(by.css('app-root div div p')).getText();
  }

  getEmailAddressOnPage(){
    return element(by.css('td#emailAddress')).getText();
  }

  isMyAdsButtonOnPage(){
    return element(by.buttonText('My ads')).isPresent();
  }

  clickMyAdsButton(callback){
    element(by.buttonText('My ads')).click().then(function () {
      browser.getCurrentUrl().then(function (url){
        browser.sleep(6000);
        callback(url);
      });
    }); 
  }
}
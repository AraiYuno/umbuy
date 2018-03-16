import { browser, by, element } from 'protractor';

export class AppPage {
  
  getHeader1Text() {
    return element(by.css('app-root div div h1')).getText();
  }

  getParagraphText(){
    return element(by.css('app-root div div p')).getText();
  }

}
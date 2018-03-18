import { browser, by, element } from 'protractor';

export class HomePage {
  
  getCreateAdButtonText() {
    return element(by.css('#createAdButton')).getText();
  }

  getCreateAdHeaderText(){
    return element(by.css('#createAdHeader')).getText();
  }
}
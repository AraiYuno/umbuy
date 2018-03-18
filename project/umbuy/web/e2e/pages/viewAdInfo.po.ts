import { browser, by, element } from 'protractor';

export class ViewAdInfoPage {
  
  getUserEmailAddress(){
    return element(by.css('h3#userEmail')).getText();
  }

  getUserFullName(){
    return element(by.css('h3#userFullName')).getText();
  }

  isEditButtonOnPage(){
    return element(by.css('button#editButton')).isPresent();
  }

  isDeleteButtonOnPage(){
    return element(by.css('button#deleteButton')).isPresent();
  }

}
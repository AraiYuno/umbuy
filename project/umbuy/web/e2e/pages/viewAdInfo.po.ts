import { browser, by, element, protractor } from 'protractor';

export class ViewAdInfoPage {
  EC = protractor.ExpectedConditions;
  
  getUserEmailAddress(){
    return element(by.css('h3#userEmail')).getText();
  }

  getUserFullName(){
    return element(by.css('h3#userFullName')).getText();
  }

  isEditButtonOnPage(){
    var editBtn = element(by.css('button#editButton'));
    browser.wait(this.EC.presenceOf(editBtn), 9000);
    return editBtn.isPresent();
  }

  isDeleteButtonOnPage(){
    var deleteBtn = element(by.css('button#deleteButton'));
    browser.wait(this.EC.presenceOf(deleteBtn), 9000);
    return deleteBtn.isPresent();
  }

}
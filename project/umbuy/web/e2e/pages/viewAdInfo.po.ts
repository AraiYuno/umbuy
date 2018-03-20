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
    browser.sleep(6000);
    var editBtn = element(by.css('button#editButton'));
    browser.wait(this.EC.presenceOf(editBtn), 12000);
    return editBtn.isPresent();
  }

  isDeleteButtonOnPage(){
    browser.sleep(6000);
    var deleteBtn = element(by.css('button#deleteButton'));
    browser.wait(this.EC.presenceOf(deleteBtn), 12000);
    return deleteBtn.isPresent();
  }

}
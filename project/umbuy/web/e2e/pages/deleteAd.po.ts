import { browser, by, element, protractor } from 'protractor';

export class DeleteAdPage {
  EC = protractor.ExpectedConditions;
  
  clickDeleteButton(){
    var deleteBtn = element(by.css('button#confirmDelete.btn.btn-danger'));
    browser.wait(this.EC.elementToBeClickable(deleteBtn), 9000);
    deleteBtn.click().then(function () {
        browser.sleep(6000);
    });
  }

  getNumberOfAds(){
    return element.all(by.css('a#ad')).count();
  }
}
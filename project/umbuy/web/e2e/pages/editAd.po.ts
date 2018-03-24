import { browser, by, element, protractor } from 'protractor';

export class EditAdPage {
  EC = protractor.ExpectedConditions;
  
  fillInEditFields(){
    var titleField = element(by.css('input#title'));
    var priceField = element(by.css('input#price'));
    var descriptionField = element(by.css('textarea#description'));

    browser.wait(this.EC.elementToBeClickable(titleField), 12000);
    browser.wait(this.EC.elementToBeClickable(priceField), 12000);
    browser.wait(this.EC.elementToBeClickable(descriptionField), 12000);

    titleField.clear().then(function() {
      //fill title
      titleField.sendKeys("editedByE2ETest");
    })

    priceField.clear().then(function() {
      //fill price
      priceField.sendKeys(123456789);
    })

    descriptionField.clear().then(function() {
      //fill description
      descriptionField.sendKeys("This has been updated in the e2e edit test");
    })
    
  }

  clickValidateAdButton(){
    element(by.css('button#validateAd')).click();
  }

  clickPostNowButton(){
    element(by.css('button#saveAd')).click();
    browser.sleep(9000);
  }
  
  clickDeleteButton(){
    var deleteBtn = element(by.css('button#confirmDelete.btn.btn-danger'));
    browser.wait(this.EC.elementToBeClickable(deleteBtn), 12000);
    deleteBtn.click().then(function () {
        browser.sleep(9000);
    });
  }

  
}
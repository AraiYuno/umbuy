import { AppPage } from '../pages/app.po';
import { SharedPage } from '../pages/shared.po';
import { browser } from 'protractor';

describe('Acceptance Test App Page', () => {
  let page: AppPage;
  let sharedPage: SharedPage;

  beforeEach(() => {
    page = new AppPage();
    sharedPage = new SharedPage();
    sharedPage.navigateToHomePage();
    browser.sleep(4000);
  });

  it('should display UMBUY at the top of the page', () => {
    expect(page.getHeader1Text()).toEqual('UMBUY');
  });

  it('should display Classified Ads... on the page', () => {
    expect(page.getParagraphText()).toEqual('Classified Ads for University of Manitoba');
  });

});

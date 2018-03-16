import { AppPage } from '../pages/app.po';
import { SharedPage } from '../pages/shared.po';

describe('Acceptance Test App Page', () => {
  let page: AppPage;
  let sharedPage: SharedPage;

  beforeEach(() => {
    page = new AppPage();
    sharedPage = new SharedPage();
    sharedPage.navigateToHomePage();
  });

  it('should display UMBUY at the top of the page', () => {
    expect(page.getHeader1Text()).toEqual('UMBUY');
  });

  it('should display Classified Ads... on the page', () => {
    expect(page.getParagraphText()).toEqual('Classified Ads for University of Manitoba');
  });

});

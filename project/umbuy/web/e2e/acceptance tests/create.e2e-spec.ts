import { CreatePage } from '../pages/create.po';
import { SharedPage } from '../pages/shared.po';

describe('Acceptance Test Create Page', () => {
  let page: CreatePage;
  let sharedPage: SharedPage;

  beforeEach(() => {
    page = new CreatePage();
    sharedPage = new SharedPage();
    
    sharedPage.navigateToHomePage();
    sharedPage.clickLoginButtonOnNavbar(function callback(url){
      expect(url).toContain("https://team6.auth0.com");
    });
    sharedPage.fillInLoginForm();
    sharedPage.submitLoginForm();
  });

  afterEach(() =>{
    sharedPage.clickLogoutButtonOnNavbar();
  })

  it('should fill the create ad form and once click button to save it, should see it on createAd page', () => {
    var newAd;

    sharedPage.clickCreateAdButton(function callback(url){
      expect(url).toContain("http://localhost:4200/createAd");      
    });
    page.fillInCreateAdForm();
    page.clickValidateAdButton();
    page.clickPostNowButton();

    newAd = page.getLastAdTitleOnPage();
    expect(newAd.getText()).toContain("testAd Title_Create");
  });

});

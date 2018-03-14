import { AppPage } from './app.po';

describe('umbuy App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display UMBUY', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('UMBUY');
  });
});

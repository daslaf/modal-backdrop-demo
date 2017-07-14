import { BackdropPage } from './app.po';

describe('backdrop App', () => {
  let page: BackdropPage;

  beforeEach(() => {
    page = new BackdropPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

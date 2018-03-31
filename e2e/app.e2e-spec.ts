import { LovemapsPage } from './app.po';

describe('lovemaps App', () => {
  let page: LovemapsPage;

  beforeEach(() => {
    page = new LovemapsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

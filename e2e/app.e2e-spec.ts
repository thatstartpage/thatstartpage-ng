import { ThatstartpageNgPage } from './app.po';

describe('thatstartpage-ng App', () => {
  let page: ThatstartpageNgPage;

  beforeEach(() => {
    page = new ThatstartpageNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

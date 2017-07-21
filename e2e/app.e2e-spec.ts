import { MarvelManiaPage } from './app.po';

describe('marvel-mania App', () => {
  let page: MarvelManiaPage;

  beforeEach(() => {
    page = new MarvelManiaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

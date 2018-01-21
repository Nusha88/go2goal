import { Go2goalPage } from './app.po';

describe('go2goal App', () => {
  let page: Go2goalPage;

  beforeEach(() => {
    page = new Go2goalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { TestdsPage } from './app.po';

describe('testds App', () => {
  let page: TestdsPage;

  beforeEach(() => {
    page = new TestdsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

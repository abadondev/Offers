import { FluffyTimePage } from './app.po';

describe('fluffy-time App', () => {
  let page: FluffyTimePage;

  beforeEach(() => {
    page = new FluffyTimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ContactManagementSystemPage } from './app.po';

describe('contact-management-system App', function() {
  let page: ContactManagementSystemPage;

  beforeEach(() => {
    page = new ContactManagementSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

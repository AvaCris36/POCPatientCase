import { POCPatientCasePage } from './app.po';

describe('pocpatient-case App', () => {
  let page: POCPatientCasePage;

  beforeEach(() => {
    page = new POCPatientCasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

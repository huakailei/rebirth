import { ManageLoginPage } from './manage-login.po';
import { ManageHomePage } from '../home/manage-home.po';
import { browser } from 'protractor';

describe('rebirth login page', () => {
  let loginPage: ManageLoginPage;
  let homePage: ManageHomePage;

  beforeEach(() => {
    loginPage = new ManageLoginPage();
    homePage = new ManageHomePage();
    loginPage.navigateTo();
  });

  it('should login in to admin dashboard', () => {
    loginPage
      .email("admin@localhost.com")
      .password('admin')
      .login()
      .login();

    expect(homePage.getCurrentUrl()).toMatch(/\/manage\/home/);
    expect(homePage.text()).toEqual('admin role');
  });

  it('should cannot login in to dashboard when has error', () => {

    loginPage
      .email("wrong name")
      .password('wrong password')
      .login()
      .login();


    expect(loginPage.getCurrentUrl()).toMatch(/\/manage\/login/);
  });

  afterEach(()=> loginPage.clearSession());
});
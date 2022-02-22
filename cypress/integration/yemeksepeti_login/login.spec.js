import TestFilter from '../../support/test-filter';
import LoginPage from '../../pages/login.page';
import LoginMainPage from '../../pages/loginmain.page';
import LoginConstant from '../../constants/login.constants';

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://www.yemeksepeti.com/en/ankara')
    })

    TestFilter.any(['smoke', 'regression', ''], () => {
      it('.type() Valid email and pass - type into a DOM element', () => {
        LoginPage.enter_username(LoginConstant.valid_email)
        LoginPage.enter_pass(LoginConstant.valid_pass)
        LoginPage.click_login()
        LoginPage.verify_login(LoginConstant.ysusername)
        LoginMainPage.click_logout()
      })
    })

    TestFilter.any(['smoke', 'regression', ''], () => {
        it('.type() Valid email Invalid Pass - type into a DOM element', () => {
          LoginPage.enter_username(LoginConstant.valid_email)
          LoginPage.enter_pass(LoginConstant.invalid_pass)
          LoginPage.click_login()
          LoginPage.check_warning(LoginConstant.warningmessage)
        })
      })

    TestFilter.any(['smoke', 'regression', ''], () => {
        it('.type() InValid email Invalid Pass - type into a DOM element', () => {
          LoginPage.enter_username(LoginConstant.invalid_email)
          LoginPage.enter_pass(LoginConstant.invalid_pass)
          LoginPage.click_login()
          LoginPage.check_warning(LoginConstant.warningmessage)
        })
      })

      TestFilter.any(['smoke', 'regression', ''], () => {
        it('.type() InValid email valid Pass - type into a DOM element', () => {
          LoginPage.enter_username(LoginConstant.invalid_email)
          LoginPage.enter_pass(LoginConstant.valid_pass)
          LoginPage.click_login()
          LoginPage.check_warning(LoginConstant.warningmessage)
        })
      })
      
  })
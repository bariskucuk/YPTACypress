import TestFilter from '../../support/test-filter';
import LoginPage from '../../pages/login.page';
import LoginMainPage from '../../pages/loginmain.page';
import LoginConstant from '../../constants/login.constants';
import LoginMainConstant from '../../constants/loginmain.constants';
import RestaurantDetailPage from '../../pages/restaurantdetail.page';
import FavouritesDetailPage from '../../pages/favourites.page';

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://www.yemeksepeti.com/en/ankara')
    })

    TestFilter.any(['smoke', 'regression', ''], () => {
      it('.click() Add a Favourite Restaurant - click a DOM element', () => {
        LoginPage.enter_username(LoginConstant.valid_email)
        LoginPage.enter_pass(LoginConstant.valid_pass)
        LoginPage.click_login()
        LoginPage.verify_login(LoginConstant.ysusername)
        LoginMainPage.select_region(LoginMainConstant.region)
        LoginMainPage.enter_restaurant(LoginMainConstant.restaurant)
        LoginMainPage.getto_first_restaurant()
        RestaurantDetailPage.click_addtofavourites()
        LoginMainPage.getto_favourites()
        FavouritesDetailPage.check_item()
        FavouritesDetailPage.click_delete()
      })
    }) 
  })
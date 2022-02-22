import LoginMainLocator from '../locators/loginmain.locators';

var LoginMainPage = {

    open_userinfo: function(){
        cy.get(LoginMainLocator.userinfo())
        .click()
    },

    click_logout: function(pass) {
        this.open_userinfo()
        cy.get(LoginMainLocator.logout_button())
        .click()
    },

    select_region: function(region) {
        cy.get(LoginMainLocator.regionfield_button())
        .click({force: true}).wait(500)
        cy.get(LoginMainLocator.regionfield_input())
        .type(region).type('{enter}')

    },

    enter_restaurant: function(restaurant) {
        cy.get(LoginMainLocator.restaurantsearch_input())
        .type(restaurant).type('{enter}')
    },

    getto_first_restaurant: function() {
        cy.wait(500)
        cy.get(LoginMainLocator.restaurantname()).eq(0).click()
    },

    getto_favourites:function(){
        this.open_userinfo()
        cy.wait(500)
        cy.get(LoginMainLocator.usersettings()).contains('Favourites').click()
    }
};

export default LoginMainPage;
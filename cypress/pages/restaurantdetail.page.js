import RestaurantDetailLocator from '../locators/restaurantdetail.locators';

var RestaurantDetailPage = {

    click_addtofavourites: function() {
        cy.get(RestaurantDetailLocator.addtofavourites())
        .click()
    },

};

export default RestaurantDetailPage;
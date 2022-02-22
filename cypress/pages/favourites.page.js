import FavouritesLocator from '../locators/favourites.locators';

var FavouritesPage = {

    check_item: function(){
        cy.get(FavouritesLocator.checkbox())
        .check()
    },

    click_delete: function() {
        cy.get(FavouritesLocator.favourites_button()).contains("DELETE")
        .click()
    },

};

export default FavouritesPage;
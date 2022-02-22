import LoginLocator from '../locators/login.locators';

var LoginPage = {

    enter_username: function(username) {
        cy.get(LoginLocator.username())
        .type(username).should('have.value', username)
    },

    enter_pass: function(pass) {
        cy.get(LoginLocator.password())
        .type(pass)
    },

    click_login: function() {
        cy.get(LoginLocator.fastlogin_button())
        .click()
    },

    verify_login: function(yspusername) {
        cy.get(LoginLocator.ysusername())
        .should('have.text', yspusername)
    },

    check_warning:function(message){
        cy.get(LoginLocator.loginwarning())
        .should('have.text', message)
    }
};

export default LoginPage;
import { Then, When } from 'cypress-cucumber-preprocessor/steps';

When('visit {string}', (url) => {
    cy.visit(url);
});

Then('the correct URL {string} loads', (url) => {
    cy.url().should('eq', `${Cypress.config().baseUrl}${url}`)
});

When('scroll to {string} section', (section) => {
    cy.get('h2').contains(section).scrollIntoView().should('be.visible');
});

When('click {string} tab from the main menu', (tabName) => {
    cy.get('.main-link').contains(tabName).click({ force: true });
});


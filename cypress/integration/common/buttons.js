import { Then, When } from 'cypress-cucumber-preprocessor/steps';

When('click {string} button', (buttonName) => {
    cy.get('button, .wt-cli-accept-all-btn, .btn-apply').contains(buttonName).click();
});

When('click on {string} webelement', (webelementName) => {
    cy.get(`input[value=${webelementName}]`).click({ force: true });
});

Then('{string} button is present', (webelementName) => {
    cy.get(`input[value=${webelementName}]`).should('exist');
});

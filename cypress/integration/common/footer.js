import { Then, When } from 'cypress-cucumber-preprocessor/steps';

Then('click the {string} link from the footer', (link) => {
  cy.get(`footer .musala-icon-${link.toLowerCase()}`).scrollIntoView().click();
});

Then('the correct URL {string} of {string} link loads in new tab', (url, link) => {
  cy.get(`footer .musala-icon-${link.toLowerCase()}`).closest('a')
    .should('have.attr', 'href', url).should('have.attr', 'target', '_blank')
    .then(link => {
      cy.request(link.prop('href')).its('status').should('eq', 200)
    })
});
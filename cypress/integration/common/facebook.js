import { Then, When } from 'cypress-cucumber-preprocessor/steps';


When('log into facebook', () => {
    cy.visit('https://facebook.com');
    cy.get('button[data-cookiebanner="accept_only_essential_button"]').click();
    cy.fixture('facebook-credentials').then((fbcredentials) => {
        cy.get('#email').type(fbcredentials.username);
        cy.get('#pass').type(fbcredentials.password);
        cy.get('#loginbutton').click();
    });
});

Then('Musala Soft profile picture appears on the new page', () => {
    cy.get('button[data-cookiebanner="accept_only_essential_button"]').scrollIntoView().click();
    cy.get('[aria-label="Musala Soft profile photo"]').should('exist')
});

When('click on Allow Essential and Optional Cookies', () => {
    cy.contains('Allow Essential and Optional Cookies').click();
});

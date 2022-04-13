import { Then, When } from 'cypress-cucumber-preprocessor/steps';


When('from the dropdown {string} select {string}', (dropdownName, option) => {
    cy.get('span.filter-text').contains(dropdownName).closest('div').find('select').select(option);
});

When('click on {string} job card', (jobTitle) => {
    cy.get('h2.card-jobsHot__title').contains(jobTitle).closest('div.card-container').click();
});

Then('the {string} section is present', (section) => {
    cy.get('section.company-members').find('h2').should('contain', section);
});
import { Then, When } from 'cypress-cucumber-preprocessor/steps';

Then('verify that 4 main sections are shown', (dataTable) => {
    dataTable.hashes().forEach(row => {
        cy.get('h2').contains(row.section).should('exist').should('be.visible');
    });
});

Then('get the open positions by city and print in the console the list with available positions by city {string}', (city) => {
    let positionsMap = new Map();
    cy.get('.card-container').each(($card) => {
        cy.get($card).find('.card-jobsHot__title').invoke('text').then(position => {
            cy.get($card).find('a.card-jobsHot__link').invoke('attr', 'href').then((href) => {
                positionsMap.set(position, href.toString());
            });
        });
    }).then(() => {
        console.log(city);
        positionsMap.forEach((key, value) => {
            console.log('Position: ', value, '\nMore info: ', key)
        });
    });
});

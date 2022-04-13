import { Then, When } from 'cypress-cucumber-preprocessor/steps';

When('type {int} chars long text in {string} input field', (numberOfChars, fieldName) => {
  const value = generateString(numberOfChars);
  typeInTextField(value, fieldName);
});

function generateString(length) {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let str = '';
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
};

function typeInTextField(value, fieldName) {
  cy.get('label.input-text-cf').contains(fieldName).closest('p')
    .find('input, textarea').clear({ force: true }).type(value);
};

When('type {string} in {string} input field', (text, fieldName) => {
  typeInTextField(text, fieldName)
});

Then('the error message {string} appears for {string} input field', (message, fieldName) => {
  cy.get('label.input-text-cf').contains(fieldName).closest('p').find('.wpcf7-not-valid-tip').should('contain', message);
});

Then('an error messages is displayed for the indicated field', (dataTable) => {
  dataTable.hashes().forEach(row => {
    cy.get('label.input-text-cf').contains(row.fieldName).closest('p').find('.wpcf7-not-valid-tip').should('contain', row.message);
  });
});

When('upload a {string} document', (fileName) => {
  cy.get('input[type="file"]')
    .attachFile(fileName);
});

When('click the Consent checkbox', () => {
  cy.get('[name=adConsentChx]').click();
});

Then('validate the {string} data entered in {string} input field', (dataType, fieldName) => {
  cy.task('readXlsxFile').then(() => {
    cy.fixture('testData.json').then((testData) => {
      testData.forEach((testDataRow) => {
        const data = {
          email: testDataRow.email,
          message: testDataRow.message
        };
        typeInTextField(data.email, fieldName);
        cy.get('input[type="submit"]').click();
        cy.get('label.input-text-cf').contains(fieldName).closest('p').find('.wpcf7-not-valid-tip').should('contain', data.message);
      });
    });
  });
});
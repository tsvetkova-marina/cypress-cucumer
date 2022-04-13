/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const cucumber = require('cypress-cucumber-preprocessor').default;
//const readXlsx = require('./read-xlsx');
const XLSX = require('xlsx');
const fsExtra = require('fs-extra');

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
 
  on('task', {
    readXlsxFile() {
      try {
        const workBook = XLSX.readFile("./testData/testData.xlsx");
        const jsonData = XLSX.utils.sheet_to_json(workBook.Sheets.testData);
        fsExtra.writeFileSync(
          "./cypress/fixtures/testData.json",
          JSON.stringify(jsonData)
        );
      } catch (e) {
        throw Error(e);
      }
      return null;
    }
  });

   on('file:preprocessor', cucumber());
  allureWriter(on, config);
  return config;
}




# Musala Test Project
## Scripts

* `npm run cypress:open` starts cypress test runner.
* `npm run cypress:run` run the tests in a headless mode
* `cy:run:chrome`  run the tests with chrome browser,
* `cy:run:firefox`  run the tests with firefox browser

## Allure test report
#### Requirements
* Java 8+
* Allure reporter: [allure-commandline npm package](https://www.npmjs.com/package/allure-commandline).

#### Execution
* `npm run cypress:run` run UI tests and generate Allure results in `allure-results` folder.
To view reports use:
* `allure serve` will generate report HTML and will serve it by starting local HTTP server and will open in default browser

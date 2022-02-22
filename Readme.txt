Requirements

Java for Allure Reports
Docker Desktop
-image: "cypress/included:9.5.0"
Install All Dependencies
-cypress-allure-plugin
-cypress-mochawesome-reporter
-json-file-reporter

Commands For Allure Reports

-serve report based on current "allure-results" folder: allure serve
-generate new report based on current "allure-results" folder: allure generate
-open generated report from "allure-report" folder: allure open

TO Run Tests 
npx cypress run

TO Run Tests on Docker (Parallel and Crossbrowser)
docker-compose up
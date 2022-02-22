Requirements
+ Install Visual Studio Code
+ Open VS Code and Clone the repository
+ Install node.js and npm
+ Install cypress (npm install cypress --save-dev)
+ Install all dependencies using `npm install`
+ Java for Allure Reports
+ Install Docker Desktop / https://hub.docker.com/r/cypress/included
  -image: "cypress/included:9.5.0"

TO Run Tests 
npx cypress run

TO Run Tests on Docker (Parallel and Crossbrowser)
docker-compose up

Commands For Allure Reports

-serve report based on current "allure-results" folder: allure serve
-generate new report based on current "allure-results" folder: allure generate
-open generated report from "allure-report" folder: allure open


# WebDriverIO_Mocha_Javascript
[WebdriverIO](http://webdriver.io/)

<img src = "https://miro.medium.com/max/2488/1*2ntKtVBowGdACso6Gcmy1A.jpeg" height = "175"> <img src = "https://user-images.githubusercontent.com/48508827/118311500-9db4b480-b50d-11eb-9f5c-7ce75b1d4ce5.png" height = "175" width = "350">

WebdriverIO is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and flakiness test suite.

This is a sample WebdriverIO (v7) Mocha framework project to automate web applications using Javascript. This framework was designed with Page Object Pattern.

## Pre-requisites
1. Install [NodeJS](https://nodejs.org/en/download/) >= 12.16.1
2. Download Visual Studio Code [IDE](https://code.visualstudio.com/download) based on the OS.
3. Install Docker and make sure docker is in running state.

## Project Setup and Dependencies Installation Steps
1. Clone the project from GitHub. 
2. Open `Terminal` from the project root directory `WDIO_Mocha_Javascript`  on the VS code.
3. On the terminal, Run command `npm install` to install all the dependencies present in the package.json file.

## Steps to execute tests locally
1. On the terminal, Run command `npm test` to execute the scripts locally.

## Steps to execute tests on Docker container
1. On the terminal, Run command `docker-compose up` to start the docker service. 
2. Open new terminal and Run command `npm test` to execute the scripts on docker container.

## Reports
- allure-reporter 
- spec-reporter
- video-reporter

## Generate and Open allure reporter along with Video-reports 
On the terminal, Run command `npm run allureReport` to open allure report. Report will be opened in the default browser.

## Clean the Reporting directory
On the terminal, Run command `npm run cleanup` to clean the "Reporting" directory. Execute this command before the execution of test.

# Key Features
- Mocha framework
- Chai Assetions
- Page Object design pattern
- Support for cross browser testing and Parallel execution
- Babel Setup
- Docker (Grid - Hub + Node)
- Dockerized Jenkins

# Sample Allure Reporter along with Execution Video

<img src = "https://user-images.githubusercontent.com/48508827/118312741-6f37d900-b50f-11eb-9b4c-8912f61cb46c.PNG" height = "500">


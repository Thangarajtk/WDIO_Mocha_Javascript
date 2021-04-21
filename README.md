# WebDriverIO_Mocha_Javascript
[WebdriverIO 6.10.11](http://webdriver.io/)

<img src = "https://miro.medium.com/max/2488/1*2ntKtVBowGdACso6Gcmy1A.jpeg" height = "400">

WebdriverIO is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and flakiness test suite.

This is a sample WebdriverIO (v6) with Mocha framework project to automate web applications using Javascript. This framework was designed with Page Object Pattern.

## Pre-requisites
1. Install [NodeJS](https://nodejs.org/en/download/).
2. Download Visual Studio Code [IDE](https://code.visualstudio.com/download) based on the OS.

## Installation
1. Clone the project from GitHub. 
2. Open `Terminal` from the project root directory `WDIO_Mocha_Javascript`  on the VS code.
3. On the terminal, Run command `npm install` to install all the dependencies present in the package.json file.
4. On the terminal, Run command `npm run test` to execute the script.

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
- Page Object Model design pattern
- Support for cross browser testing
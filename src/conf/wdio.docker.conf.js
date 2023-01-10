import { config as sharedConfig } from './wdio.conf';

exports.config = {
    ...sharedConfig,
    ...{
        hostname: 'localhost',
        port: 4444,
        path: '/',
        maxInstances: 5,
        services: ['docker'],
        capabilities: [{
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: [
                    '--no-sandbox',
                    '--disable-infobars',
                    '--disable-gpu',
                    // '--headless',
                    '--window-size=1440,735'
                ],
            }
        }],
    }
}
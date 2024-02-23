import { config as sharedConfig } from './wdio.conf.js';

export const config = {
    ...sharedConfig,
    ...{
        hostname: 'localhost',
        port: 4444,
        path: '/',
        maxInstances: 5,
        capabilities: [{
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: [
                    '--disable-web-security', 
                    '--disable-dev-shm-usage', 
                    '--no-sandbox', 
                    '--window-size=1920,1080'
                ],
            }
        }],
        services: ['docker']
    }
}
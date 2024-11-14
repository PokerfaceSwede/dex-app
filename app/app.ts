import { Application } from '@nativescript/core';

global.console.error = (...args) => {
    args.forEach(arg => {
        if (arg instanceof Error) {
            console.log('Error:', arg.message);
            console.log('Stack:', arg.stack);
        } else {
            console.log('Error:', arg);
        }
    });
};

console.log('Starting application initialization...');

Application.run({ moduleName: 'app-root' })
    .catch(error => {
        console.error('Failed to start application:', error);
    });
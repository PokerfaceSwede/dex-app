import { EventData, Frame, NavigatedData, Page } from '@nativescript/core';

export function navigatingTo(args: NavigatedData) {
    console.log('Main page navigating to...');
    try {
        const page = <Page>args.object;
        page.bindingContext = new MainViewModel();
        console.log('Main page binding context set');
    } catch (error) {
        console.error('Error in navigatingTo:', error);
    }
}

class MainViewModel {
    onViewPokedex() {
        console.log('Attempting to navigate to Pokedex...');
        try {
            const frame = Frame.topmost();
            if (!frame) {
                console.error('No frame found!');
                return;
            }
            
            frame.navigate({
                moduleName: 'views/pokedex-page',
                clearHistory: false,
                transition: {
                    name: 'slide'
                }
            });
        } catch (error) {
            console.error('Navigation error:', error);
        }
    }
}
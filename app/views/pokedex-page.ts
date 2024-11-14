import { NavigatedData, Page } from '@nativescript/core';
import { PokedexViewModel } from '../viewmodels/pokedex-view-model';

export function navigatingTo(args: NavigatedData) {
    console.log('Pokedex page navigating to...');
    const page = <Page>args.object;
    if (!page.bindingContext) {
        console.log('Creating new PokedexViewModel...');
        page.bindingContext = new PokedexViewModel();
    }
}
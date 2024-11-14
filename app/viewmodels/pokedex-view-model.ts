import { Observable } from '@nativescript/core';
import { Pokemon } from '../models/pokemon.model';
import { DatabaseService } from '../services/database.service';
import { PokemonService } from '../services/pokemon.service';

export class PokedexViewModel extends Observable {
    private _pokemon: Pokemon[] = [];
    private _caughtCount: number = 0;
    private _seenCount: number = 0;
    private database: DatabaseService;
    private pokemonService: PokemonService;

    constructor() {
        super();
        console.log('Initializing PokedexViewModel...');
        this.database = new DatabaseService();
        this.pokemonService = new PokemonService();
        this.loadPokemon();
    }

    get pokemon(): Pokemon[] {
        return this._pokemon;
    }

    get caughtCount(): number {
        return this._caughtCount;
    }

    get seenCount(): number {
        return this._seenCount;
    }

    private loadPokemon() {
        console.log('Loading Pokemon data...');
        this._pokemon = this.pokemonService.getPokemon();
        this._caughtCount = this._pokemon.filter(p => p.variants.some(v => v.caught)).length;
        this._seenCount = this._pokemon.length;

        console.log(`Loaded ${this._pokemon.length} Pokemon`);
        this.notifyPropertyChange('pokemon', this._pokemon);
        this.notifyPropertyChange('caughtCount', this._caughtCount);
        this.notifyPropertyChange('seenCount', this._seenCount);
    }
}
import { Observable } from '@nativescript/core';
import { Pokemon } from '../models/pokemon.model';

export class PokemonService {
    getPokemon(): Pokemon[] {
        return [
            {
                id: 1,
                name: "Bulbasaur",
                imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                variants: [{
                    id: 1,
                    type: 'normal',
                    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                    caught: false
                }]
            },
            {
                id: 4,
                name: "Charmander",
                imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                variants: [{
                    id: 4,
                    type: 'normal',
                    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                    caught: false
                }]
            },
            {
                id: 7,
                name: "Squirtle",
                imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
                variants: [{
                    id: 7,
                    type: 'normal',
                    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
                    caught: false
                }]
            }
        ];
    }
}
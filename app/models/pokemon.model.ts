export interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
    variants: PokemonVariant[];
}

export interface PokemonVariant {
    id: number;
    type: 'normal' | 'shiny';
    imageUrl: string;
    caught: boolean;
}
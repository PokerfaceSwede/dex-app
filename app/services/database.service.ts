import { knownFolders, path } from '@nativescript/core';
const sqlite = require('sqlite-sync');

export class DatabaseService {
    private db: any;

    constructor() {
        const dbPath = path.join(knownFolders.documents().path, "pokedex.db");
        this.db = sqlite.connect(dbPath);
        this.initializeDatabase();
    }

    private initializeDatabase() {
        this.db.run(`
            CREATE TABLE IF NOT EXISTS trainers (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE,
                caught_pokemon TEXT,
                friends TEXT,
                pending_friends TEXT
            )
        `);
    }

    addTrainer(username: string): number {
        const result = this.db.run(
            'INSERT INTO trainers (username, caught_pokemon, friends, pending_friends) VALUES (?, ?, ?, ?)',
            [username, '[]', '[]', '[]']
        );
        return result.lastID;
    }

    getTrainer(username: string) {
        return this.db.get('SELECT * FROM trainers WHERE username = ?', [username]);
    }

    updateCaughtPokemon(trainerId: number, pokemonId: number) {
        const trainer = this.db.get('SELECT caught_pokemon FROM trainers WHERE id = ?', [trainerId]);
        const caught = JSON.parse(trainer.caught_pokemon);
        caught.push(pokemonId);
        this.db.run(
            'UPDATE trainers SET caught_pokemon = ? WHERE id = ?',
            [JSON.stringify(caught), trainerId]
        );
    }
}
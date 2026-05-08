export class PlayerHand {
    // The $state rune works inside external .svelte.ts files too!
    tiles = $state<string[]>([]);

    constructor(initialTiles: string[] = []) {
        this.tiles = initialTiles;
    }

    draw(tile: string) {
        this.tiles.push(tile);
        this.sortHand();
    }

    discard(index: number): string {
        return this.tiles.splice(index, 1)[0];
    }

    sortHand() {
        // Example: automatically sort tiles alphabetically
        this.tiles.sort();
    }
}

// Export a single instance if you only have one player
export const myHand = new PlayerHand(["DR", "B5"]);
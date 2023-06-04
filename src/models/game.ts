export class Game {
    public players: string[] = [];
    public playerImage: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    public pickCardAnimation = false;
    public currentCard: string = '';


    constructor(){
        for (let i = 1; i < 14; i++) {
            this.stack.push('clubs_'+ i);
            this.stack.push('diamonds_'+ i);
            this.stack.push('hearts_'+ i);
            this.stack.push('spade_'+ i);
        }
        this.shuffleStack();
    }
    

    public convertIntoJSON(){
        return {
            players: this.players,
            playerImage: this.playerImage,
            stack: this.stack,
            playedCards: this.playedCards,
            currentPlayer: this.currentPlayer,
            pickCardAnimation: this.pickCardAnimation,
            currentCard: this.currentCard
        }
    }


    private shuffleStack(): void {
        function shuffleArray<T>(array: T[]): T[] {
            const shuffledArray = [...array];
            for (let i = shuffledArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
            }
            return shuffledArray;
        }
        this.stack = shuffleArray(this.stack);
    }
}


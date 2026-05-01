// export type GameTypeAndDifficulty = {
//   gameType: string;
//   difficulty: string;
// }

// export type NewWord = {
//     word: string; // Property
//     category: string[];
//     gameTypeAndDifficulty: GameTypeAndDifficulty[];
// }

export class GameTypeAndDifficulty {
  gameType: string;
  difficulty: string;

  constructor(){
    this.gameType = ""
    this.difficulty = ""
  }
}

export class Word {
    word: string;
    category: string[];
    gameTypeAndDifficulty: GameTypeAndDifficulty[];

    constructor() {
        this.word = ""
        this.category = []
        this.gameTypeAndDifficulty = []
    }
}
import { setInterval } from 'core-js';
import GameBoard from './GameBoard';
import Target from './Target';

export default class Game {
    constructor(container) {
        this.container = container;
        this.board = new GameBoard();
        this.target = new Target();
    }

    start() {
        this.board.insertToDOM(this.container);
        setInterval(() => {
            this.target.drawTarget(this.board.cells[this.generateTargetPosition()]);
        }, 2000);
    }

    generateTargetPosition() {
        function getRandomIntInclusive(min, max) {
            const start = Math.ceil(min);
            const end = Math.floor(max);
            return Math.floor(Math.random() * (end - start)) + start;
        }
        const indx = getRandomIntInclusive(0, this.board.boardSize);
        return indx;
    }
}

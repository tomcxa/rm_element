/* eslint-disable no-plusplus */
export default class GameBoard {
    constructor() {
        this.boardSize = 4;
        this.boardEl = document.createElement('div');
        this.cells = [];

        this.create();
    }

    create() {
        this.boardEl = document.createElement('div');
        this.boardEl.classList.add('board');
        for (let i = 0; i < this.boardSize; i++) {
            const cell = document.createElement('div');
            cell.classList.add('board-cell');
            this.boardEl.appendChild(cell);
            this.cells.push(cell);
        }
    }

    insertToDOM(parentEl) {
        if (!parentEl) {
            throw new Error('Елемент не задан');
        }
        parentEl.appendChild(this.boardEl);
    }
}

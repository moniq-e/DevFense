import { Board } from "./Board.js"

export class Dev {
    app
    /**
    * @param {Board} board 
    */
    constructor(board) {
        this.app = board.app
    }
    /**
     * @returns {{x: number, y: number}}
     */
    getMousePos() {
        let pos = this.app.renderer.plugins.interaction.mouse.global
        console.log(`X: ${pos.x}, Y: ${pos.y}`)
        return pos
    }
}
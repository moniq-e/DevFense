import { Board } from "./Board.js"

export class Dev {
    app
    /**
    * @param {Board} board 
    */
    constructor(board) {
        this.app = board.app
    }
    getScreenPosition() {
        const getMousePosition = () => {
            return this.app.renderer.plugins.interaction.mouse.global;
        }

        let mousePos = getMousePosition()
        console.log(`X: ${mousePos.x} & Y: ${mousePos.y}`)
    }
}
import { Board } from "./Board";

export class Dev {
    app: any;
    constructor(board: Board) {
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
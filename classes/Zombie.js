import { Entity } from "./Entity.js"
import { Util} from "./Util.js"

export class Zombie extends Entity {
    /**
     * @param {import('./Board.js').Board} board 
     */
    constructor(board) {
        super('zombie', 15, board)
        this.sprite = super.createSprite('0xffffff', 30, 30)
        this.ai()
    }
    ai() {
        this.app.ticker.add(async () => {
            super.followPlayer({ x: (this.app.screen.width) / 2, y: (this.app.screen.height) / 2 }, this.sprite, 1)
        })
    }
}
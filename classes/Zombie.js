import { Board } from "./Board.js"
import { Entity } from "./Entity.js"

export class Zombie extends Entity {
    /**
     * @param {Board} board 
     */
    constructor(board) {
        super('zombie', 15, 1, board)
        this.sprite = super.createSprite('0xffffff', 30, 30)
        this.ai()
    }
    ai() {
        this.app.ticker.add(() => {
            super.followPlayer(this.board.player.sprite, this.sprite, 1)
            super.hurtPlayer()
        })
    }
}
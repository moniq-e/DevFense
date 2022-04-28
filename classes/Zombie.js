import { Board } from "./Board.js"
import { Entity } from "./Entity.js"
import { Util } from "./Util.js"

export class Zombie extends Entity {
    /**
     * @param {Board} board 
     */
    constructor(board) {
        super('zombie', 15, 0.1, board)
        this.sprite = super.createSprite('0xffffff', 30, 30)
        this.ai()
    }
    ai() {
        this.app.ticker.add(() => {
            super.followPlayer(this.board.player.sprite, this.sprite, 1)
            this.hurtPlayer()
        })
    }
    hurtPlayer() {
        if (!Util.collides(this.board.player.sprite, this.sprite)) return
        if (this.board.player.isDead()) return
        this.board.player.life -= this.damage
    }
}

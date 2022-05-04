import { Board } from "./Board.js"
import { Entity } from "./Entity.js"
import { Util } from "./Util.js"

export class Zombie extends Entity {
    interval
    /**
     * @param {Board} board 
     */
    constructor(board) {
        super('zombie', 15, 5, 4000, Util.random(0.9, 1.3).float, board)
        this.sprite = super.createSprite('0xffffff', 50, 50)
        this.ai()
    }
    ai() {
        this.app.ticker.add(() => {
            super.entityMove(this.board.player.sprite, this.sprite, this.speed)
            this.hurtPlayer()
        })
    }
    hurtPlayer() {
        if (!Util.collides(this.board.player.sprite, this.sprite) || this.board.player.dead) {
            this.interval ? clearInterval(this.interval) : this.interval = null
            return
        }

        if (this.interval == null) this.attack()
        if (!this.interval) {
            this.interval = setInterval(() => {
                this.attack()
            }, this.attackSpeed)
        }
    }
}
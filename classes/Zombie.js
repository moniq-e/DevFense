import { Board } from "./Board.js"
import { Entity } from "./Entity.js"
import { Util } from "./Util.js"

export class Zombie extends Entity {
    /**
     * @param {Board} board 
     */
    constructor(board) {
        super('zombie', 15, 0.1, 1, board)
        this.sprite = super.createSprite('0xffffff', 30, 30)
        this.ai()
    }
    ai() {
        this.app.ticker.add(() => {
            if (this.board.player.isDead()) {
                this.board.player.sprite.position.set(this.board.player.sprite.x, this.board.player.sprite.y - 1000)
                super.followPlayer(this.board.player.sprite, this.sprite, this.speed + Util.random(0, 1).float)
                return
            }
            super.followPlayer(this.board.player.sprite, this.sprite, this.speed + Util.random(0, 1).float)
            this.hurtPlayer()
        })
    }
    hurtPlayer() {
        if (!Util.collides(this.board.player.sprite, this.sprite)) return
        if (this.board.player.isDead()) return
        this.board.player.life -= this.damage
    }
}

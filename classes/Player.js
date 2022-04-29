import { Board } from "./Board.js"
export class Player {
    type
    app
    board
    sprite
    maxLife
    life
    dead
    /**
     * @param {Board} board 
     */
    constructor(board) {
        this.type = 'player'
        this.app = board.app
        this.board = board
        this.sprite = this.createSprite()
        this.maxLife = 100
        this.life = this.maxLife
        this.dead = false
        this.tick()
    }
    /**
     * @returns sprite
     */
    createSprite() {
        let sprite = PIXI.Sprite.from('../images/player.png')
        sprite.height = 128
        sprite.width = 128

        sprite.position.set((this.app.screen.width / 2) - sprite.width / 2, (this.app.screen.height / 2) - sprite.height / 2)
        
        this.app.stage.addChild(sprite)
        return sprite
    }
    isDead() {
        if (this.life <= 0) return true
    }
    tick() {
        this.app.ticker.add(() => {
            if (this.isDead()) {
                this.board.player.sprite.position.set(this.board.player.sprite.x, this.board.player.sprite.y - 1000)
                this.dead = true
            }
        })
    }
}
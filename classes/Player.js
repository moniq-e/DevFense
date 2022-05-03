import { Board } from "./Board.js"
import { Util } from "./Util.js"
export class Player {
    stage
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
        this.stage
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
        let playerTextures = [
            PIXI.Texture.from('./images/player.png'),
            // textura do red_player ficou com um problema, vou refazer tudo depois
            PIXI.Texture.from('./images/red_player.png')
        ]

        let sprite = new PIXI.Sprite.from('images/player.png')

        sprite.height = 256
        sprite.width = 256

        sprite.position.set((this.app.screen.width / 2) - sprite.width / 2, (this.app.screen.height / 2) - sprite.height / 2)

        this.app.stage.addChild(sprite)
        
        addEventListener('keydown', () => {
            sprite.texture = playerTextures[Util.random(0, playerTextures.length).int]
        })

        return sprite
    }
    isDead() {
        if (this.life <= 0) return true
    }
    tick() {
        this.app.ticker.add(() => {
            if (this.isDead()) {
                this.sprite.position.set(this.sprite.x, this.sprite.y - 1000)
                this.dead = true
            }
        })
    }
}

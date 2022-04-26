import { Board } from "./Board.js"

export class Player {
    type
    app
    sprite
    maxLife
    life
    /**
     * @param {Board} board 
     */
    constructor(board) {
        this.type = 'player'
        this.app = board.app
        this.sprite = this.createSprite()
        this.maxLife = 30
        this.life = this.maxLife
    }
    /**
     * @returns sprite
     */
    createSprite() {
        let sprite = new PIXI.Sprite(PIXI.Texture.WHITE)
        sprite.tint = '0xfff000'
        sprite.height = 30
        sprite.width = 30

        sprite.position.set((this.app.screen.width / 2), (this.app.screen.height / 2))
        
        this.app.stage.addChild(sprite)
        return sprite
    }
}
import { Board } from "./Board"

export class Player {
    type: string
    app: any
    sprite: any
    maxLife: number
    life: number
    constructor(board: Board) {
        this.type = 'player'
        this.app = board.app
        this.sprite = this.createSprite()
        this.maxLife = 30
        this.life = this.maxLife
    }
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
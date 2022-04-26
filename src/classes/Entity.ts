import { Board } from "./Board"
import { Util } from "./Util"

export class Entity {
    type: String
    maxLife: number
    damage: number
    board: Board
    app: any
    life: number
    id: number
    constructor(type: String, maxLife: number, damage: number, board: Board) {
        this.type = type
        this.maxLife = maxLife
        this.damage = damage
        this.board = board
        this.app = board.app
        this.life = maxLife
        this.id = this.board.entities.length
    }
    createSprite(tint: String, width: number, height: number) {
        let sprite = new PIXI.Sprite(PIXI.Texture.WHITE)
        sprite.tint = tint
        sprite.height = height
        sprite.width = width

        let angle = Util.random(0, 6.3).float
        let randomDistance = Util.random(0, 100).int
        let x = ((400 + randomDistance) * Math.sin(angle))
        let y = ((400 + randomDistance) * Math.cos(angle))

        sprite.position.set((this.app.screen.width) / 2 + x, (this.app.screen.height) / 2 + y)
        
        this.app.stage.addChild(sprite)
        return sprite
    }
    followPlayer(player: any, entity: any, speed: number) {
        if (Util.collides(this.board.player.sprite, this.sprite)) return true

        let disObj = Util.distance(entity.x, entity.y, player.x, player.y)

        let pos = speed / disObj

        let x = entity.x - pos * (entity.x - player.x)

        let y = entity.y - pos * (entity.y - player.y)

        entity.position.set(x, y)
    }
    sprite(sprite: any, sprite: any) {
        throw new Error("Method not implemented.")
    }
}
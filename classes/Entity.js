import { Util } from "./Util.js"

export class Entity {
    /**
     * @param {import('./Board.js').Board} board 
     * @param {String} type
     * @param {Number} maxLife
     */
    constructor(type, maxLife, damage, board) {
        this.type = type
        this.maxLife = maxLife
        this.damage = damage
        this.board = board
        this.app = board.app
        this.life = maxLife
        this.id = this.board.entities.length
    }
    createSprite(tint, width, height) {
        let sprite = new PIXI.Sprite(PIXI.Texture.WHITE)
        sprite.tint = tint
        sprite.height = height
        sprite.width = width

        let angle = Util.random(0, 6.3).float
        let randomDistance = Util.random(0, 100).int
        let x = ((200 + randomDistance) * Math.sin(angle))
        let y = ((200 + randomDistance) * Math.cos(angle))

        sprite.position.set((this.app.screen.width) / 2 + x, (this.app.screen.height) / 2 + y)
        
        this.app.stage.addChild(sprite)
        return sprite
    }
    followPlayer(player, entity, speed) {
        if (Util.collides(this.board.player.sprite, this.sprite)) return true

        let disObj = Util.distance(entity.x, entity.y, player.x, player.y)

        let pos = speed / disObj

        let x = entity.x - pos * (entity.x - player.x)

        let y = entity.y - pos * (entity.y - player.y)

        entity.position.set(x, y)
    }
}
import { Board } from "./Board.js"
import { Util } from "./Util.js"

export class Entity {
    type
    maxLife
    damage
    board
    app
    life
    id
    sprite
    /**
     * @param {string} type 
     * @param {number} maxLife 
     * @param {number} damage 
     * @param {Board} board 
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
    /**
     * @param {string} tint 
     * @param {number} width 
     * @param {number} height 
     * @returns sprite
     */
    createSprite(tint, width, height) {
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
    /**
     * @param {any} player sprite
     * @param {any} entity sprite
     * @param {number} speed 
     * @returns {void}
     */
    followPlayer(player, entity, speed) {
        if (Util.collides(this.board.player.sprite, this.sprite)) return true

        let disObj = Util.distance(entity.x, entity.y, player.x, player.y)

        let pos = speed / disObj

        let x = entity.x - pos * (entity.x - player.x)

        let y = entity.y - pos * (entity.y - player.y)

        entity.position.set(x, y)
    }

    hurtPlayer() {
        if (!Util.collides(this.board.player.sprite, this.sprite)) return
        if (this.board.player.life <= 0) return
        this.board.player.life -= 0.1
    }
}
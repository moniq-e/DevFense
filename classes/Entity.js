import { Board } from "./Board.js"
import { Util } from "./Util.js"

export class Entity {
    type
    maxLife
    damage
    attackSpeed
    board
    app
    life
    id
    sprite
    /**
     * @param {string} type 
     * @param {number} maxLife 
     * @param {number} damage 
     * @param {number} attackSpeed ms
     * @param {Board} board 
     */
    constructor(type, maxLife, damage, attackSpeed, speed, board) {
        this.type = type
        this.maxLife = maxLife
        this.damage = damage
        this.attackSpeed = attackSpeed
        this.board = board
        this.app = board.app
        this.life = maxLife
        this.speed = speed
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

        let positions = [
            0,
            60,
            120,
            180,
            240,
            300,
            360,
            420,
            480
        ]
        sprite.position.set((this.app.screen.width) / 2  + 300, positions[Util.random(0, 9).int] + ((this.app.screen.height / 9) - sprite.height) / 2)
        this.app.stage.addChild(sprite)
        return sprite
    }
    /**
     * @param {any} player sprite
     * @param {any} entity sprite
     * @param {number} speed 
     * @returns {void}
     */
    entityMove(player, entity, speed) {
        let currentCloser = {
            sprite: undefined,
            distance: 10000,
            x: undefined,
            y: undefined
        }
        for (let i = 0; i < this.board.entities.length; i++) {
            if (!this.board.entities[i].sprite == entity) {
                if (currentCloser.distance <= Util.distance(entity, this.board.entities[i].sprite)) {
                    console.log(`é ${i}`)
                    currentCloser.distance = Util.distance(entity, this.board.entities[i].sprite)
                    currentCloser.sprite = this.board.entities[i].sprite
                    currentCloser.x = currentCloser.x
                    currentCloser.y = currentCloser.y
                }
            }
        }
        console.log(currentCloser.sprite)
        if (Util.collides(currentCloser.sprite, entity) && entity.x + entity.height / 2 > currentCloser.sprite.x + currentCloser.sprite.height / 2) return

        /*let disObj = Util.distance(entity.x, entity.y, player.x, player.y)

        let pos = speed / disObj

        let x = entity.x - pos * (entity.x - player.x)

        let y = entity.y - pos * (entity.y - player.y)*/


        entity.position.set(entity.x - 1, entity.y)
    }
    attack() {
        this.board.player.life -= this.damage
        this.board.eventHandler.playerHurt(this)
    }
}
// Tenho que dormir, arruma pra mim aí
import { Board } from "./Board.js"
import { Util } from "./Util.js"

export class Tower {
    type
    maxLife
    health
    id
    level
    app
    board
    sprite

    constructor(board) {
        this.type = type
        this.maxLife = maxLife
        this.health = health
        this.id = id
        this.level = level
        this.app = app
        this.board = board
        this.sprite = sprite
    }

    createTower() {
        let sprite = new PIXI.Sprite(PIXI.Texture.WHITE)
        // Pegar a cell que o mouse está passando
        let mouse = Util.getMousePos()
        //sprite.position.set(cellPos)
        this.app.stage.addChild(sprite)
        return sprite
    }
}
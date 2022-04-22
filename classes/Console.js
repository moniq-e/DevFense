export class Console {
    constructor (app) {
        this.app = app
    }

    console(text) {
        let square = new PIXI.Sprite(PIXI.Texture.WHITE)

        square.position.set((this.app.screen.width) / 2, (this.app.screen.height) / 2)
        square.width = 100
        square.height = 100
        square.tint = '0xFFFFFF'

        this.app.stage.addChild(square);
    }
}
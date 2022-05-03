export class Cell {
    x 
    y
    graphics
    /**
     * @param {any} app
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y, app) {
        this.x = x
        this.y = y

        this.graphics = new PIXI.Graphics()
        this.graphics.lineStyle(2, 0xFEEB77, 1)
        //graphics.beginFill(0x650A5A)
        this.graphics.drawRect(x, y, 60, 60)
        //graphics.endFill()
        app.stage.addChild(this.graphics)
    }
}
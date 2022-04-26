import { Board } from "./Board.js"

export class Canvas {
    app
    /**
    * @param {Board} board 
    */
    constructor(board) {
        this.app = board.app
    }
    /**
     * @param {string?} color 
     * @param {string?} colorHover 
     * @param {string?} texture 
     * @param {string?} hover 
     * @param {number} width 
     * @param {number} height 
     * @param {number?} x 
     * @param {number?} y 
     * @param {Function} onClickCode 
     * @returns {void}
     */
    createButton(color=null, colorHover=null, texture=null, hover=null, width, height, x=null, y=null, onClickCode) {
        // Console Warns
        if (color && texture) {
            console.error('You can not provide a color and a texture for a Button!')
            return
        }
        if (hover && !texture) {
            console.error('You can not provide a hover texture, and not provide a button texture!')
            return
        }

        if (!width) {
            console.error('You need to provite Width!')
            return
        }

        if (!height) {
            console.error('You need to provite Height!')
            return
        }
        // Real code
        let button

        if (color) {
            button = new PIXI.Sprite(PIXI.Texture.WHITE)
            button.tint = color
        }

        if (texture) {
            button = PIXI.Sprite.from(texture)
        }

        if (!x && !y) {
            button.position.set((this.app.screen.width) / 2, (this.app.screen.height) / 2)
        } else {
            button.position.set(x, y)
        }

        button.width = width
        button.height = height
        
        button.interactive = true
        button.buttonMode = true 

        this.app.stage.addChild(button);

        button.on('pointerdown', onClickCode)
        button.on('pointerover', buttonOver)
        button.on('pointerout', buttonOut)
        
        function buttonOver() {
            if (hover) {
                this.texture = hover
            }
            if (colorHover) {
                this.tint = colorHover
            }
        }
        
        function buttonOut() {
            if (texture) {
                this.texture = texture
            }
            if (color) {
                this.tint = color
            }
        }
    }
}
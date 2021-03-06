import { Player } from './Player.js'
import { Zombie } from './Zombie.js'
import { CodeBlock } from './CodeBlock.js'
import { Canvas } from './Canvas.js'
import { Dev } from './Dev.js'
import { EventHandler } from './EventHandler.js'

export class Board {
    app
    player
    codeBlock
    canvas
    dev
    entities
    constructor() {
        this.app = new PIXI.Application({
            width: 780,
            height: 540,
            backgroundColor: 0x333334,
            antialias: true,
            resolution: 1
        })
        this.player = new Player(this)
        this.canvas = new Canvas(this)
        this.codeBlock = new CodeBlock(this)
        this.dev = new Dev(this)
        this.eventHandler = new EventHandler(this)
        this.entities = []
        this.init()
    }
    init() {
        //this.canvas.createButton('0xFFFFFF', '0x000000', undefined, undefined, 100, 100, undefined, undefined, () => { console.log('ebaaaa') })
        document.body.appendChild(this.app.view)

        document.addEventListener('keydown', e => {
            if (e.key == 'p') {
                this.dev.getMousePos()
            } else {
                this.entities.push(new Zombie(this))
            }
        })
    }
}
new Board()
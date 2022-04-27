import { Player } from './Player.js'
import { Zombie } from './Zombie.js'
import { CodeBlock } from './CodeBlock.js'
import { Canvas } from './Canvas.js'
import { Dev } from './Dev.js'

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
            height: 550,
            backgroundColor: 0x333334,
            antialias: true,
            resolution: 1
        })
        this.player = new Player(this)
        this.codeBlock = new CodeBlock(this)
        this.canvas = new Canvas(this)
        this.dev = new Dev(this)
        this.entities = []
        this.init()
    }
    init() {
        //this.canvas.createButton('0xFFFFFF', '0x000000', undefined, undefined, 100, 100, undefined, undefined, () => { console.log('ebaaaa') })
        document.body.appendChild(this.app.view)
        this.player.playerTick()
        
        addEventListener('keydown', (event) => {
            if (event.key == 'p') {
                this.dev.getScreenPosition()
            } else {
                this.entities.push(new Zombie(this))            
            }
        })
    }
}
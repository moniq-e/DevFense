import { Player } from './Player.js'
import { Zombie } from './Zombie.js'
import { CodeBlock } from './CodeBlock.js'
import { Canvas } from './Canvas.js'

export class Board {
    constructor(app) {
        this.app = app
        this.player = new Player(this)
        this.codeBlock = new CodeBlock(this)
        this.canvas = new Canvas(this)
        this.entities = []
        this.init()
    }
    init() {
        this.canvas.createButton('0xFFFFFF', '0x000000', undefined, undefined, 100, 100, undefined, undefined, () => { console.log('ebaaaa') })

        addEventListener('keydown', () => {
            this.entities.push(new Zombie(this))
        })
    }
}
import { Player } from './Player'
import { Zombie } from './Zombie'
import { CodeBlock } from './CodeBlock'
import { Canvas } from './Canvas'
import { Dev } from './Dev'
import { Entity } from './Entity'

export class Board {
    app: any
    player: Player
    codeBlock: CodeBlock
    canvas: Canvas
    dev: Dev
    entities: Entity[]
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

        addEventListener('keydown', (event) => {
            if (event.key == 'p') {
                this.dev.getScreenPosition()
            } else {
                this.entities.push(new Zombie(this))            
            }
        })
    }
}
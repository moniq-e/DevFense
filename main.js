import { CodeBlock } from './classes/CodeBlock.js'
import { Util } from './classes/Util.js'
import { Canvas } from './classes/Canvas.js'
import { Zombie } from './classes/Zombie.js'

export const app = new PIXI.Application({
    width: 780,
    height: 550,
    backgroundColor: 0x333334,
    antialias: true,
    resolution: 1
})

document.body.appendChild(app.view)

const codeBlock = new CodeBlock(app, Util)

let canvasClass = new Canvas(app, Util)
//canvasClass.createButton({color: '0xFFFFFF',colorHover: '0x000000',width: 100,height: 100, onClickCode: runClick()})
canvasClass.createButton('0xFFFFFF', '0x000000', undefined, undefined, 100, 100, undefined, undefined, () => { console.log('ebaaaa') })

document.addEventListener('keydown', () => {
    let zombie = new Zombie(app)
})

let player; //criar uma classe
import { codeBlock } from './classes/CodeBlock.js'
import { Util } from './classes/Util.js'
import { canvas } from './classes/Canvas.js'
import { Entity } from './classes/Entity.js'

export const app = new PIXI.Application({
    width: 780,
    height: 550,
    backgroundColor: 0x333334,
    antialias: true,
    resolution: 1
})

document.body.appendChild(app.view)

let codeBlockClass = new codeBlock(app, Util)
codeBlockClass.createCodeBlock()

let canvasClass = new canvas(app, Util)
//canvasClass.createButton({color: '0xFFFFFF',colorHover: '0x000000',width: 100,height: 100, onClickCode: runClick()})
canvasClass.createButton('0xFFFFFF','0x000000',undefined,undefined,100,100,undefined,undefined,runClick)

function runClick() {
    console.log('ebaaaa')
}

let EntityClass = new Entity(app, Util)
EntityClass.randomZombies(200)
document.addEventListener('keydown', (event) => {
    EntityClass.randomZombies(200)
})
let player = {
    x: (app.screen.width) / 2,
    y: (app.screen.height) / 2
}

app.ticker.add(() => {
    let zombie = EntityClass.randomZombies(200).zombie
    let follow = Util.followPlayer(player, zombie, 10)
    zombie.position.set(follow.x, follow.y)
})
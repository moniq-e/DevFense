import { codeBlock } from './classes/CodeBlock.js'
import { Util } from './classes/Util.js'
import { canvas } from './classes/Canvas.js'

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

document.addEventListener('keydown', (event) => {
})

app.ticker.add(() => {
    //console.console('oi')
})
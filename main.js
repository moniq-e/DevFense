import { codeBlock } from './classes/CodeBlock.js'
import { Util } from './classes/Util.js'

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

document.addEventListener('keydown', (event) => {
    //notConsole.console()
})

app.ticker.add(() => {
    //console.console('oi')
})
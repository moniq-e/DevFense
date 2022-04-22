import { Console } from './classes/Console.js'
import { Util } from './classes/Util.js'

export const app = new PIXI.Application({
    width: 1080,
    height: 480,
    backgroundColor: 0x333334,
    antialias: true,
    resolution: 1
})

document.body.appendChild(app.view)

let notConsole = new Console(app)
document.addEventListener('keydown', (event) => {
    console.log(Util.random(1, 10))
})
app.ticker.add(() => {
    //console.console('oi')
})


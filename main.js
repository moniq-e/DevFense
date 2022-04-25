import { Board } from './classes/Board.js'

export const app = new PIXI.Application({
    width: 780,
    height: 550,
    backgroundColor: 0x333334,
    antialias: true,
    resolution: 1
})

document.body.appendChild(app.view)

const board = new Board(app)
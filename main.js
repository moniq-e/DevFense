export const app = new PIXI.Application({
    width: 1080,
    height: 480,
    backgroundColor: 0x333334,
    antialias: true,
    resolution: 1
})

document.body.appendChild(app.view)
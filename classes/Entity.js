export class Entity {
    constructor(/*name, image, type, id*/app, Util) {
        /*this.name = name
        this.image = image
        this.type = type
        this.id = id*/
        this.app = app
        this.Util = Util
    }
    draw(ctx, x, y) {
    }

    createZombie() {
        let zombie = new PIXI.Sprite(PIXI.Texture.WHITE)
        zombie.tint = '0xffffff'
        zombie.height = 30
        zombie.width = 30
        return zombie
    }

    randomZombies(radio) {
        let zombie = this.createZombie()
        let angle = this.Util.random(0, 6.3)

        let x = (radio * Math.sin(angle))
        let y = (radio * Math.cos(angle))

        zombie.position.set((this.app.screen.width) / 2 + x, (this.app.screen.height) / 2 + y)

        this.app.stage.addChild(zombie)

        return {
            zombie: zombie
        }
    }
}
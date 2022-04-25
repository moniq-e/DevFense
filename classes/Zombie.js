import { Entity } from "./Entity.js"
import { Util } from "./Util.js"

export class Zombie extends Entity {
    constructor(app) {
        super('zombie', app)
        this.sprite = super.createSprite('0xffffff', 30, 30)
        this.ai()
    }
    ai() {
        this.app.ticker.add(async () => {
            //ta mt rapido, msm com sleep n adiantou kkkk
            await Util.sleep(100)
            super.followPlayer({ x: (this.app.screen.width) / 2, y: (this.app.screen.height) / 2 }, this.sprite, 10)
        })
    }
}
import { Entity } from "./Entity.js"

export class EventHandler {
    /**
     * @param {Entity} source
     */
    playerHurt(source) {
        document.dispatchEvent(new CustomEvent("player.hurt", {
            //cancelar não ta funcionando ainda pq o listener do codeblock é ligado dps do hardcoded
            cancelable: true,
            detail: {
                source: {
                    type: source.type,
                    id: source.id,
                    speed: source.speed,
                    damage: source.damage,
                    health: source.life,
                    sprite: source.sprite,
                    x: source.sprite.x,
                    y: source.sprite.y
                },
                player: {
                    health: source.board.player.life,
                    sprite: source.board.player.sprite,
                    x: source.board.player.sprite.x,
                    y: source.board.player.sprite.y
                }
            }
        }))
    }
}
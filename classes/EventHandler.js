import { Board } from "./Board.js"
export class EventHandler {
    stage
    board
    /**
     * @param {Board} board 
     */
    constructor(board) {
        this.stage = 0
        this.board = board
        this.app = board.app
    }
    // teste
    playerHurt(source, player) {
        document.dispatchEvent(new CustomEvent("player.hurt", {
            source: {
              type: source.type,
              id: source.id,
              speed: source.speed,
              health: source.life,
              entity: source.sprite,
              x: source.sprite.x,
              y: source.sprite.y
            },
            player: {
                health: player.life,
                entity: player.sprite,
                x: player.sprite.x,
                y: player.sprite.y
            }
        }))
    }
}

/*
document.addEventListener("player.hurt", function(event) {
    console.log("teste funcionou")
})*/
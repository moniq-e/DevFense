import { Board } from "./Board.js"

export class CodeBlock {
    app
    board
    editor
    /**
    * @param {Board} board 
    */
    constructor(board) {
        this.app = board.app
        this.board = board
        this.editor
        this.init()
    }
    init() {
        this.editor = monaco.editor.create(document.getElementById('container'), {
            theme: 'vs-dark',
            value: ['document.addEventListener("player.hurt", event => {\n    console.log("teste funcionou")\n})'].join('\n'),
            language: 'javascript',
            'semanticHighlighting.enabled': true
        })

        this.board.canvas.createButton('0xFFFFFF', '0x000000', undefined, undefined, 50, 50, 700, 470, () => { this.onSave() })
    }
    onSave() {
        let script = document.getElementById('playerCode')
        if (script) { script.remove() }
        let scriptElement = document.createElement('script')
        scriptElement.id = 'playerCode'
        scriptElement.textContent = this.editor.getValue()
        document.body.appendChild(scriptElement)
    }
}
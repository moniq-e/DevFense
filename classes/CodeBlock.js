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

        this.board.canvas.createButton('0xFFFFFF', '0x000000', undefined, undefined, 100, 100, 30, 30, () => { this.onRun() })
    }
    onRun() {
        let script = document.getElementById('playerCode')
        if (script) { script.remove() }
        const scriptElement = document.createElement('script')
        scriptElement.id = 'playerCode'
        scriptElement.className = 'code'
        scriptElement.textContent = this.editor.getValue()
        document.body.appendChild(scriptElement)
    }
}
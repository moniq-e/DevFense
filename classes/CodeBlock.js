export class codeBlock {
    constructor(app, Util) {
        this.app = app
        this.Util = Util
    }

    /*console(text) {
        let square = new PIXI.Sprite(PIXI.Texture.WHITE)

        square.position.set((this.app.screen.width) / 2 + this.Util.random(-500, 1000), (this.app.screen.height) / 2 + this.Util.random(-500, 1000))
        square.width = 10
        square.height = 10
        square.tint = '0xFFFFFF'

        this.app.stage.addChild(square);
    }*/

    createCodeBlock() {
        require.config({ paths: { vs: './node_modules/monaco-editor/min/vs' } });

        require(['vs/editor/editor.main'], function () {

            monaco.editor.defineTheme('myCustomTheme', {
                base: 'vs-dark',
                inherit: true,
                colors: {},
                rules: [
                    { token: 'comment', foreground: 'aaaaaa', fontStyle: 'italic' },
                    { token: 'keyword', foreground: 'ce63eb' },
                    { token: 'operator', foreground: '000000' },
                    { token: 'namespace', foreground: '66afce' },
                    { token: 'string', foreground: '99E77F' },

                    { token: 'type', foreground: '1db010' },
                    { token: 'struct', foreground: '0000ff' },
                    { token: 'class', foreground: '0000ff', fontStyle: 'bold' },
                    { token: 'interface', foreground: '007700', fontStyle: 'bold' },
                    { token: 'enum', foreground: '0077ff', fontStyle: 'bold' },
                    { token: 'typeParameter', foreground: '1db010' },
                    { token: 'function', foreground: '94763a' },

                    { token: 'member', foreground: '94763a' },
                    { token: 'macro', foreground: '615a60' },
                    { token: 'variable', foreground: '3e5bbf' },
                    { token: 'parameter', foreground: '3e5bbf' },
                    { token: 'property', foreground: '3e5bbf' },
                    { token: 'label', foreground: '615a60' },

                    { token: 'type.static', fontStyle: 'bold' },
                    { token: 'class.static', foreground: 'ff0000', fontStyle: 'bold' }
                ]
            });

            var editor = monaco.editor.create(document.getElementById('container'), {
                //theme: 'vs-dark',
                value: [''].join('\n'),
                language: 'javascript',
                theme: 'myCustomTheme',
                'semanticHighlighting.enabled': true
            });
            eval(editor.getValue())
        });
    }
/*
    runButton(editor) {
        if (roudo botão) {
            eval(editor.getValue())
        }
    }*/
}

/*const scriptElement = document.createElement('script');
scriptElement.textContent = 'attack()';
document.querySelector('body').appendChild(scriptElement);*/
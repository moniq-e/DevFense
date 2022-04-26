export class CodeBlock {
    app;
    constructor(board) {
        this.app = board.app;
        this.init();
    }
    init() {
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
            const editor = monaco.editor.create(document.getElementById('container'), {
                //theme: 'vs-dark',
                value: [''].join('\n'),
                language: 'javascript',
                theme: 'myCustomTheme',
                'semanticHighlighting.enabled': true
            });
        });
    }
    onRun() {
        //eval(this.editor.getValue())
    }
}

require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' } });


editor_buff = {}


document.addEventListener("DOMContentLoaded", function () {
    require(['vs/editor/editor.main'], function () {
        monaco.editor.setTheme('vs-dark');
        editor = monaco.editor.create(document.getElementById('obj'), {
            value: JSON.stringify({}, null, 4),
            language: 'json',
            automaticLayout: true,
        });
        editor.updateOptions({ readOnly: false});

        document.getElementById('get_btn').onclick = () => setJsonContent();
        document.getElementById('read_btn').onclick = () => readJsonContent();
    });
});

function setJsonContent() {
    editor.setValue(JSON.stringify(editor_buff, null, 4));
}

function readJsonContent(){
    editor_buff = JSON.parse(editor.getValue());
}
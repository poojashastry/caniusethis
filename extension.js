// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "caniusethis" is now active!');
    vscode.window.showInformationMessage('Extension active!');
    let editor = vscode.window.activeTextEditor;
    if(!editor) {
        return;
    }
   // let document = editor.document;
    let disposable = vscode.commands.registerCommand("extension.caniuse", () => {
        vscode.window.showInformationMessage('Now its really active!');
    });
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
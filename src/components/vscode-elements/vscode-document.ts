import * as vscode from 'vscode';

export const GetVScodeFileContent = () => {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    return {
      code: editor.document.getText(),
      language: editor.document.languageId
    };
  }
  throw Error('You can\'t make a snippet from nothing!');
};
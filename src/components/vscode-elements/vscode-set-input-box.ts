import * as vscode from 'vscode';

export const VsCodeSetInputBox = (prompt: string, value: string = "") => vscode.window.showInputBox({ prompt, value });
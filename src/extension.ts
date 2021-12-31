import * as vscode from "vscode";
import { VsCodeSetInputBox } from "./GeneralUtilities";
import {
	GetNotionSoIntegrationsKey,
	SetNotionSoIntegrationsKey
} from "./NotionUtilities";

export function activate(context: vscode.ExtensionContext) {
	let disposables: vscode.Disposable[] = [];
	disposables.push(
		vscode.commands.registerCommand("vscotion.addIntegrationKey", async () => {
			const notionIntegrationKey: string = GetNotionSoIntegrationsKey();
			const userIntegrationKeyInput = await VsCodeSetInputBox("Enter Your Integration Key", notionIntegrationKey);
			if (userIntegrationKeyInput) {
				SetNotionSoIntegrationsKey(userIntegrationKeyInput);
			}
		})
	);
	disposables.push( vscode.commands.registerCommand('vscotion.showCurrentIntegrationKey', () => {
		const notionIntegrationKey: string = GetNotionSoIntegrationsKey();
		vscode.window.showInformationMessage(notionIntegrationKey);
	})
	);
}

export function deactivate() { }

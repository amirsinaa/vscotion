import * as vscode from "vscode";
import { VsCodeSetInputBox } from "./components/vscode-elements";
import {
	GetNotionSoIntegrationsKey,
	SetNotionSoIntegrationsKey,
	CreateNotionSnippetPage,
	GetNotionPagesList,
} from "./components/notion";

type NotionAvailablePages = {
	pageTitle: string,
	pageId: string
};


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

	disposables.push(vscode.commands.registerCommand('vscotion.showCurrentIntegrationKey', () => {
		const notionIntegrationKey: string = GetNotionSoIntegrationsKey();
		vscode.window.showInformationMessage(notionIntegrationKey);
	})
	);

	disposables.push(
		vscode.commands.registerCommand("vscotion.setNotionPage", async () => {
			const pages: NotionAvailablePages[] = await GetNotionPagesList();
			const pagesSelectBox = pages.map(item => item.pageTitle);

			return await vscode.window.showQuickPick(pagesSelectBox, {
				placeHolder: 'Please first select a page to store your snippets',
			}).then(selectedItem => {
				const selectedPage = pages.find(page => page.pageTitle === selectedItem)
				return selectedPage?.pageId
			});
			// return result;
			// vscode.window.showInformationMessage(`Got: ${result} , ${pages}`);
		})
	);

	disposables.push(
		vscode.commands.registerCommand('vscotion.scanDocument', () => {
			const editor = vscode.window.activeTextEditor
			if (editor) {
				return {
					code: editor.document.getText(),
					language: editor.document.languageId
				}
			}
			throw Error("You can't make a snippet from nothing!")
		}
		)
	);

	disposables.push(
		vscode.commands.registerCommand('vscotion.saveToNotion', async () => {
			const parentPageId: string = await vscode.commands.executeCommand('vscotion.setNotionPage') ?? ''

			// vscode.window.showInformationMessage(`${parentPageId}`)

			const pageTitle: string = await vscode.window.showInputBox({
				title: "Please type your snippet title",
				value: "My awesome snippet"
			}) ?? '';

			const snippet: any = await vscode.commands.executeCommand('vscotion.scanDocument')

			// vscode.window.showInformationMessage(JSON.stringify(pageTitle))

			const postsnippet = await CreateNotionSnippetPage(parentPageId, pageTitle, snippet.code, snippet.language)

			// vscode.window.showInformationMessage(`${snippet.code}`)

			vscode.window.showInformationMessage(JSON.stringify(postsnippet))

		})
	);
}

export function deactivate() { }

import * as vscode from "vscode";

export const CreateHumanReadableOutputChannel = vscode.window.createOutputChannel("vscotion");

export const SetNotionSoIntegrationsKey = (IntegrationKey: string) =>
  vscode.workspace.getConfiguration().update("vscotion.IntegrationKey", IntegrationKey, vscode.ConfigurationTarget.Global);

export const GetNotionSoIntegrationsKey = (): string => {
  const integrationKey = vscode.workspace.getConfiguration("vscotion").get("IntegrationKey", "");
  if (!integrationKey) {
    vscode.window.showInformationMessage("You haven't set your notion integration key yet. do you want to ?", "Yes", "No").then(answer => {
      answer === "Yes" ? vscode.commands.executeCommand("vscotion.addIntegrationKey") : "";
    });
  }
  return integrationKey;
};
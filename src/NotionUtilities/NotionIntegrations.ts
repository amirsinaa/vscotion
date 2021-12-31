import * as vscode from "vscode";

/**
 * Creates a new output channel with the name vscotion.
 *
 * https://code.visualstudio.com/api/references/vscode-api#window.createOutputChannel
 *
 */
export const CreateHumanReadableOutputChannel = vscode.window.createOutputChannel("vscotion");

/**
 * Get and set a global configuration in vscode.
 *
 * https://code.visualstudio.com/api/references/vscode-api#window.getConfiguration
 *
 */
export const GetNotionSoIntegrationsKey = (): string => vscode.workspace.getConfiguration("vscotion").get("IntegrationKey", "");

export const SetNotionSoIntegrationsKey = (IntegrationKey: string) =>
  vscode.workspace.getConfiguration().update("vscotion.IntegrationKey", IntegrationKey, vscode.ConfigurationTarget.Global);
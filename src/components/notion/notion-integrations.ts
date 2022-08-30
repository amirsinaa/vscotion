import { ExtensionContext, SecretStorage, window } from 'vscode';

export const CreateHumanReadableOutputChannel = window.createOutputChannel('vscotion');
export class Auth {
  private static _instance: Auth;

  constructor(private secretStorage: SecretStorage) { }

  static init(context: ExtensionContext): void {
    Auth._instance = new Auth(context.secrets);
  }

  static get instance(): Auth {
    return Auth._instance;
  }

  async storeNotionToken(token?: string): Promise<void> {
    if (token) {
      this.secretStorage.store('notion_integration_key', token);
    }
  }

  async getNotionToken(): Promise<string | undefined> {
    return await this.secretStorage.get('notion_integration_key');
  }
}

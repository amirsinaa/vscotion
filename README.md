# VSCotion

Vscotion is a Visual studio code extension to make a code snippet from the currently open file in vscode to your Notion account.

To use this extension you need to follow below steps :

## ![Step 1: Create a Notion integration.](https://developers.notion.com/docs#step-1-create-an-integration)
![Step 1](https://files.readme.io/2ec137d-093ad49-create-integration.gif)
- Go to https://www.notion.com/my-integrations.
- Click the "+ New integration" button.
- Give your integration a name - (e.g., vscotion)
- Select the workspace where you want to install this integration.
- Select the capabilities that your integration will have.
  - Only content permissions are required (read,update,insert)
- Click "Submit" to create the integration.
- Copy the "Internal Integration Token" on the next page and hold on to it for now

## Step 2: Share a page with your integration
Notion integrations don't have access to any pages in the workspace at first. A user must share specific pages with an integration in order for those pages to be accessed using the API.
- Go to your Notion workspace select a page you want to save your snippets onto
- On the top right corner click on *Share* and choose your integration

## Step 3: Add integration to VSCotion
- Head over to Vscode and open the command palette ( Ctrl+Shift+P on windows,  ⌘+Shift+P on mac)
- Type `VSCotion: Add Notion Integration Key` and enter
- Paste your integration key from step 1 here and enter


![Step 1](images/howto.gif)
That's it. from now on when you want to make a snippet from a code you're working on you only need to open the command palette and type  `VSCotion: Save snippet to notion` then a list of pages that you have shared with your integration will popup. select a page and give your snippet a name and submit.
A new child page will be created on the chosen page with a code block .

## VScode extension guidelines
* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Notion API document
* [Notion API document](https://developers.notion.com/docs)

## Disclaimer
Logo for this extension has been created with ![DALL·E mini](https://huggingface.co/spaces/dalle-mini/dalle-mini) via `Notion application logo merged with visual studio code application logo`

## License
MIT License
Copyright (c) 2022 Amirsina Shadkami
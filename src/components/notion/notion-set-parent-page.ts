import * as vscode from 'vscode';
import {
  GetNotionPagesList,
} from './notion-search-page';
import { NotionAvailablePages } from './types/notion-page-response';


export const SetNotionParentPage = async (notionInstance: any) => {
  const pages: NotionAvailablePages[] = await GetNotionPagesList(notionInstance);
  const pagesSelectBox = pages.map(item => item.pageTitle);

  return await vscode.window.showQuickPick(pagesSelectBox, {
    placeHolder: 'Please first select a page to store your snippets',
  }).then(selectedItem => {
    const selectedPage = pages.find(page => page.pageTitle === selectedItem);
    return selectedPage?.pageId;
  });
};
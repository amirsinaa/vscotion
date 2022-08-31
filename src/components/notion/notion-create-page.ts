import { CreatePageResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionSupportedLanguages } from './types/notion-supported-languages';
import { purifyLanguageType } from '../../utilities/purify-language-type';

export const CreateNotionSnippetPage = async (notionInstace: any, parentId: string, pageTitle: string, codeContent: string, codeLanguage: NotionSupportedLanguages): Promise<CreatePageResponse> => {
  const snippetPage = await notionInstace.pages.create({
    'parent': {
      'type': 'page_id',
      'page_id': parentId
    },

    'properties': {
      'title': [
        {
          'text': {
            'content': pageTitle
          }
        }
      ]
    },

    'children': [
      {
        'type': 'code',
        'object': 'block',
        'code': {
          'rich_text': [{
            'type': 'text',
            'text': {
              'content': codeContent
            }
          }],
          'language': purifyLanguageType(codeLanguage)
        }
      }
    ]
  });
  if (pageTitle.length !== 0 || parentId.length !== 0) { return snippetPage; }
  throw Error('Operation cancled');
};
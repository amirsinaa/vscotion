import { GetNotionSoIntegrationsKey } from './notion-integrations';
import { Client } from "@notionhq/client";
import { CreatePageResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionSupportedLanguages } from "./types/notion-supported-languages"

const notion = new Client({ auth: GetNotionSoIntegrationsKey() });

export const CreateNotionSnippetPage = async (parentId: string, pageTitle: string, codeContent: string, codeLanguage: NotionSupportedLanguages): Promise<CreatePageResponse> => {
  const snippetPage = await notion.pages.create({
    "parent": {
      "type": "page_id",
      "page_id": parentId
    },

    "properties": {
      "title": [
        {
          "text": {
            "content": pageTitle
          }
        }
      ]
    },

    "children": [
      {
        "type": "code",
        "object": "block",
        "code": {
          "rich_text": [{
            "type": "text",
            "text": {
              "content": codeContent
            }
          }],
          "language": codeLanguage
        }
      }
    ]
  });
  return snippetPage;
};
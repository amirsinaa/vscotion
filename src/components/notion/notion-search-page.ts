import { GetNotionSoIntegrationsKey } from './notion-integrations';
import { getPageTitleFromUrl } from "../../utilities";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: GetNotionSoIntegrationsKey() });

export const GetNotionPagesList = async () => {
  const accessiblePage = await notion.search({
    filter: {
      property: 'object',
      value: 'page'
    }
  });
  if (Object.keys(accessiblePage.results).length === 0) {
    throw Error('It seems you dont have access to any pages');
  }

  return accessiblePage.results.map(item => {
    // @ts-ignore: ignore due to notion interface
    const { id, url } = item;
    const title = getPageTitleFromUrl(url);
    return { pageTitle: title, pageId: id };
  });
};

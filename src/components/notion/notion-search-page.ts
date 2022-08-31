import { NotionAvailablePages } from './types/notion-page-response';
import { getPageTitleFromUrl } from '../../utilities';

export const GetNotionPagesList = async (notionInstance: any): Promise<NotionAvailablePages[]> => {
  const accessiblePage = await notionInstance.search({
    filter: {
      property: 'object',
      value: 'page'
    }
  });
  if (Object.keys(accessiblePage.results).length === 0) {
    throw Error('It seems you dont have access to any pages');
  }

  return accessiblePage.results.map((item: { id: string; url: string; }) => {
    const { id, url } = item;
    const title = getPageTitleFromUrl(url);
    return { pageTitle: title, pageId: id };
  });
};

import { NotionSupportedLanguages } from '../components/notion/types/notion-supported-languages';

export function purifyLanguageType(language: NotionSupportedLanguages) {
  switch (language) {
    case 'plaintext':
      return 'plain text';
    case 'jsonc':
      return 'plain text';
    case 'java':
      return 'java/c/c++/c#';
    case 'c#':
      return 'java/c/c++/c#';
    case 'c++':
      return 'java/c/c++/c#';
    case 'c':
      return 'java/c/c++/c#';
    default:
      return language;
  }
}
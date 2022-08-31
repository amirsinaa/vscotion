import { NotionSupportedLanguages } from './notion-supported-languages';

export type VscodeDocumentContent = {
  code: string,
  language: NotionSupportedLanguages
}

export type PostPage = VscodeDocumentContent & {
  id: string,
  title: string
}
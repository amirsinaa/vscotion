
export function getPageTitleFromUrl(url: string) {
  return url.replace(/https:\/\/www\.notion\.so\//, '').replace(/-{1}[a-z0-9]{32}/, '').toString();
}

export function getUUIDfromUrl(url: string) {
  return /-{1}[a-z0-9]{32}/.exec(url)?.toString().replace(/-/, '');
}
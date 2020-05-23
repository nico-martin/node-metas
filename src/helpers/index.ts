export { default as readFile } from './readFile';

export const untrailingSlashIt = (str: string): string =>
  str.replace(/\/$/, '');

export const trailingSlashIt = (str: string): string =>
  untrailingSlashIt(str) + '/';

export const unprecedingSlashIt = (str: string): string =>
  str.replace(/^\//, '');

export const precedingSlashIt = (str: string): string =>
  '/' + unprecedingSlashIt(str);

export const escapeHtml = (unsafe: string): string =>
  unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export const log = (text: string) => console.log(`node-metas: ${text}`);

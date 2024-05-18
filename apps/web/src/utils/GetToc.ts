import { marked } from 'marked';
import type { HeadingList } from '../components/Blog/Toc';

export function GetTOC(markdown: string | undefined): HeadingList[] {
    if (markdown) {
        const toc = marked.lexer(markdown);
        return toc.filter((token) => token.type === 'heading') as unknown as HeadingList[];
    }
    return [];
}

import Word from '../../Word';
import { Note } from '../../openxml/word/Note';
export declare function parseFootnotes(word: Word, doc: Document): Record<string, Note>;

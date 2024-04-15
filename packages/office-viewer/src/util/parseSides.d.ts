/**
 * 来自 https://github.com/jednano/parse-css-sides/blob/master/src/index.ts
 */
export interface ISides {
    top: string;
    right: string;
    bottom: string;
    left: string;
    important?: boolean;
}
export default function parseSides(value: string): ISides;

import maybe, { Maybe } from "./maybe.ts";

/**
 * **nth** returns element under given index, if negative index is provided element at (length + index) is returned
 * @param i index
 * @param xs a list of elements or a string
 * @returns an element or a character
 */
export default function nth(i: number, xs: string): Maybe<string>;
export default function nth<A>(i: number, xs: A[]): Maybe<A>;
export default function nth(i, xs) {
    if (i < 0) {
        i = xs.length + i;
    }

    return maybe(xs[i]);
}

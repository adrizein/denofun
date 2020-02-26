import maybe, { Maybe } from "./maybe.ts";

/**
 * **last** accepts a list of items (or a string) and returns the last element (or character)
 * @param xs elements that function will be applied to
 * @returns the last element of the array
 */
export default function last(xs: string): Maybe<string>;
export default function last<A>(xs: A[]): Maybe<A>;
export default function last(xs) {
    return maybe(xs[xs.length - 1]);
}

import maybe, { Maybe } from "./maybe.ts";

/**
 * **head** returns the first element of an array or a string
 * @param xs input array
 * @returns first element of an array or string
 */
export default function head(xs: string): Maybe<string>;
export default function head<A>(xs: A[]): Maybe<A>;
export default function head(xs) {
    return maybe(xs[0]);
}

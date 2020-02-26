import { Maybe } from "./maybe.ts";

/**
 * 
 * @param f 
 * @param listA 
 */
export default function mapMaybe<A, B>(f: (a: A) => Maybe<B>, listA: A[]): B[] {
    const result: B[] = [];
    for (const a of listA) {
        f(a).map((b) => result.push(b));
    }

    return result;
}

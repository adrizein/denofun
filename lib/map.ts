import { Maybe } from "./maybe.ts";
import { Either } from "./either.ts";

/**
 * **map** applies a function to each element of a Functor, returns the same data structure containing the images of each element
 * @param fn function that will be applied on each element
 * @param xs elements to which the function will be applied
 * @returns new data structure with results of the map
 */
export default function map<Arg, Res>(fn: (x: Arg) => Res, xs: Arg[]): Res[];
export default function map<Arg, Res>(fn: (x: Arg) => Res, xs: Maybe<Arg>): Maybe<Res>;
export default function map<Arg, Res, Right>(fn: (x: Arg) => Res, xs: Either<Arg, Right>): Either<Res, Right>;
export default function map<Arg, Res, Index>(fn: (x: Arg) => Res, xs: Map<Index, Arg>): Map<Index, Res>;
export default function map<Arg, Res>(fn: (x: Arg) => Res, xs: Set<Arg>): Set<Res>;
export default function map<Arg, Res>(fn: (x: Arg) => Res, xs: Promise<Arg>): Promise<Res>;
export default function map<Arg, Res>(fn: (x: Arg) => Res, xs: {[key: string]: Arg}): {[key: string]: Res};
export default function map<Arg, Res, Ia extends Iterable<Arg>>(fn: (x: Arg) => Res, xs: Ia): Res[]; // Can't guarantee to return the same input type, so we return an array
export default function map<Arg, Res, Ma extends { map(f: (x: Arg) => Res): Fb }, Fb extends { map<T>(f: (x: Res) => T): any }>(fn: (x: Arg) => Res, xs: Ma): Fb;
export default function map(fn, xs) {
    if (Array.isArray(xs)) {
        return xs.map((value) => fn(value));
    }

    if (xs instanceof Promise) {
        return xs.then(fn);
    }

    if (xs instanceof Map) {
        const values = new Map();
        for (const [index, value] of xs.entries()) {
            values.set(index, fn(value));
        }

        return values;
    }

    if (xs instanceof Set) {
        const values = new Set();
        for (const value of xs) {
            values.add(fn(value));
        }

        return values;
    }

    if (!!xs && (xs['map'] instanceof Function)) {
        return xs.map(fn)
    }

    if (!!xs && (xs[Symbol.iterator] instanceof Function)) {
        const values: any[] = [];
        for (const value of xs) {
            values.push(fn(value));
        }

        return values;
    }

    if (!!xs && (typeof xs === "object")) {
        const result = {};
        for (const key in xs) {
            if (xs.hasOwnProperty(key) && typeof key === 'string') {
                result[key] = fn(xs[key]);
            }
        }

        return result;
    }

    return [];
}
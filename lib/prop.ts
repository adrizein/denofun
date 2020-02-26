import maybe, { Maybe } from "./maybe.ts";

/**
 * **prop** maybe returns a value from object under a specific key
 * @param key property's key name
 * @param obj input object
 * @returns value of object's `key` property
 */
export default function prop<T, K extends keyof T>(key: K, value: T): Maybe<Required<T>[K]> {
    return maybe(value[key]);
}
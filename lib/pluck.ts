import prop from "./prop.ts";
import mapMaybe from "./map_maybe.ts";

/**
 * **pluck** takes an array of objects and a property name and returns an array containing the named property of each object
 * @param key property's key name
 * @param xs input object
 * @returns the list of values for a given key from each of the objects
 */
export default function pluck<T, K extends keyof T>(key: K, xs: T[]): Required<T>[K][] {
    return mapMaybe((value) => prop(key, value), xs);
}

/**
 * **omit** returns a copy of an object but without specified keys
 * @param keys keys to be omitted
 * @param object object to be copied
 * @returns an object without specified keys
 */
export default function omit<T extends object, K extends keyof T>(keys: K[], object: T): object {
    let target: any = {};

    for (const key of Object.keys(object)) {
        if (keys.includes(key as K)) continue;
        if (!Object.prototype.hasOwnProperty.call(object, key)) continue;

        target[key] = object[key];
    }

    return target;
}

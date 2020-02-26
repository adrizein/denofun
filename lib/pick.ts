/**
 * **pick** returns a copy of an object with only the keys selected
 * @param keys keys to be selected
 * @param object object to be copied
 * @returns an object with specified keys only
 */
export default function pick<T, K extends keyof T>(keys: K[], object: T): {[key in K]: T[K]} {
    let target: any = {};

    for (let i of keys) {
        if (i in object) {
            target[i] = object[i]
        }
    }

    return target;
}

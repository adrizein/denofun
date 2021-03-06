/**
 * **pick** returns a copy of an object with only the keys selected
 * @param keys keys to be selected
 * @param object object to be copied
 * @returns an object with specified keys only
 */
export default function pick(keys: string[], object: object): object {
    let target = {};

    for (let i of keys) {
        if (i in object) {
            target[i] = object[i]
        }
    }

    return target;
}

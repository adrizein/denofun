import curry from "./curry.ts";

/**
 * **find** looks up first element of an array that matches the function passed
 * @param fn function that will be used to find an element, it has to return boolean
 * @param xs an array of elements to be searched
 */
function find<T>(fn: (x: T) => boolean, xs: T[]): T {
    return xs.find(fn);
}

export default curry(find);

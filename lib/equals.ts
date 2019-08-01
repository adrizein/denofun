/**
 * **equals** checks if two values are equal, **warning:** for non-primitives uses JSON parsing (for now)
 * @param l first element
 * @param r second element
 * @returns true or false
 */
export default function equals(l: any, r: any): boolean {
    if (typeof l !== 'object' && typeof r !== 'object') {
        return l === r;
    }

    return JSON.stringify(l) === JSON.stringify(r);
}

import { assertEquals } from "https://deno.land/std@v0.33.0/testing/asserts.ts"

import compose from '../lib/compose.ts';

function add5(n) {
    return n + 5;
}

function mul2(n) {
    return n * 2;
}

function sub(a, b) {
    return a - b;
}

const add5mul2 = compose(mul2, add5);
const mul2sub = compose(mul2, sub);

Deno.test({
    name: "compose",
    fn(): void {
        assertEquals(add5mul2(5), 20);
        assertEquals(add5mul2(2), 14);
        assertEquals(mul2sub(2, 5), -6);
    }
})

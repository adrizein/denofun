import { assertEquals } from "https://deno.land/std@v0.33.0/testing/asserts.ts"

import head from '../lib/head.ts';

Deno.test({
    name: "head",
    fn(): void {
        assertEquals(head([]).get(), undefined);
        assertEquals(head(['a', 'b', 'c']).get(), 'a');
        assertEquals(head([1, 'a', 'c']).get(), 1)
        assertEquals(head('hello').get(), 'h')
        assertEquals(head([[], 'w']).get(), [])
    }
})

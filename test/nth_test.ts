import { assertEquals } from "https://deno.land/std@v0.33.0/testing/asserts.ts"

import nth from '../lib/nth.ts';

Deno.test({
    name: "nth",
    fn(): void {
        assertEquals(nth(2, [0, 1, 2, 3, 4]).get(), 2);
        assertEquals(nth(4, ["a", "b", "c", "d", "e"]).get(), "e");
        assertEquals(nth(0, []).get(), undefined);
        assertEquals(nth(-2, [0, 2, 4]).get(), 2);
        assertEquals(nth(2, "hello world!").get(), "l");
        assertEquals(nth(4, "hello world!").get(), "o");
        assertEquals(nth(0, "").get(), undefined);
        assertEquals(nth(-2, "hello world!").get(), "d");
        assertEquals(nth(12, "hello world!").get(), undefined);
        assertEquals(nth(-14, "hello world!").get(), undefined);
    }
})


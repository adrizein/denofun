import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import keys from '../lib/keys.ts';

test({
    name: "keys",
    fn(): void {
        assertEquals(keys({ a: 1, b: 2 }), ['a', 'b']);
        assertEquals(keys({}), []);
    }
})

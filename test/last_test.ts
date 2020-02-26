import { assertEquals } from "https://deno.land/std@v0.33.0/testing/asserts.ts"

import last from '../lib/last.ts';

Deno.test({
    name: "last",
    fn(): void {
        assertEquals(last(["a", "b", "c"]).get(), "c");
        assertEquals(last("hello world").get(), "d");
        assertEquals(last([1, "test", { make: "Toyota" }]).get(), { make: "Toyota" });
    }
})

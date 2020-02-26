import { assertEquals } from "https://deno.land/std@v0.33.0/testing/asserts.ts";

import mapMaybe from "../lib/map_maybe.ts";
import maybe from "../lib/maybe.ts";


Deno.test({
    name: 'mapMaybe',
    fn() {
        assertEquals(mapMaybe((x) => {
            if (x > 1) {
                return maybe(x + 1);
            } else {
                return maybe();
            }
        }, [0, 1, 3, -1, 20]), [4, 21]);
    }
})
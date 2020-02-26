import { assertEquals } from "https://deno.land/std@v0.33.0/testing/asserts.ts"

import prop from '../lib/prop.ts';

type Car = {make: string, model: string, wheels?: number};
const car: Car = { make: "Alfa Romeo", model: "Giulia" };

Deno.test({
    name: "prop",
    fn(): void {
        assertEquals(prop("make", car).get(), "Alfa Romeo");
        assertEquals(prop<Car, "wheels">("wheels", car).get(), undefined);
    }
})

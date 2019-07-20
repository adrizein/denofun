import { test } from "std/testing/mod.ts";
import { assertEquals } from "std/testing/asserts.ts";

import find from './find.ts';

function findToyota(car) {
    return car.make === 'Toyota';
}

const cars = [
    { make: "Alfa Romeo", model: "Giulia" },
    { make: "Alfa Romeo", model: "Stelvio" },
    { make: "Ford", model: "Mustang "},
    { make: "Ford", model: "Focus "},
    { make: "Toyota", model: "Mirai" },
    { make: "Toyota", model: "Yaris" },
    { make: "Toyota", model: "Supra" },
];

test({
    name: "find",
    fn(): void {
        assertEquals(find(findToyota, cars), { make: "Toyota", model: "Mirai" });
        assertEquals(find(findToyota, []), undefined);
    }
});

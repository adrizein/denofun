import { assertEquals } from "https://deno.land/std@v0.33.0/testing/asserts.ts";

import map from '../lib/map.ts';
import maybe from "../lib/maybe.ts";
import either from "../lib/either.ts";

function double(n) {
    return n * 2;
}

Deno.test({
    name: "map",
    fn(): void {
        assertEquals(map(double, [1, 2, 3]), [2, 4, 6]);
        assertEquals(map(double, []), []);
        assertEquals(map(double, null as any), []);
        assertEquals(map(double, maybe(1)).get(), 2);
        assertEquals(map(double, maybe()).get(), undefined);
        assertEquals(map(double, either.left(1)).get(), 2);
        assertEquals(map(double, either.right('hello')).get(), 'hello');
        assertEquals(map(double, new Set([1, 2, 3])), new Set([2, 4, 6]));
        assertEquals(map(double, new Map([['one', 1], ['two', 2], ['three', 3]])), new Map([['one', 2], ['two', 4], ['three', 6]]));
        assertEquals(map(double, {a: 1, b: 2, 11: 12}), {a: 2, b: 4, 11: 24});
        const customIterable: Iterable<string> = {
            *[Symbol.iterator]() {
                yield "hey";
                yield "hello";
                yield "world";
            }
        };
        assertEquals(map<string, string, Iterable<string>>((s) => s.toUpperCase(), customIterable), ["HEY", "HELLO", "WORLD"]);

        class CustomFunctor<T> {
            constructor(readonly one: T, readonly two: T) {}
            map<R>(f: (t: T) => R): CustomFunctor<R> {
                return new CustomFunctor(f(this.one), f(this.two));
            }
        }
        assertEquals(map<string, number, CustomFunctor<string>, CustomFunctor<number>>((s) => s.length, new CustomFunctor('hello', 'a')), new CustomFunctor(5, 1));
    }
});
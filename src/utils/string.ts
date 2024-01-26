// deno-lint-ignore ban-ts-comment
// @ts-ignore
import { slug } from "https://deno.land/x/slug@v1.1.0/mod.ts";

/**
 * Converts a string into a valid slug
 * @example
 * console.log(slug("some string")); // some-string
 * console.log(slug("some string", "_")); // some_string
 * console.log(slug("I ♥ UNICODE")); // I-love-UNICODE
 * console.log(slug("I ♥ UNICODE"), { lower: true }); // i-love-unicode
 * @example
 * slug("some ƒÚÑķÝ and ☢ string", {
 *  replacement: "-",
 *  remove: undefined,
 *  lower: true,
 *  strict: false,
 *  locale: "vi",
 *  trim: true,
 *  extends: { "☢": "nuclear" },
 * }); // some-fUNkY-and-nuclear-string
 */
export const slugify = (str: string, options?: string | object): string => {
  return slug(str, options);
};

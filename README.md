# beabee-common

`beabee-common` is a shared codebase utilized across Beabee projects, compatible
with Node.js, Deno, and web browsers.

## Installation

To install `beabee-common`, use the following command:

```bash
npm install @beabee/beabee-common --save
```

## Usage

### Node.js

In a Node.js environment, use `beabee-common` as follows:

```ts
import { parseDate } from "@beabee/beabee-common";

parseDate("2022"); // Returns: [ 2021-12-31T23:00:00.000Z, 'y' ]
```

### Deno

Support for Deno is planned. Details on publishing to deno.land will be provided
in the future.

## Development

### Requirements

Development of `beabee-common` requires the latest stable versions of both Deno
and Node.js:

- Deno (latest stable version)
- Node.js (latest stable version)

### Build Process

To build the project, run:

```bash
npm install
npm run build # Alternatively, use `deno task build`
```

### Scripts

Scripts for NPM and Deno tasks are synchronized, ensuring consistency whether
you use `npm run ...` or `deno task ...`. They are defined in both
`package.json` and `deno.json`. New scripts must be added manually.

Key scripts include:

#### `build`

This runs several sub-scripts:

- `build:types` - Generates TypeScript types using the `tsc` compiler.
- `build:node`:
  - `build:node:cjs` - Creates a CommonJS bundle with `esbuild`, script located
    at `./scripts/esbuild.cjs.ts`.
  - `build:node:esm` - Generates an ESM bundle using `esbuild`, script found at
    `./scripts/esbuild.esm.ts`.

Node.js builds are created using [esbuild](https://esbuild.github.io/) from Deno
source. Deno projects can directly utilize TypeScript source from `./mod.ts`.

Deno's support for NPM packages differs in syntax, e.g., `date-fns` is imported
as `import { format } from "npm:date-fns";` in Deno, and
`import { format } from "date-fns";` in Node.js. Aliases in `deno.json` enable
consistent codebase usage across environments.

#### `sync:deps`

Synchronizes dependencies across `package.json` and `deno.json`, establishing
necessary aliases in Deno. See `./scripts/sync-deps.ts` for details.

#### `generate:index`

Generates `index.ts` files. Located at `./scripts/generate-index.ts`.

#### `format`

Formats code using Deno's standard formatter.

#### `lint`

Lints code using Deno's standard linter.

#### `test`

Testing is divided into several scripts:

- `test:types` - Checks for type errors using `tsc`.
- `test:deno` - Main tests using Deno's standard testing framework.
- `test:node`:
  - `test:node:esm` - Tests ESM build importability in Node.js.
  - `test:node:cjs` - Tests CJS build importability in Node.js.

## License

`beabee-common` is licensed under the [AGPL-3.0](./LICENSE) license.

# pandoc-ts-types

This package provides TypeScript definitions for Pandoc AST.

The definition currently complies with [pandoc-types 1.23](https://github.com/jgm/pandoc-types/releases/tag/1.23).

## Installation

```
$ npm install --save-dev pandoc-types
$ yarn add -D pandoc-types
```

## Usage

```ts
import { PandocJSON } from 'pandoc-types';

const content = await fs.readFile('ast.json', 'utf-8');
const json = JSON.parse(content) as PandocJSON;
```

## License

MIT
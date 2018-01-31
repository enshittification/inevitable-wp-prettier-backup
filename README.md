![Prettier Banner](https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-dark.png)

<h2 align="center">Opinionated Code Formatter</h2>

<p align="center">
  <em>
  JavaScript
  · Flow
  · TypeScript
  · CSS
  · SCSS
  · Less
  · GraphQL
  · JSON
  · Markdown
  </em>
</p>

<p align="center">
  <a href="https://gitter.im/jlongster/prettier">
    <img alt="Gitter" src="https://img.shields.io/gitter/room/jlongster/prettier.svg?style=flat-square">
  </a>
  <a href="https://travis-ci.org/prettier/prettier">
    <img alt="Travis" src="https://img.shields.io/travis/prettier/prettier.svg?style=flat-square">
  </a>
  <a href="https://codecov.io/gh/prettier/prettier">
    <img alt="Codecov" src="https://img.shields.io/codecov/c/github/prettier/prettier.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/prettier">
    <img alt="npm version" src="https://img.shields.io/npm/v/prettier.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/prettier">
    <img alt="npm version" src="https://img.shields.io/npm/dm/prettier.svg?style=flat-square">
  </a>
  <a href="#badge">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  </a>
  <a href="https://twitter.com/PrettierCode">
    <img alt="Follow+Prettier+on+Twitter" src="https://img.shields.io/twitter/follow/prettiercode.svg?label=follow+prettier&style=flat-square">
  </a>
</p>

## Calypso-Prettier

This is a fork of prettier that adds in all of the extra spaces we use in Calypso.
It is forked off of prettier v1.9.

In order to install run
```sh
npm i --save-dev "git+https://github.com/Automattic/calypso-prettier.git#calypso-1.9"
```
The original readme continues unchanged below:

## Intro

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

### Input

<!-- prettier-ignore -->
```js
foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());
```

### Output

```js
foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne()
);
```

Prettier can be ran [in your editor](http://prettier.io/docs/en/editors.html) on-save, in a [pre-commit hook](https://prettier.io/docs/en/precommit.html), or in [CI environments](https://prettier.io/docs/en/cli.html#list-different) to ensure your codebase has a consistent style without devs ever having to post a nit comment on a code review ever again!

---

**[Documentation](https://prettier.io/docs/en/)**

<!-- prettier-ignore -->
[Install](https://prettier.io/docs/en/install.html) ·
[Options](https://prettier.io/docs/en/options.html) ·
[CLI](https://prettier.io/docs/en/cli.html) ·
[API](https://prettier.io/docs/en/api.html)

**[Playground](https://prettier.io/playground/)**

---

## Badge

Show the world you're using _Prettier_ → [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

```md
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

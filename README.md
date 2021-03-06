# Twind

> the smallest, fastest, most feature complete Tailwind-in-JS solution in existence

[![MIT License](https://badgen.net/github/license/tw-in-js/twind)](https://github.com/tw-in-js/twind/blob/main/LICENSE)
[![Latest Release](https://flat.badgen.net/npm/v/twind?icon=npm&label)](https://www.npmjs.com/package/twind)
[![Bundle Size](https://flat.badgen.net/bundlephobia/minzip/twind?icon=packagephobia&label&color=blue)](https://bundlephobia.com/result?p=twind 'gzip bundle size (including dependencies)')
[![Package Size](https://flat.badgen.net/badgesize/brotli/https:/unpkg.com/twind/twind.js?icon=jsdelivr&label&color=blue)](https://unpkg.com/twind/twind.js 'brotli package size (without dependencies)')
[![Typescript](https://flat.badgen.net/badge/icon/included?icon=typescript&label)](https://unpkg.com/browse/twind/twind.d.ts)
[![Github](https://flat.badgen.net/badge/icon/tw-in-js%2Ftwind?icon=github&label)](https://github.com/tw-in-js/twind)
[![CI](https://github.com/tw-in-js/twind/workflows/CI/badge.svg)](https://github.com/tw-in-js/twind/actions?query=workflow%3Aci)
[![Coverage Status](https://flat.badgen.net/coveralls/c/github/tw-in-js/twind/main?icon=codecov&label)](https://coveralls.io/github/tw-in-js/twind?branch=main)
[![PRs Welcome](https://flat.badgen.net/badge/PRs/welcome/purple)](http://makeapullrequest.com)

---

If you are here then the likelihood is that you using Tailwind or a CSS-in-JS solution such as styled-components, emotion or goober in order to style your web applications. These packages have proven overwhelmingly popular and revolutionized web development as we know it.

The purpose of this project is unify these two approaches; embracing the flexibility of CSS-in-JS whilst conforming to the carefully considered constraints of the Tailwind API.

We hope to create a place for likeminded people to discuss issues, share ideas and collaborate.

## Quickstart

If you would like to get started with twind right away then copy paste this code into your favorite sandbox.

> 📚 For more detailed instruction on usage please [read the documentation](https://github.com/tw-in-js/twind/tree/main/docs).

```js
import 'https://cdn.skypack.dev/twind/shim'

document.body.innerHTML = `
  <main class="h-screen bg-black font(bold sans)">
    <h1 class="text(sm:red-500 md:white lg:blue-500)">This is Twind!</h1>
  </main>
`
```

Alternatively try the [live and interactive demo](https://esm.codes/#aW1wb3J0IHsgdHcsIHNldHVwIH0gZnJvbSAnaHR0cHM6Ly9jZG4uc2t5cGFjay5kZXYvdHdpbmQnCgpzZXR1cCh7CiAgdGhlbWU6IHsKICAgIC8vIEV4YW1wbGUgb2YgZXh0ZW5kaW5nIHRoZSBkZWZhdWx0IHRoZW1lCiAgICBleHRlbmQ6IHsKICAgICAgY29sb3JzOiB7IGhvdHBpbms6ICcjRkYwMEZGJyB9LAogICAgICByb3RhdGU6IHsgNTogJzVkZWcnIH0KICAgIH0KICB9Cn0pCgpjb25zdCBhcHAgPSAoKSA9PiBgCiAgICA8ZGl2IGNsYXNzPScke3N0eWxlLmNvbnRhaW5lcn0nPgogICAgICA8aDEgY2xhc3M9JyR7CiAgICAgICAgLy8gRXhhbXBsZSBvZiBhbiBpbmxpbmUgc3R5bGUKICAgICAgICB0d2AKICAgICAgICAgIHRleHQod2hpdGUgNHhsKQogICAgICAgICAgZm9udChib2xkIHNhbnMpCiAgICAgICAgICB0cmFuc2l0aW9uLXRyYW5zZm9ybQogICAgICAgICAgaG92ZXI6KAogICAgICAgICAgICByb3RhdGUtNQogICAgICAgICAgICBzY2FsZS0xNTAKICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXIKICAgICAgICAgICkKICAgICAgICBgCiAgICAgIH0nPkhlbGxvIFdvcmxkPC9oMT4KICAgIDwvZGl2PgogIGA7CiAgCiAgCmNvbnN0IHN0eWxlID0gewogIC8vIEV4YW1wbGUgb2YgYWJzdHJhY3RlZCBzdHlsZQogIGNvbnRhaW5lcjogdHdgCiAgICBoLWZ1bGwKICAgIGJnLWhvdHBpbmsKICAgIGZsZXgKICAgIGl0ZW1zLWNlbnRlcgogICAganVzdGlmeS1jZW50ZXIKICBgCn0KCmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYXBwKCk=).

## Rational

This project was started by the authors of two similar libraries – [oceanwind](https://github.com/lukejacksonn/oceanwind) and [beamwind](https://github.com/kenoxa/beamwind) – who chose to collaborate rather than compete with each other in this space.

> Combining efforts has saved us time and resulted in a much more complete and production ready offering.

Furthermore we were able to agree on and coin some standards for certain aspects of the implementation based on our collective learnings; things like parsing input, [grouping syntax](https://github.com/tw-in-js/twind/blob/main/docs/grouping.md), prescedence calculation and [plugin API](https://github.com/tw-in-js/twind/blob/main/docs/plugins.md).

## Why twind?

A lot of developers ask _"Why not just use Tailwind?"_ and our answer is always that you should use Tailwind, it is an absolutely incredible API with amazing documentation!

> I've wanted to do a CSS-in-JS flavor of Tailwind for over 2 years because of all the neat benefits you get there so it's cool to see projects like this! – [@adamwathan](https://twitter.com/adamwathan/status/1320370489408225282)

However, if like us you are already building your app in JS using a framework like react, preact, vue or svelte, rather than just static HTML, then compiling Tailwind shorthand just in time (like twind does) rather than ahead of time like with Tailwind and PostCSS, comes with a lot of advantages.

### Advantages

<details>
  <summary>⚡️ All setup is done almost instantly at runtime, no build step required</summary>
In fact, there is no dependency on Tailwind or PostCSS at all. This makes that is possible to reconfigure the compiler on the fly and apply new themes without rebuilding anything.
</details>

<details>
  <summary>💸 Unlimited styles for a low fixed cost of ~10KB</summary>
By shipping the compiler (rather than the resultant output) there is a known and fixed cost associated with styling. No matter how many styles you write or how many variants you use, all your users will ever have to download is approximately 10Kb of code (which is less than styled-components or your average Tailwind build).
</details>

<details>
  <summary>✈️ Includes a themed Tailwind preflight stylesheet by default</summary>
The [base reset](https://tailwindcss.com/docs/preflight) provided by Tailwind is instantiated with respect to your theme (values like fonts, colors etc.) and injected in the stylesheet during setup. This guarantees more consistent cross browser results out of the box.
</details>

<details>
  <summary>❄️ Optional hashing of class names ensuring no conflicts</summary>
By default no hashing is enabled to aid debugging during development. However it is possible to configure Twind to [hash class names](https://github.com/tw-in-js/twind/blob/main/docs/customization.md#hash) before injecting them into the DOM. This may be useful in production as it can reduce the down the wire size of server side rendered pages pages and eliminates any chance of class name conflicts with third party styles.
</details>

<details>
  <summary>🎢 Familiar and Tailwind V2 compliant theming</summary>
Theming is done exactly as [documented by the Tailwind](https://tailwindcss.com/docs/theme) meaning that you can copy paste in your themes from existing projects. The only different here is that there is no need to rebuild anything after changing you theme. Just refresh the page!
</details>

<details>
  <summary>🤖 Built in support for conditionally combining rules</summary>
Input is not limited to strings like with HTML classes. The Twind function accept arrays, objects, template literals, functions, almost everything! The interpretter spec is inspired by and very similar to [clsx](https://github.com/lukeed/clsx) and offers a much more developer friendly API that handles null values gracefully.
</details>

<details>
  <summary>🌈 Improve readability by breaking rules over multiple lines</summary>
Using template literals as input ([the recommended method](https://github.com/tw-in-js/twind/blob/main/docs/usage.md#template-literal-recommended)) or even object syntax allows you to break rules over multiple lines, drastically improving readability and maintainability of complex rules.
</details>

<details>
  <summary>🎯 Custom syntax for grouping directives and variants</summary>
Having control over the interpreter affords us the possibility of defining terse syntax for [grouping responsive and pseudo variants](https://github.com/tw-in-js/twind/blob/main/docs/grouping.md) as well as directives with common prefixes. This massively reduces repetition and improves comprehension.
</details>

<details>
  <summary>🚓 Escape hatch for writing arbritary styles</summary>
The compiler [accepts functions](https://github.com/tw-in-js/twind/blob/main/docs/usage.md#inline-plugins) that can return arbritary CSS-in-JS objects. A convenient a escape hatch for all those one off rules which aren't supported by tailwind. The `&` keyword allows you to write complex rules (like pseudo elements `&::before` and `&::after`) that are beyond the scope of inline styles without having to add another dependency.
</details>

<details>
  <summary>🚅 Faster than all popular CSS-in-JS libraries</summary>
Given the limited grammar that the compiler has to support there is a much higher chance of finding a rule and its variant in the cache, because of this along with some other specialist optimizations we are able to compile and inject CSS faster than all the popular CSS-in-JS solutions.
</details>

<details>
  <summary>🔌 Language extension via plugins </summary>
Extending the grammar is trivial and can be achieved by providing functions _inline_ or by generalizing inline rules and defining them during setup under [the _plugins_ key](https://github.com/tw-in-js/twind/blob/main/docs/plugins.md).
</details>

<details>
  <summary>🎩 Remove all runtime overhead with static extraction</summary>
The compiler itself is not reliant on the DOM at all which makes it an ideal candidate for static extraction which essentially removes all runtime overhead. This is possible during SSR or build time prepass.
</details>

<details>
  <summary>🧪 Generate styles for stringified markup</summary>
It might not always be desireable to generate rules by invoking the compiler direct via function call. In this case you may use the shim module which finds and replaces class names within static HTML, generating styles appropriately. This is especially useful during developemnt too; for example when editing classes in the inspector.
</details>

## Example

The following snippet demonstrates typical usage of both the `tw` and `setup` functions:

```js
import { tw, setup } from 'https://cdn.skypack.dev/twind'

setup({
  preflight: true, // Include Tailwind base reset
  theme: {
    extend: {
      colors: { hotpink: '#FF00FF' },
      rotate: { 5: '5deg' },
    },
  },
})

body.innerHTML = `
  <div class='${tw`
    h-full
    flex items-center justify-center
    bg(hotpink burple-500 green-500)
  `}'>
    <h1 class='${tw`
      text(white 4xl)
      font(bold sans)
      transition-transform
      hover:(rotate-5 scale-150 cursor-pointer)
    `}'>Hello World</h1>
  </div>
`
```

## Benchmarks

The implementation is tested for speed alongside several popular CSS-in-JS solutions that export general css functions. For those that only support a _styled component_ approach an equivalent test has been setup. Currently Twind is the fastest in both scenarios in part due to optimal caching of static parts from template literals.

### CSS Function w/ template literal

```
twind                       x 403,080 ops/sec ±1.41% (88 runs sampled)
goober@2.0.18               x 143,202 ops/sec ±0.90% (95 runs sampled)
emotion@11.0.0              x 224,368 ops/sec ±0.52% (93 runs sampled)
```

### Styled component w/ template literal

```
twind                       x 51,628 ops/sec ±0.63% (89 runs sampled)
goober@2.0.18               x 40,069 ops/sec ±0.43% (96 runs sampled)
emotion@11.0.0              x 35,349 ops/sec ±1.01% (93 runs sampled)
styled-components@5.2.1     x 38,284 ops/sec ±0.48% (93 runs sampled)
```

For a more detailed testing summary please see the [benchmarks](/benchmarks) directory.

## Inspiration

It would be untrue to suggest that the design here is totally original, other than the founders initial attempts at implementing such a module ([oceanwind](https://github.com/lukejacksonn/oceanwind) and [beamwind](https://github.com/kenoxa/beamwind)) we are truly standing on the shoulders of giants.

- [tailwind](https://tailwindcss.com/): created a wonderfully thought out API on which the compiler's grammar was defined.
- [styled-components](https://styled-components.com/): implemented and popularised the advantages of doing CSS-in-JS.
- [htm](https://github.com/developit/htm): a JSX compiler that proved there is merit in doing runtime compilation of DSLs like JSX.
- [goober](https://github.com/cristianbote/goober): an impossibly small yet efficient CSS-in-JS implemetation that defines critical module features.
- [otion](https://github.com/kripod/otion): the first CSS-in-JS solution specifically oriented around handling CSS in an atomic fashion.
- [clsx](https://github.com/lukeed/clsx): a tiny utility for constructing class name strings conditionally.
- [tiny-css-prefixer](https://github.com/kitten/tiny-css-prefixer): essentials CSS prefixing helpers in less than 1KB of JavaScript.
- [csstype](https://github.com/frenic/csstype): providing autocompletion and type checking for CSS properties and values.

## License

[MIT](https://github.com/tw-in-js/twind/blob/main/LICENSE)
